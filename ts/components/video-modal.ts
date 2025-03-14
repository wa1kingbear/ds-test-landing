export const videoModal = (): void => {
    const body: HTMLElement | null = document.querySelector("body");
    const cards: NodeListOf<HTMLElement> =
        document.querySelectorAll(".video-card");
    const modal: HTMLElement | null = document.querySelector(".video-modal");

    if (!modal) return;

    const cardClickHandler = (e: Event): void => {
        const target = e.currentTarget as HTMLElement;
        const src: string | undefined = target.dataset.src;

        if (!src) return;

        const closeModalButton: HTMLElement | null = modal.querySelector(
            ".video-modal__close"
        );
        const modalOverlay: HTMLElement | null = modal.querySelector(
            ".video-modal__overlay"
        );
        const modalFrame: HTMLElement | null = modal.querySelector(
            ".video-modal__content__frame"
        );

        if (!modalFrame || !closeModalButton || !modalOverlay) return;

        const closeModal = (): void => {
            modal.classList.remove("active");

            setTimeout(() => {
                modal.style.display = "";
                const iframe: HTMLIFrameElement | null =
                    modalFrame.querySelector("iframe");
                iframe?.remove();
            }, 350);
        };

        closeModalButton.addEventListener("click", closeModal);
        modalOverlay.addEventListener("click", closeModal);

        modalFrame.innerHTML = `<iframe src="${src}"></iframe>`;

        body?.classList.add("lock");
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add("active");
        }, 150);
    };

    cards.forEach((card: HTMLElement) => {
        card.addEventListener("click", cardClickHandler);
    });
};
