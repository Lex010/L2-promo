// Функция для обновления даты последнего изменения
function updateLastUpdatedDate() {
  let lastUpdatedElement = document.getElementById("site-update");
  let lastUpdatedDate = new Date(document.lastModified);
  lastUpdatedElement.textContent = lastUpdatedDate.toLocaleString();
}

// Обновляем дату сразу после загрузки страницы
updateLastUpdatedDate();

// Обновляем дату каждую минуту (можете настроить интервал под свои нужды)
setInterval(updateLastUpdatedDate, 60000);
