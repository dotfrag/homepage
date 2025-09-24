// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import syntaxTheme from "./catppuccin-mocha.json";
import pagefind from "./src/utils/pagefind";

function transformerWrapper() {
	return {
		name: "rehype-code:tab",
		// @ts-ignore
		root(root) {
			return {
				type: "root",
				children: [
					{
						type: "element",
						tagName: "div",
						properties: {
							class: "group relative",
						},
						children: root.children,
					},
				],
			};
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: "https://dotfrag.com/",
	integrations: [mdx(), sitemap(), pagefind(), icon()],
	markdown: {
		shikiConfig: {
			// @ts-ignore
			theme: syntaxTheme,
			// @ts-ignore
			transformers: [transformerWrapper()],
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
