export const anchors = (): void => {
    const links: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll(".scroll-link");

    const handleClick = (e: MouseEvent): void => {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const anchor: string | null = target.getAttribute("href");

        if (anchor) {
            const targetElement: HTMLElement | null =
                document.querySelector(anchor);

            if (targetElement) {
                const targetPosition: number =
                    targetElement.getBoundingClientRect().top +
                    window.pageYOffset;

                window.scrollTo({
                    top: targetPosition - 50,
                    behavior: "smooth",
                });
            }
        }
    };

    links.forEach((button: HTMLAnchorElement) => {
        button.addEventListener("click", handleClick);
    });
};
