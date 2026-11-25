document.addEventListener('DOMContentLoaded', () => {
    const secoes = document.querySelectorAll('header, main section');

    secoes.forEach((secao, index) => {
        secao.style.opacity = '0';
        secao.style.transform = 'translateY(14px)';
        secao.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            secao.style.opacity = '1';
            secao.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});