//Importo el módulo fs
const fs = require('fs')

fs.readFile('package.json', "utf-8", (error, data) => {
    if (error) {
        "No se encontró el archivo package.json"
    } else {
        //Busco el peso del archivo y lo muestro en la consola.
        const fileSize = fs.statSync('package.json').size;

        console.log("El peso del archivo es", fileSize , "bytes.")

        const info = {
            contenidoStr: JSON.stringify(data),
            contenidoObj: JSON.parse(data),
            size: fileSize,
        }

        //Muestro el objeto info
        console.log(info)


        //Guardo el archivo
        //Un txt solo puede recibir un String
        //El 2 representa la cantidad de espacios de indentación usadas al representar el objeto como string.
        fs.writeFile("info.txt", JSON.stringify(info, null, 2), (error) => {
            if (error) {
                console.log("No se encontró el archivo")
            }
        })
    }
})

