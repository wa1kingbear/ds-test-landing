export const accordion = (): void => {
    const accordions: NodeListOf<HTMLElement> =
        document.querySelectorAll(".accordion");

    const accordionClickHandler = (e: MouseEvent): void => {
        const button = e.currentTarget as HTMLButtonElement;
        const parent = button.parentElement;

        if (parent) {
            parent.classList.toggle("active");
        }
    };

    accordions.forEach((item: HTMLElement) => {
        const button: HTMLButtonElement | null = item.querySelector("button");

        if (button) {
            button.addEventListener("click", accordionClickHandler);
        }
    });
};
