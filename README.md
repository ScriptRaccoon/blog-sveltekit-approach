# Blog with SvelteKit pages

https://svelte-blog-approach-2.netlify.app/

This small repo demonstrates how a blog with SvelteKit can be built,
without using any markdown or extra packages. It's dead simple actually.

The idea is to put every blog post inside of a route. A route must be a folder in SvelteKit, so post A for example is in `src/routes/post/A/`, the content being `+page.svelte`. We can specify a layout for all posts by adding `src/routes/post/+layout.svelte`. In these SvelteKit pages, we can do whatever we want. We can also add components and display them.

In order to compute a list of all blog posts, we use the following function in `src/routes/+page.svelte`:

```TypeScript
let posts: string[] = [];

function calculate_posts() {
    const path_object = import.meta.glob(
        "/src/routes/post/*/*.svelte"
    );
    const paths = Object.keys(path_object);

    posts = paths
        .map((path) => path.split("/").at(-2) ?? "")
        .filter((name) => name.length > 0);
}
```

Then we can list links to all posts as follows:

```Svelte
<ul>
	{#each posts as post}
		<li>
			<a href="/post/{post}">{post}</a>
		</li>
	{/each}
</ul>
```

---

Here is a similar approach: https://github.com/ScriptRaccoon/blog-svelte-approach
