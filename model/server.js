import express from "express";
import cors from "cors";
import dbConnection from "../database/config.js";
import usuario from "../routes/usuarios.js"

class Server {
    constructor (){
        
        this.app= express(); /* este expresión va de primeras para que nos pueda declarar la app de express */
        this.middleware(); /* este middleware se coloca de segundo, para lograr que las rutas sean verificadas*/
        this.conectarBd();
        this.port=process.env.PORT || '8080';
        this.routes();
    }
 
    routes(){
        this.app.use('/api/usuario',usuario)
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