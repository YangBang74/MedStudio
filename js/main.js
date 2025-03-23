const menuItems = document.querySelectorAll('.sub-menu');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const submenu = item.querySelector('.header__sub');
        if (submenu) {
            submenu.style.display = 'block';
            
        }
    })
    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.header__sub');
        if (submenu) {
            submenu.style.display = 'none';
            
        }
    });
});

document.querySelectorAll('.accordion__header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;       

        // Закрываем все открытые аккордеоны
        document.querySelectorAll('.accordion-body').forEach(item => {
        if (item !== body && item.classList.contains('active')) {
            item.classList.remove('active');
            item.style.maxHeight = null; // сбросить max-height
            item.style.padding = '0'; // сбросить отступ
            item.previousElementSibling.classList.remove('active'); // сбросить активность заголовка
            }
        });
        // Переключаем текущий аккордеон
        body.classList.toggle('active');
        header.classList.toggle('active'); // переключаем класс активности для заголовка
        if (body.classList.contains('active')) {
            body.style.maxHeight = body.scrollHeight + "px"; // устанавливаем max-height для плавного раскрытия
            body.style.padding = '15px 0'; // устанавливаем отступ при открытии
        } else {
            body.style.maxHeight = null; // сбросить max-height
            body.style.padding = '0'; // сбросить отступ
        }
    });
});

function toogleMenu(burger, body) {
    const bodys = document.querySelector(body);
    const king = document.querySelector(burger);
    bodys.classList.toggle('click');
    king.classList.toggle('click');
}

function playVideo(videoId) {
    const video = document.getElementById(videoId);
    video.play(); // Запускаем воспроизведение
}