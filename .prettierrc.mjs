/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	proseWrap: "always",
	plugins: [
		"prettier-plugin-astro",
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
	importOrder: [
		"<TYPES>",
		"^astro$",
		"^astro/.*$",
		"^astro:.*$",
		"^@astro",
		"^@layouts/(.*)$",
		"^@components/(.*)$",
		"<THIRD_PARTY_MODULES>",
		"",
		"^[.]",
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
