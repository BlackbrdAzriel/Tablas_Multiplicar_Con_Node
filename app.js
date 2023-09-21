const {CrearMultiplicacion} = require('./helpers/Multiplicar'); //#import de node
const colors = require('colors')

const argv =require('./config/yargs') //* La importacion es similar a REACT

console.clear(); //*para limpiar la consola, caada vez que se ejecuta



//!Se comento por que crearia una discrepancia entre el valor del argumento y el valor de la variable
//!Esto solo son para demostrar los argumentos de la linea de comandos y la aplicacion 
//const [ , ,arg3] = process.argv
//const [ , mul=2]=arg3.split('=')
//#Estas lineas no se recomiendan usar ya que es tedioso su lectura y escritura, aparte de tener vulnerabilidades



console.log(process.argv)
console.log(argv)

console.log('Base:yargs',argv.mul)



//*Para importar el modulo
  CrearMultiplicacion(argv.m, argv.l, argv.h)
  .then(TablaMultiplicar=>console.log(TablaMultiplicar,'Creada'.italic.green))
  .catch(error=> console.log(error))

