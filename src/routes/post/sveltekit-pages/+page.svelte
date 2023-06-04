<script lang="ts" context="module">
	import Post from "../Post.svelte";
	export let title = "How pages work in SvelteKit";
	export let date = new Date("2023-02-04");
</script>

<Post {title} {date}>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit.
		Suscipit, dolorum saepe laudantium culpa laborum quidem earum
		iure veniam ipsum libero dolorem quasi, porro, quis numquam
		aspernatur architecto dicta nisi veritatis incidunt vitae
		minima! Ad est dolorum architecto, perspiciatis, cupiditate
		iure fuga ratione officia velit dolorem voluptate nobis
		molestiae omnis sint.
	</p>
</Post>
