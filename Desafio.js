class Contenedor {
    constructor(fileName) {
        //Nombre del archivo a trabajar
        this.fileName = fileName;
    }

    //Métodos
    save(objeto) {
        //Importo el módulo fs
        const fs = require('fs');
        fs.writeFileSync(this.fileName, objeto);
        return objeto.id
    }

    getById(idInserted){
        if (objeto.id == idInserted){
            return objeto;
        } else {
            "No se encontró ningún objeto con ese id"
        }
    }

    getAll(){
        const fs = require('fs');
        textFile = fs.readFileSync("fileName" , "utf-8", (error,contenido) => {
            if(error){
                "No se encontró un archivo con ese nombre"
            } else {
                console.log("[", contenido , "]")
            }
        })
    }

    deleteById(idToDelete){
        const fs = require('fs');
        fs.unlink("fileName", error => {
            if (error){
                "No se encontró ningún archivo con ese id"
            } else {
                console.log("¡Borrado!")
            }
        })
    }

    deleteAll(){ }
}

let objetoContenedor = new Contenedor(
    "Archvo del Desafio 2",
)

let agregoObjeto = objetoContenedor.save(
    [
        {
            title: "Heladera",
            price: 80000,
            id: 1,
        },
        {
            title: "Lavarropas",
            price: 60000,
            id: 2,
        }        
    ]        
)

let buscoId = objetoContenedor.getById(1)

console.log(agregoObjeto)
console.log(buscoId)
