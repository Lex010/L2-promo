function copyText(event) {
  // Находим текущую кнопку по элементу, на который нажали
  const button = event.target;

  // Создаём элемент textarea в памяти, чтобы поместить в него текст кнопки
  const textarea = document.createElement('textarea');
  textarea.value = button.innerText;

  // Добавляем элемент textarea на страницу (но не видимый для пользователя)
  document.body.appendChild(textarea);

  // Выделяем текст внутри элемента textarea
  textarea.select();

  // Копируем выделенный текст в буфер обмена
  document.execCommand('copy');

  // Удаляем временный элемент textarea
  document.body.removeChild(textarea);

  // Добавляем обратную связь или уведомление о том, что текст скопирован
  const tooltipText = button.querySelector('.copy-message');
  tooltipText.style.visibility = 'visible';

  // Скрываем подсказку через некоторое время
  setTimeout(() => {
    tooltipText.style.visibility = 'hidden';
  }, 2000); // 2 секунды
}

// Назначаем обработчик события на все кнопки с классом copy-button
const copyButtons = document.querySelectorAll('.copy-button');
copyButtons.forEach((button) => {
  button.addEventListener('click', copyText);
});
