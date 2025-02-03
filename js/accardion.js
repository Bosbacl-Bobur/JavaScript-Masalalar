document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const accordionItem = this.closest(".accordion-item");
            const isActive = accordionItem.classList.contains("active");

            document.querySelectorAll(".accordion-item").forEach(item => {
                item.classList.remove("active");
                item.querySelector(".accordion-button").classList.add("collapsed");
                item.querySelector(".accordion-collapse").classList.remove("show");
            });

            if (isActive === false) {    
                accordionItem.classList.add("active");
                this.classList.remove("collapsed");
                accordionItem.querySelector(".accordion-collapse").classList.add("show");
            }
        });
    });
});
