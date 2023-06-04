<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Blog with SvelteKit without markdown</title>
</svelte:head>

<section>
	<h2>All Posts</h2>

	<ul>
		{#each data.paths as path}
			<li>
				<a href="/post/{path}">{path}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		margin-left: 1rem;
	}
</style>
