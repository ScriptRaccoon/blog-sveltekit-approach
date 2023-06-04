<script lang="ts" context="module">
	import Post from "../Post.svelte";
	export let title = "My first blog post";
	export let date = new Date("2023-01-22");
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
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Voluptatibus error dignissimos ipsa facere cum sit ipsum et
		iure facilis sunt?
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Possimus voluptatibus, at sequi, eius obcaecati nesciunt autem
		aliquam deserunt explicabo ex expedita cum necessitatibus
		totam sit error ullam. Ipsum delectus eaque tempora maiores
		consequuntur voluptate ut nisi qui, eligendi saepe voluptatum
		deserunt, vel non aperiam, numquam id. Illo, atque? Earum,
		laborum!
	</p>
</Post>
