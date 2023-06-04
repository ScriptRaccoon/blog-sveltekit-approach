export const load = () => {
	const path_object = import.meta.glob(
		"/src/routes/post/*/*.svelte"
	);
	const full_paths = Object.keys(path_object);

	const paths = full_paths
		.map((path) => path.split("/").at(-2) ?? "")
		.filter((name) => name.length > 0);

	return { paths };
};
