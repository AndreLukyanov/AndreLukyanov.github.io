// 1 - filter  -> используется для фильтрации массива через функцию //
// Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true. //

var outher = ['a', 'b', 'c', '', 'f', undefined, 'j', 0, null, false, "z"];

function compact(array) {
    const newOuther = array.filter(function (e) {
        return e;
        //return e === false;
        //return e == false;
    });
    console.log(newOuther);
}
compact(outher);


// 2 concat -> создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.//

function difference() {
    var arrayOne = [1, 2];
    var arrayTwo = [3, 4];
    var arrayThree = [];
    console.log(arrayThree.concat(arrayOne, arrayTwo));
}

difference();

