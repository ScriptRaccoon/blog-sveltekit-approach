<script lang="ts" context="module">
	import Post from "../Post.svelte";
	export let title = "How to write longer posts";
</script>

<Post {title}>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
		consequatur illum ipsum facilis minima perspiciatis a nostrum
		impedit repudiandae rem ipsam repellendus iusto ducimus,
		maxime facere, tempore aperiam nisi fugiat!
	</p>
</Post>
