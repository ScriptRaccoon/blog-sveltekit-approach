<script lang="ts">
	export let data;
	const { posts } = data;
</script>

<svelte:head>
	<title>Blog with SvelteKit without markdown</title>
</svelte:head>

<section>
	<h2>All Posts</h2>

	<ul>
		{#each posts as post}
			<li>
				<a href="/post/{post.link}">
					{post.title}
				</a>
				&ndash;
				<span class="date"
					>{post.date.toLocaleDateString()}</span
				>
			</li>
		{/each}
	</ul>
	<p>
		Check out the code on <a
			href="https://github.com/ScriptRaccoon/blog-sveltekit-approach"
			target="_blank"
		>
			GitHub</a
		>.
	</p>
</section>

<style>
	ul {
		margin-left: 1rem;
	}
</style>
