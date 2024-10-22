const listaSelecaoCartoondbz = document.querySelectorAll(".listagem .cartoondbz");

// Função para alternar classes de forma genérica
function toggleClasse(elemento, classe, adicionar) {
    if (elemento) {
        adicionar ? elemento.classList.add(classe) : elemento.classList.remove(classe);
    }
}

function definirConjuntoDeImagens(id) {
    switch (id) {
        case 'goku': return ['src/image/Goku1.png', 'src/image/Goku2.png', 'src/image/Goku3.png'];
        case 'vegeta': return ['src/image/Vegeta1.png', 'src/image/Vegeta2.png'];
        case 'broly': return ['src/image/Broly1.png', 'src/image/Broly2.png', 'src/image/Broly3.png'];
        case 'freeza': return ['src/image/Freeza1.png', 'src/image/Freeza2.png', 'src/image/Freeza3.png','src/image/Freeza4.png'];
        default: return [];
    }
}

function adicionarEventoCliqueNaImagem(imagemElemento, imagens) {
    let indiceAtual = 0;
    imagemElemento.addEventListener('click', () => {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        imagemElemento.src = imagens[indiceAtual];
    });
}

listaSelecaoCartoondbz.forEach(cartoondbz => {
    cartoondbz.addEventListener('click', () => {
        const idSelecionado = cartoondbz.id;
        const idCartao = `cartao-${idSelecionado}`;

        // Alternar visibilidade dos cartões e ativação na listagem
        toggleClasse(document.querySelector('.aberto'), 'aberto', false);
        toggleClasse(document.getElementById(idCartao), 'aberto', true);

        toggleClasse(document.querySelector('.ativo'), 'ativo', false);
        toggleClasse(cartoondbz, 'ativo', true);

        // Configurar conjunto de imagens e evento na imagem
        const imagemElemento = document.getElementById(`imagem-${idSelecionado}`);
        const imagens = definirConjuntoDeImagens(idSelecionado);

        imagemElemento.replaceWith(imagemElemento.cloneNode(true));
        adicionarEventoCliqueNaImagem(document.getElementById(`imagem-${idSelecionado}`), imagens);
    });
});
