document.addEventListener("DOMContentLoaded", () => {
    const codeExamples = document.querySelectorAll(".code-example");

    codeExamples.forEach(codeExample => {
        const section = codeExample.querySelector("section");
        const textarea = codeExample.querySelector("textarea");
        const autoResize = (element) => {
            const offsetY = 10;

            if (!element) return;
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + offsetY + 'px';
        }

        autoResize(textarea);
        section.innerHTML = textarea.value;

        textarea.addEventListener("input", () => {
            autoResize(textarea)
            section.innerHTML = textarea.value;
        })
        
        window.addEventListener("resize", () => {
            autoResize(textarea)
            section.innerHTML = textarea.value;
        })
    });
});