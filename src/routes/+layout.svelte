<script lang="ts">
	import "$lib/css/style.css";
</script>

<div class="wrapper">
	<header>
		<h1>Blog with SvelteKit without markdown</h1>
	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	header {
		text-align: center;
		padding-block: 2rem;
	}

	.wrapper {
		max-width: 40rem;
		margin-inline: auto;
	}
</style>
