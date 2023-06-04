<script lang="ts" context="module">
	import Post from "../Post.svelte";
	export let title = "How to add titles";
	export let date = new Date("2023-04-24");
</script>

<Post {title} {date}>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Labore recusandae odio amet ab impedit enim! Molestias
		praesentium totam cupiditate blanditiis! Veniam modi unde iste
		quo amet excepturi. Labore mollitia, doloremque animi
		excepturi natus aperiam in voluptatibus eius ipsum placeat
		ratione.
	</p>
</Post>
