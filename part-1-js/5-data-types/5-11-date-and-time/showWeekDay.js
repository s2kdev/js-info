// Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// функция которая определяет название/индекс дня недели (по передаваемой дате)
function printWeekDay() {
  let dayIndex = new Date(2012, 0, 3).getDay(); // определение тогдашнего/числа дня недели (согласно года, дня месяца), т.е. от 0 - вс, до 6 - суб

  // console.log(dayIndex); // 2 - вторник

  let arrDays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  return console.log(`Тогда, 03 Января 2012.. был(а/о): ${arrDays[dayIndex]}!`);
}

// вызов/вывод результатов
printWeekDay(); // Тогда, 03 Января 2012.. был(а): Вторник!

// решение JS Info
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}

let date = new Date(2012, 0, 3); // 2012 год, январь, 3 число
console.log(getWeekDay(date)); // ВТ
