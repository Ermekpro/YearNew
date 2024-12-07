// Функция для динамического добавления снежинок
function createSnowflakes() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Устанавливаем случайную позицию и свойства анимации
    snowflake.style.left = Math.random() * 100 + "%"; 
    snowflake.style.top = "-10px"; // Всегда начинаем сверху
    snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; // 5-10 секунд продолжительности
    snowflake.style.animationDelay = Math.random() * 2 + "s"; // 0-2 секунд задержки
    snowflake.innerHTML = "❄"; // Символ снежинки

    // Добавляем снежинку в DOM
    document.getElementById("snowfall").appendChild(snowflake);

    // Удаляем снежинку после окончания анимации
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(snowflake.style.animationDuration) * 1000);
}

// Создаем снежинки с меньшим интервалом
setInterval(createSnowflakes, 200); // Интервал появления снежинок уменьшен до 300 мс (чаще)