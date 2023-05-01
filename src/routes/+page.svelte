<script lang="ts">
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

	calculate_posts();
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<h1>Posts</h1>

<ul>
	{#each posts as post}
		<li>
			<a href="/post/{post}">{post}</a>
		</li>
	{/each}
</ul>
