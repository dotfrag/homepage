// @ts-ignore
import { Input, Instance, ResultList } from "@pagefind/modular-ui";

interface searchResult {
	excerpt: string;
	meta: {
		title: string;
	};
	url: string;
}

const instance = new Instance({
	bundlePath: "/pagefind/",
});

instance.add(
	new Input({
		inputElement: "#searchBox",
	}),
);

instance.add(
	new ResultList({
		containerElement: "#searchResults",
		placeholderTemplate: () => {
			return "<p>Loading...</p>";
		},
		resultTemplate: (
			result: searchResult,
		): string | HTMLElement | HTMLElement[] => {
			// console.log(result);
			const a = document.createElement("a");
			a.href = result.url;
			a.className = "pagefind-result";

			const title = document.createElement("span");
			title.className = "pagefind-title";
			title.innerText = result.meta.title;

			const excerpt = document.createElement("p");
			excerpt.className = "pagefind-excerpt";
			excerpt.innerHTML = result.excerpt;

			a.append(title);
			a.append(excerpt);
			return a;
		},
	}),
);

// instance.triggerSearch("test");
