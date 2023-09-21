const argv = require('yargs')
                .option('m',{
                    alias: 'mul',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base para muultiplicar algo'


                })
                .check((argv, options)=>{
                    if(isNaN(argv.m)){
                        throw new Error ('Solo se permiten numeros');
                    }
                    return true;
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Sirve para listar la tabla consola' 
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,

                })

                .argv;

module.exports=argv;

               