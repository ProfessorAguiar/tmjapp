document.addEventListener('DOMContentLoaded', () => {
    const rota = document.querySelector('.rota');
    const onibus = document.querySelector('.onibus');
    const infoEstacao = document.getElementById('info-estacao');
    const estacoesData = [
        { nome: 'Ponto Inicial', posicao: 0.05 },
        { nome: 'Lapa', posicao: 0.2 },
        { nome: 'Santa Teresa', posicao: 0.35 },
        { nome: 'Glória', posicao: 0.5 },
        { nome: 'Flamengo', posicao: 0.65 },
        { nome: 'Copacabana', posicao: 0.8 },
        { nome: 'Ponto Final', posicao: 0.95 }
    ];
    const tempoEntreEstacoes = 3000; // 3 segundos (ajuste conforme necessário)
    let currentIndex = 0;
    let direction = 1; // 1 para ida, -1 para volta

    // Criar as estações na rota
    estacoesData.forEach(estacao => {
        const estacaoDiv = document.createElement('div');
        estacaoDiv.classList.add('estacao');
        estacaoDiv.textContent = ''; // O nome será exibido ao chegar
        estacaoDiv.style.left = `${estacao.posicao * 100}%`;
        estacaoDiv.dataset.nome = estacao.nome;
        rota.appendChild(estacaoDiv);
    });

    function moverOnibus() {
        const proximaEstacaoIndex = currentIndex + direction;

        if (proximaEstacaoIndex < 0 || proximaEstacaoIndex >= estacoesData.length) {
            direction *= -1; // Inverter a direção
            currentIndex += direction; // Ajustar o índice após a inversão
        } else {
            currentIndex = proximaEstacaoIndex;
        }

        const posicaoOnibus = estacoesData[currentIndex].posicao * rota.offsetWidth - (onibus.offsetWidth / 2);
        onibus.style.left = `${posicaoOnibus}px`;
        infoEstacao.textContent = `Estação: ${estacoesData[currentIndex].nome}`;

        setTimeout(moverOnibus, tempoEntreEstacoes);
    }

    // Iniciar a animação
    moverOnibus();
});