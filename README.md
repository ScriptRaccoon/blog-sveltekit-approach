# Blog with SvelteKit pages

This repository demonstrates how a blog with SvelteKit can be built,
without using any markdown or extra packages.

Demo: https://blog-sveltekit-approach.netlify.app

The idea is to put every blog post inside of a route resp. SvelteKit page. For example, one blog post could be the SvelteKit page `src/routes/post/first-post/+page.svelte`. In these SvelteKit pages, we can do whatever we want. We can also add Svelte components without any extra configuration.

Metadata are exported from the context script tag:

```svelte
<!-- src/routes/post/first-post/+page.svelte --->

<script lang="ts" context="module">
	import Post from "../Post.svelte";
	export let title = "My first blog post";
	export let date = new Date("2023-01-22");
</script>

<Post {title} {date}>
	<p>
		Write something here
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

<svelte:head>
	<title>{title}</title>
</svelte:head>

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

It should be clear how to add any other post data, for example a summary, updated-at date, etc.
