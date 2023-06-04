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
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		margin-left: 1rem;
	}
</style>
