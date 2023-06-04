# Blog with SvelteKit pages

This repository demonstrates how a blog with SvelteKit can be built,
without using any markdown or extra packages.

Demo: https://blog-sveltekit-approach

The idea is to put every blog post inside of a route. A route must be a folder in SvelteKit, so one post could be `src/routes/post/add-title/`, the content being `+page.svelte`. In these SvelteKit pages, we can do whatever we want. We can also add components and display them.

Metadata are exported from the context script tag:

```svelte
<!-- src/routes/post/add-title/+page.svelte --->

<script lang="ts" context="module">
	import Post from "../Post.svelte";
	export let title = "How to add titles";
	export let date = new Date("2023-04-24");
</script>

<Post {title} {date}>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Labore recusandae odio amet ab impedit enim! Molestias
		praesentium totam cupiditate blanditiis! Veniam modi unde iste
		quo amet excepturi. Labore mollitia, doloremque animi
		excepturi natus aperiam in voluptatibus eius ipsum placeat
		ratione.
	</p>
</Post>
```

In the wrapper `Post.svelte` component, we render the metadata in a consistent way. We can also add anything which every post needs to include, for example a link to the page with all posts. (This is somewhat similar to a layout file, but more flexible, and the usage of props seems to be more easy than using page data.)

```svelte
<!-- src/routes/post/Post.svelte -->
<script lang="ts">
	export let title: string;
	export let date: Date;
</script>

<h2>{title}</h2>

<p>{date.toLocaleDateString()}</p>

<slot />

<p >
	<a href="/">All Posts</a>
</p>
```

Now, in order to list all posts on a page, we make the following computation in its load function:

```typescript
// src/routes/+page.server.ts

export const load = async () => {
	const posts_paths = Object.keys(
		import.meta.glob("/src/routes/post/*/*.svelte")
	);

	const unsorted_posts: post[] = await Promise.all(
		posts_paths.map(async (path) => {
			const link = path.split("/").at(-2) ?? "";
			const component = await import(
				`../routes/post/${link}/+page.svelte`
			);
			const { title, date } = component;
			return { link, title, date };
		})
	);

	const posts = unsorted_posts.sort(
		(p, q) => q.date.getTime() - p.date.getTime()
	);

	return { posts };
};
```

The main steps are the following:

-   Vite's `import.meta.glob` function gives us the list of all files in our post folder.
-   We import the page components with `await import(...)` and extract their props.
-   In the end, we sort the posts by date.
-   The type `post` is declared in `app.d.ts`.

On the page itself, we can now list links to all posts as follows:

```svelte
<!-- src/routes/+page.svelte -->

<script lang="ts">
	export let data;
	const { posts } = data;
</script>

<ul>
	{#each posts as post}
		<li>
			<a href="/post/{post.link}">{post.title}</a>
			&ndash;
			<span>{post.date.toLocaleDateString()}</span>
		</li>
	{/each}
</ul>
```
