class Contenedor {
    constructor(fileName) {
        //Nombre del archivo
        this.fileName = fileName;
    }

    //Métodos
    save(objeto) {
        //Importo el módulo fs
        const fs = require('fs');
        fs.writeFileSync(this.fileName, JSON.stringify(objeto, null, 2), (error) => {
            if (error) {
                throw new Error("No se guaró el archivo");
            } else {
                //No logro devolver el id del objeto me devuelve undefined                
                return objeto.id
            }
        });
    }

    // getById(id){
    //     //No se como obtener la información del objeto
    //     const resultObject = this.objeto.find(object => object.id === id);
    //     if (resultObject !== null){
    //         return resultObject
    //     } return null
    // }

    getAll(){
        const fs = require('fs');
        fs.readFile(this.fileName, "utf-8", (error, data) => {
            if(error){
                return "No se encontró el archivo " + this.fileName
            } else {
                //No logro mostrar el array completo del archivo, me devuelve undefined
                return JSON.parse(data)
            }
        })
    }

    // deleteById(id){
    //     const fs = require('fs');
    //     fs.unlink("fileName", error => {
    //         if (error){
    //             "No se encontró ningún archivo con ese id"
    //         } else {
    //             console.log("¡Borrado!")
    //         }
    //     })
    // }

    // deleteAll(){ }
}

let objetoContenedor = new Contenedor( "ArchvoDesafio.txt" )
let objetoParaElContenedor = [
    {
        title: "Heladera",
        price: 80000,
        id: 1,
    }
];
let agregoObjeto = objetoContenedor.save(objetoParaElContenedor)
console.log(agregoObjeto)

// let buscoObjetoConId = objetoContenedor.getById(2)
// console.log(buscoObjetoConId)

let arrayConTodosLosObjetos = objetoContenedor.getAll()
console.log(arrayConTodosLosObjetos)
