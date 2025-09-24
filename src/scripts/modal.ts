const modal = document.getElementById("searchModal") as HTMLDialogElement;
const modalOpenBtns = document.querySelectorAll("[data-modal-open]");
const overflow = window.getComputedStyle(document.documentElement).overflow;
const closeButton = document.getElementById("searchModalCloseBtn");

function showModal() {
	modal.showModal();
	document.body.style.overflow = "hidden";
	document.querySelector<HTMLInputElement>("#search-input")?.focus();
}

function hideModal() {
	modal.close();
}

function toggleModal() {
	modal.open ? hideModal() : showModal();
}

for (const btn of modalOpenBtns) {
	btn.addEventListener("click", () => showModal());
}

closeButton?.addEventListener("click", () => {
	hideModal();
});

modal.addEventListener("click", (e) => {
	const dialogDimensions = modal.getBoundingClientRect();
	if (
		e.clientX < dialogDimensions.left ||
		e.clientX > dialogDimensions.right ||
		e.clientY < dialogDimensions.top ||
		e.clientY > dialogDimensions.bottom
	) {
		hideModal();
	}
});

modal.addEventListener("close", () => {
	document.body.style.overflow = overflow;
});

window.addEventListener("keydown", (event) => {
	if (event.ctrlKey && event.key === "k") {
		event.preventDefault();
		toggleModal();
	}
});

// showModal();
