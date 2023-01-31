//Exportamos funciones y pequeñas librerias necesarias
const readlineSync = require('readline-sync');

const {decorator} = require('./function.js');

//Modos
const {conversion, transformation} = require('./modes/basic.js');
const {profiles} = require('./modes/profiles.js');
const {auto} = require('./modes/auto.js');
const {basic} = require('./modes/basic.js')

function main(){  
    //Indice del script
    let mode = ['Personalizado','Perfiles Predeterminados','Automatico'];
    let index = readlineSync.keyInSelect(mode,'\nQue modo desea utilizar? ');
    

    //Modo de Transformacion y conversion
    if (index == 0){
        basic();
    };
    if (index == 1){
        profiles();
    };
    if (index == 2){
        auto();
    };
    //Loop
    loop = ['Si','No']
    indexLoop = readlineSync.keyInSelect(loop,'\nDesea hacer otra operación?');

    decorator();
    if (indexLoop=='0'){
        main();
    };
};

main();

//Exportamos una funcion


module.exports.talk = function(){
};
