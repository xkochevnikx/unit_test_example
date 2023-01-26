//? функция принимает массив дальше она фильтрует его проверяя является ли каждый его элемент числом и дальше методом мэп преобразовываем каждый элемент к строке

function mapArrToStrings(arr) {
  return arr.filter(item => Number.isInteger(item)).map(String);
}

module.exports = mapArrToStrings;
