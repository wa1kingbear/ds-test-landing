export const hiddenText = (): void => {
    const blocks: NodeListOf<HTMLElement> =
        document.querySelectorAll(".hidden-text");

    const hiddenTextInit = (block: HTMLElement): void => {
        const button: HTMLButtonElement | null = block.querySelector(
            ".hidden-text__button button"
        );

        if (!button) {
            console.error("Button not found in the block:", block);
            return;
        }

        const hiddenTextCollapse = (): void => {
            block.classList.toggle("open");
            button.textContent = block.classList.contains("open")
                ? "Скрыть"
                : "Читать больше";
        };

        button.addEventListener("click", hiddenTextCollapse);
    };

    blocks.forEach((block) => hiddenTextInit(block));
};
