
document.addEventListener('DOMContentLoaded', () => {
//нужно для предотвращения ошибок всего документа 

  //### логика переворачивания карточек ###
  const grid = document.querySelector('.grid-container');
  //поиск элемента по селектору CSS (.класс)
  
  //останавливает если не нашел элемент
  if (!grid) return;
  //обработчик события для контейнера 
  grid.addEventListener('click', (e) => {
    //объект события.элемент по которому нажали.метод перехода вверх по дереву который ищет родителя с классом 
    const card = e.target.closest('.btn-card');
    
    //если карта нашлась 
    if (card) {
      //ищем вложенные классы 
      const flipImg = card.querySelector('.img-card');
      const flipText = card.querySelector('.p-card');
      //добавляем или удаляем класс
      flipImg.classList.toggle('img-card-active');
      flipText.classList.toggle('p-card-active');
    }
  });
  //### ” - „ ###
  
});
