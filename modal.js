// Загружаем звук клика
const clickSound = new Audio("sounds/имя_файла");

// Громкость (по желанию)
clickSound.volume = 0.5;

document.addEventListener("click", (e) => {

    // Если нажали по кнопке — воспроизводим звук
    if (e.target.matches("[data-open], [data-close], .btn")) {
        clickSound.currentTime = 0;  // чтобы звук проигрывался каждый раз
        clickSound.play();
    }

    // 🔹 Открытие модалки
    if (e.target.dataset.open) {
        document.getElementById(e.target.dataset.open).classList.add("show");
    }

    // 🔹 Закрытие по кнопке
    if (e.target.dataset.close !== undefined) {
        e.target.closest(".modal").classList.remove("show");
    }

    // 🔹 Закрытие кликом по фону
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("show");
    }
});
