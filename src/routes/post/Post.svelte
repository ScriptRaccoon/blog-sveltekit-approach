<script lang="ts">
	export let title: string;
</script>

<h2>{title}</h2>

<slot />

<p>
	<a href="/">All Posts</a>
</p>

<style>
	p {
		margin-block: 1rem;
	}
</style>
