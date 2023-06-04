<script lang="ts">
	export let title: string;
	export let date: Date;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h2>{title}</h2>

<span class="date">{date.toLocaleDateString()}</span>

<slot />
<p>
	<a href="/">All Posts</a>
</p>
