// 1 - filter  -> используется для фильтрации массива через функцию //
// Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true. //

var outher = ['a', 'b', 'c', '', 'f', undefined, 'j', 0, null, false, "z"];

function compact(array) {
    const newOuther = array.filter(function (e) {
        return e;
        //return e === false;
        //return e == false;
    });
    document.getElementById('lodash-one').innerHTML = newOuther;
}
compact(outher);

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 2 concat -> создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.//

function difference() {
    var arrayOne = [1, 2];
    var arrayTwo = [3, 4];
    var arrayThree = [];
    document.getElementById('lodash-two').innerHTML = arrayThree.concat(arrayOne, arrayTwo);
}

difference();

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 3 find - Если функция возвращает true, поиск прерывается и возвращается //

var user = [
    {
        user: 'barney',
        active: false
    },
    {
        user: 'fred',
        active: false
    },
    {
        user: 'pebbles',
        active: true
    },
    {
        user: 'four',
        active: true
    }
]

function find(indexTrue) {
    const index = indexTrue.find(items => items.active == true)
    document.getElementById('lodash-three').innerHTML = index.user + " " + index.active;
}
find(user)

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 4 findIndex - Возвращает индекс, на котором был найден элемент, а не сам элемент, и -1 //

var user = [
    {
        user: 'barney',
        active: false
    },
    {
        user: 'fred',
        active: false
    },
    {
        user: 'pebbles',
        active: true
    },
    {
        user: 'four',
        active: true
    }
]

function findIndex(indexTrue) {
    const index = indexTrue.findIndex(items => items.active == true)
    document.getElementById('lodash-four').innerHTML = index;
}
findIndex(user)

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 5 Slice - Возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). Оба индекса start и end могут быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива. //

let arrFifth = [1, 0, 'hi', 0, 1, 'hi', 0, 1, 'hi', 1, 0];

function first(array) {
    const forFirst = array.slice(0, 3);
    document.getElementById("lodash-fifth").innerHTML = forFirst;
}

first(arrFifth);

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 6 flat - Упрощение вложенных массивов. Возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth //

let arrSixth = [1, [2, [3, [4]], 5]];

function flatten(array) {
    const arrSixthFlat = array.flat(1);
    console.log(arrSixthFlat);
    document.getElementById("lodash-sixth").innerHTML = arrSixthFlat;
}

flatten(arrSixth);

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 7 indexOf начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1//

let arrFirst = [1, 0, false, true, false, true, 0];

function indexOf(array) {
    const arrFirstIndex = array.indexOf(0);
    document.getElementById("lodash-seventh").innerHTML = arrFirstIndex;
}

indexOf(arrFirst);

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 8 lastIndexOf - начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1. Ищет справа налево.//

let arrIndex = [1, 0, false, true, false, true, 0];

function lastIndexOf(array) {
    const lastIndex = array.lastIndexOf(0);
    document.getElementById("lodash-eighth").innerHTML = lastIndex;
}

lastIndexOf(arrIndex);

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 9 pop - Удаляет последний элемент из массива и возвращает его://

let arrNinth = ["num1", "num2", "num3", "num4", "num5", "num6", "num7"];

function pop(start) {
    const arrNewNinth = start.pop();
    document.getElementById("lodash-ninth").innerHTML = arrNinth + " удаленный элемент из массива " + " arrNewNinth = " + arrNewNinth;
}

pop(arrNinth);

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 10 filter и indexOf Пересечение массивов//

var arrOne = [" огонь ", " двигатель ", " канал ", " сказка ", " история "];
var arrTwo = [" огонь ", " двигатель ", " яблоко ", " яблоко ", " сказка "];

function intersection(arrNewOne, arrNewTwo) {

    const plus = arrNewOne.filter(function (e) {
        if (arrNewTwo.indexOf(e) != -1) {
            return true;
        }
        else {
            return false;
        }
    });
    document.getElementById("lodash-tenth").innerHTML = plus;
}

intersection(arrOne, arrTwo);

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 11 slice Возращаем последний или несколько последних элементов массива//

var arrEleventh = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function last(lastChild) {
    const arrLast = lastChild.slice(-3);
    document.getElementById("lodash-eleventh").innerHTML = arrLast;
}

last(arrEleventh);

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//


// 12  Убераем повторяющиеся элементы//

let arrTwelfth = ["1", "Первый", "Второй", "Третий", "Первый", "Второй", "Третий", "Четвертый"];

function pull(arr) {
    const newArrTwelfth = arr.filter(function (e, s) {
        return arr.indexOf(e) == s
    });
    document.getElementById("lodash-twelfth").innerHTML = newArrTwelfth;
}

pull(arrTwelfth);

// ------------------------------------------------------//
// -------------------------END----------------------------//
// ------------------------------------------------------//











