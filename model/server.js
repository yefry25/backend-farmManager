import express from "express";
import cors from "cors";
import dbConnection from "../database/config.js";
import usuario from "../routes/usuarios.js"
import cafe from "../routes/cafe.js"
import tipoProducto from "../routes/tipoProducto.js"
import lote from "../routes/lote.js"
import jornal from "../routes/jornal.js"
import animal from "../routes/animal.js"
import hogar from "../routes/hogar.js"

class Server {
    constructor (){
        
        this.app= express(); /* este expresión va de primeras para que nos pueda declarar la app de express */
        this.middleware(); /* este middleware se coloca de segundo, para lograr que las rutas sean verificadas*/
        this.port=process.env.PORT || '8080';
        this.conectarBd();
        this.routes();
    }
 
    routes(){
        this.app.use('/api/usuario',usuario);
        this.app.use('/api/cafe',cafe);
        this.app.use('/api/tipo',tipoProducto);
        this.app.use('/api/lote',lote);
        this.app.use('/api/jornal',jornal);
        this.app.use('/api/animal',animal);
        this.app.use('/api/hogar',hogar);
    }

    async conectarBd(){
        await dbConnection()
    }

    middleware (){
        this.app.use(express.json())
        this.app.use(cors())
    }  

    escuchar(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        })
    }
}

export default Server