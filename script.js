// Função para rolagem suave
function scrollSuave(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const targetId = event.currentTarget.getAttribute("href"); // Obtém o id do alvo
    const targetElement = document.querySelector(targetId); // Encontra o elemento alvo
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth" // Define o comportamento da rolagem como suave
    });
}