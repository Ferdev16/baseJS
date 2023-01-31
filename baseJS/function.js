//Archivo de funcionalidades

//Resolucion en pantalla
module.exports.msgResultConvert = function(base,num,numB10){
    console.log('RESULTADOS: ');
    console.log(`\nNº Base ${base}: ${num}\nNº Base 10: ${numB10}`);
};

module.exports.msgResultTransf = function(base,num,numBX){
    console.log('RESULTADOS: ');
    console.log(`\nNº Base 10: ${num}\n NºBase ${base}: ${numBX}`);
}

//Decorador
module.exports.decorator = function(){
    console.log('\n\n------------------------------------[]------------------------------------\n\n');
}
