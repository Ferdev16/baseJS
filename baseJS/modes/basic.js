//Modo de conversion y transformacion basica

//Importacion de funciones y paquetes necesarios
const readlineSync = require('readline-sync');

const {msgResultConvert, msgResultTransf, decorator} = require('../function.js');
 

let basicMode = ['Base X -> Base 10','Base 10 -> Base X']

//Funcion de dialogo
let number;let base;

function talk(){
    decorator();

    number = readlineSync.question('\nDigame el número a operar: ');
    base = readlineSync.question('\nAhora digame la base del número: ');

    if (number == ''){
        console.log('\nPor favor introduzca un valor numerico')
        talk();
    }
    decorator();
}

//Modalidades de transformacion y conversion
module.exports.basic = function(){
    //Bifurcacion de transformacion y conversion, donde 0 = Conversion y 1 = transformacion
    decorator();
    let basicIndex = readlineSync.keyInSelect(basicMode,'\nQue modalidad utilizara? ');
    decorator();

    if (basicIndex == 0){
        talk();

        let numB10 = parseInt(number,base);
        
        decorator();
        msgResultConvert(base,number,numB10);
        decorator();
    }else{

        talk();

        let snum = parseInt(number);let sbase = parseInt(base);
        let numBX = (snum).toString(sbase);

        decorator(); 
        msgResultTransf(base,number,numBX);
        decorator();
    };
};

