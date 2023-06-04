<script lang="ts">
	export let title: string;
	export let date: Date;
</script>

<h2>{title}</h2>

<p class="date">{date.toLocaleDateString()}</p>

<slot />

<p class="link-container">
	<a href="/">All Posts</a>
</p>

<style>
	.date {
		color: #444;
		font-size: smaller;
		margin-bottom: 1rem;
	}

	.link-container {
		margin-block: 1rem;
	}
</style>
