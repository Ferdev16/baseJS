//Modo Automatico
//Importamos pequeñas funciones 
const readlineSync = require('readline-sync');
const {decorator} = require('../function.js');

//Creamos Variables necesarias
let profileS = ['Binario','Octal','Hexadecimal'];
let profilesModeS = ['B10 -> B(X)','B(X) -> B10'];
let num;

//Modo automatico
module.exports.auto = function(){
    decorator();
    
    //Modalidad y numero de conversion
    let modeIndex = readlineSync.keyInSelect(profilesModeS,'\nQue modalidad usara? ');
    num= readlineSync.question('\nCual es su numero? ');

    decorator()

    //B10 -> Bx
    if (modeIndex == 0){

        console.log(`\nNº Base 10: ${num}\n\nNº Base 2: ${(parseInt(num)).toString(2)}\nNºBase 8: ${(parseInt(num)).toString(8)}\nNºBase 16: ${(parseInt(num)).toString(16)}`);

        decorator();
    };

    //BX -> B10
    if (modeIndex == 1){

        //Preguntamos la base del numero
        let base = readlineSync.keyInSelect(profileS,'En que base esta su numero? ');

        decorator();

        //Hacemos 3 bifurcaciones con 3 alternativas: 0 -> Binario , 1 -> Octal , 2 -> Hexadecimal
        if (base == 0){

            console.log(`\nNº Base 2: ${num}\n\nNº Base 8: ${parseInt(num,8)}\nNºBase 10: ${parseInt(num,10)}\nNºBase 16: ${parseInt(num,16)}`);

            decorator();
        };
        if (base == 1){

            console.log(`\nNºBase 8: ${num}\nNº Base 2: ${parseInt(num,2)}\n\nNº Base 10: ${parseInt(num,10)}\nNºBase 16: ${parseInt(num,16)}`);

            decorator();
        };
        if (base == 2){
           
            console.log(`\nNº Base 16: ${num}\n\nNº Base 2: ${parseInt(num,2)}\nNºBase 10: ${parseInt(num,10)}\nNºBase 8: ${parseInt(num,8)}`);
           
            decorator();
        };
    };
};
