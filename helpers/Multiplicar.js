
const fs = require('node:fs');
const colors = require('colors')


//*Para crear una promesa, tambien se puede usarla funcion 'async'
const CrearMultiplicacion=(mul= 2, l, h)=>{

    return new Promise((resolve, reject) => {
        console.log(`La tabla del ${mul}`)

         

        let out = '';// Salida del archivo .txt
        let colorCon =''; //*Para imprimir en consola con colores
        for(let i=1 ; i<=h; i++){

            /*//!FORMA 1:
            let res=mul*i;
            console.log(mul, '*', i, '=', res);
            */

            //!FORMA 2:
            out+=(`${mul} * ${i} = ${mul*i}`)+'\n'; //*Para hacer un salto de linea
            colorCon+=(`${mul} ${'*'.red} ${i} ${'='.red} ${mul*i}`)+'\n'; //*Para imprimir en consola
        
        }

        if(!!l){
            console.log(colorCon);
        }else{
            console.log('La opcion para visualizr la tabla no esta activada\n'.bgRed);
            console.log('Para activarla es con -l'.bgBlue )
        }
        try{
       if(h>10 || h>1){
        console.log(colorCon)
       }
    }catch(error){
        console.log("hubo un error")
    }


        // fs.writeFile(`tabla${mul}.txt`,out, (error)=>{
        //     if (error) throw error;
        //     console.log("El archivo ha sido creado exitosamente");
        // })

        try{
            fs.writeFileSync(`./outTables/tabla del ${mul}Sync.txt`,out);
            resolve('El archivo ha sido creado exitosamente');
        }catch(error){
        reject(error);

        }

    
        
});

};
     
       

//todo promise

//*Para exportar el modulo como un objeto
module.exports={
   CrearMultiplicacion
}


