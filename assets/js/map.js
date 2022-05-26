var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [44.621403, 132.796260], // Москва
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([44.621600, 132.796260], {
            balloonContent: 'цвет <strong>красный</strong>'
        }, {
            preset: 'islands#redFamilyIcon'
        }));
}