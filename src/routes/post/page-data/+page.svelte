<script lang="ts" context="module">
	import Post from "../Post.svelte";
	export let title = "How to use page data in SvelteKit";
	export let date = new Date("2023-05-12");
</script>

<Post {title} {date}>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
		quisquam ex, quia id amet numquam neque, aliquid voluptatum
		dolores impedit aspernatur iste! Non, tempore sequi, iusto
		neque voluptatum, possimus repellat voluptate a eveniet sed
		culpa odit magnam aspernatur mollitia. Aperiam?
	</p>
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
		repellendus!
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
		nostrum ducimus, dolores libero veniam ex doloribus officia
		sunt eaque soluta esse, blanditiis, ipsa error beatae
		doloremque. A laudantium dolorum impedit fuga odio cupiditate
		error, quod quis aliquam, amet distinctio officiis praesentium
		aspernatur cumque perspiciatis fugiat ut porro maxime.
		Provident, maxime.
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
		illum quasi, animi doloremque assumenda vel totam iste
		pariatur nam at, fuga nihil officiis quidem voluptatem,
		dolorem eos asperiores dolor alias.
	</p>
</Post>
