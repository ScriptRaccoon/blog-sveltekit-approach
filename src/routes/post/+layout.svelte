<script lang="ts">
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>

<h2>{$page.data.title}</h2>

<slot />

<p>
	<a href="/">All Posts</a>
</p>

<style>
	p {
		margin-block: 1rem;
	}
</style>
