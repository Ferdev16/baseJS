 
const readlineSync = require('readline-sync');
const {msgResultConvert, msgResultTransf, decorator} = require('../function.js');

module.exports.profiles = function(){

    let profiles = ['Binario','Octal','Hexadecimal'];
    let profilesMode = ['B10 -> B(X)','B(X) -> B10'];
    module.exports.profiles;module.exports.profilesMode;
    
    decorator();
    let index = readlineSync.keyInSelect(profilesMode,'\nElija una modalidad');
    decorator();
    //Transformacion de base 10 a una pre-configurada
    if (index==0){

        let num = parseInt(readlineSync.question('\nIntroduzca el numero a convertir: '));
        let indexBase = readlineSync.keyInSelect(profiles,'\A que base desea convertir? ');
        decorator();

        //Hacemos el calcula de base binaria,octal y Hexadecimal
        if (indexBase == 0){
            let numBX = num.toString(2);


            msgResultTransf(2,num,numBX);

            decorator();
        };
        if (indexBase == 1){
            let numBX = num.toString(8);
            

            msgResultTransf(8,num,numBX);

            decorator();
        };
        if (indexBase == 2){
            let numBX = num.toString(16);
            

            msgResultTransf(16,num,numBX)

            decorator();
        };
    };
    //Transformacion de un numero de base preconfigurada a decimal

    if (index==1){
        //Variables del numero y de la base
        let indexBase = readlineSync.keyInSelect(profiles,'\nEn que base esta su numero? ')
        let num = readlineSync.question('\nIntroduzca el numero a convertir: ');
        
        //Calculamos el valor de base
        if (indexBase == 0){
            let numB10 = parseInt(num,2);
            

            msgResultConvert(2,num,numB10);

            decorator();
        }

        if (indexBase == 1){
            let numB10 = parseInt(num,8);
            
            
            msgResultConvert(8,num,numB10);

            decorator();
        };

        if (indexBase == 2){


            let numB10 = parseInt(num,16);

            msgResultConvert(16,num,numB10);

            decorator();
        };

    }; 
};

