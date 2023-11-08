function copyText() {
    // Находим кнопку по её id
    const button = document.getElementById("copyButton");
    
    // Создаём элемент textarea в памяти, чтобы поместить в него текст кнопки
    const textarea = document.createElement("textarea");
    textarea.value = button.innerText;
    
    // Добавляем элемент textarea на страницу (но не видимый для пользователя)
    document.body.appendChild(textarea);
    
    // Выделяем текст внутри элемента textarea
    textarea.select();
    
    // Копируем выделенный текст в буфер обмена
    document.execCommand("copy");
    
    // Удаляем временный элемент textarea
    document.body.removeChild(textarea);
    
    // Можно также добавить обратную связь или уведомление о том, что текст скопирован.
    // Например: alert("Текст скопирован!");
  }
  //
  function copyText2() {
    const button = document.getElementById("copyButton2");
    const textarea = document.createElement("textarea");
    textarea.value = button.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  //
  function copyText3() {
    const button = document.getElementById("copyButton3");
    const textarea = document.createElement("textarea");
    textarea.value = button.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  function copyText4() {
    const button = document.getElementById("copyButton4");
    const textarea = document.createElement("textarea");
    textarea.value = button.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  // сообщение о скопированом тексте/////////////////////////////////////////////////////////
  const firstCod = document.getElementById('copyButton');
  const secondCod = document.getElementById('copyButton2');
  const thirdCod = document.getElementById('copyButton3');
  const forthCod = document.getElementById('copyButton4');

  const arrCod = [firstCod, secondCod, thirdCod, forthCod];

  arrCod.forEach((a) => {
    a.addEventListener('click', () => {
      // При наведении курсора показываем подсказку
      const tooltipText = a.querySelector('.copy-message');
      tooltipText.style.visibility = 'visible';
    });
  
    a.addEventListener('mouseout', () => {
      // Когда курсор уходит, скрываем подсказку
      const tooltipText = a.querySelector('.copy-message');
      tooltipText.style.visibility = 'hidden';
    });
  });
  // /////////////////////////////////////////////////////