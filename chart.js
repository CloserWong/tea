// Получение контекста рисования для элемента canvas с идентификатором "repairChart"
var repairCanvas = document.getElementById("repairChart").getContext("2d");

//В зависимости от размера экрана, ставим размер шрифта
var size =  window.innerWidth < 316 ? 5 : window.innerWidth < 355 ? 10 : window.innerWidth < 530 ? 12 : 16;

// Данные для графика
var repairData = {
    // Метки для оси X
    labels: [" - Красный чай", " - Зелёный чай", " - Белый чай"],
    datasets: [{
        label: "Продано кг",
        backgroundColor: "#198754",
        borderColor: "#198754",
        hoverBackgroundColor: "#13653F",
        data: [50, 100, 30] // Данные по принесенной технике
    }]
};

// Создание графика
var repairChart = new Chart(repairCanvas, {
    type: 'bar', // Тип графика
    data: repairData, // Данные для отображения
    response: true,
    options: {
        scales: {
            x: {
                // Настройки оси X
                ticks: {
                    color: 'black', // Цвет меток
                    font: {
                        size: size, // Размер шрифта
                        family: "Rubik" // Семейство шрифта
                    }
                }
            },
            y: {
                // Настройки оси Y
                ticks: {
                    color: 'white', // Цвет меток
                    font: {
                        size: size, // Размер шрифта
                        family: 'Rubik' // Семейство шрифта
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                // Настройки всплывающей подсказки
                titleColor: 'white', // Цвет заголовка
                bodyColor: 'white', // Цвет текста
                bodyFont: {
                    size: size, // Размер текста
                    family: 'Rubik' // Семейство шрифта
                },
                titleFont: {
                    size: size, // Размер заголовка
                    family: 'Rubik' // Семейство шрифта
                },
                displayColors: false, // Отображение цветных квадратиков
            },
            legend: {
                display: false
            }
        },
        indexAxis: 'y', // Ось индексов (по оси Y)
        barPercentage: 0.5, // Процент ширины столбцов
    }
});
