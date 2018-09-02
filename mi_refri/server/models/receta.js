'use strict';

module.exports = function(Receta) {

    Receta.compara = function(ingredientes,cb){
        console.log(ingredientes);
        cb(ingredientes);
    }

    Receta.remoteMethod(
        'compara',{
            description:"ruta para comparar ingredientes con recetas",
            http:{path:"/compara",verb:'post'},
            accepts:{
                arg:'ingredientes',
                type:{},
                http:{source:'body'},
                required:true
            },
            returns:{
                arg:'nada',
                type:{}
            }
        }
    );
};
