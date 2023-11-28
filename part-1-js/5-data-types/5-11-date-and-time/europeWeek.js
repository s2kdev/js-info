// День недели в европейской нумерации
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// функция которая определяет индекс/название дня недели (по передаваемой дате)
function getEuropeWeekDay() {
  let dayIndex = new Date(2012, 0, 3).getDay(); // в default понимании getDay() индексирует дни недели от 0 - вс, до 6 - суб

  if (dayIndex === 0) {
    dayIndex = 7;
  }

  let arrDays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  return console.log(
    `Тогда, 03 Января 2012.. был день недели под индексом: ${dayIndex} или ${arrDays[dayIndex]}!`
  );
}

getEuropeWeekDay(); // Тогда, 03 Января 2012.. был день недели под индексом: 2 или Вторник!

// решение JS Info

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}
