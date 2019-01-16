// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

var matriz = [
    [],
    [],
    []
]

for (var i = 0; i < matriz.length; i++) {
    var str = '';
    for (var j = 0; j < matriz.length; j++) {
        matriz[i][j] = i + '' + j;
        //str += ' ' + i + "" + j + ',';
    }
    console.log(str);
}

console.log(matriz);