var myMap;

// ������� �������� API � ���������� DOM.
ymaps.ready(init);

function init () {
    // �������� ���������� ����� � ��� �������� � ���������� �
    // �������� id ("map").
    myMap = new ymaps.Map('map', {
        // ��� ������������� ����� ����������� ����� �������
        // � ����� � ����������� ���������������.
        center: [44.621403, 132.796260], // ������
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([44.621600, 132.796260], {
            balloonContent: '���� <strong>�������</strong>'
        }, {
            preset: 'islands#redFamilyIcon'
        }));
}