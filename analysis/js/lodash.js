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


// 5 Slice - Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). Оба индекса start и end могут быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива. //

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







