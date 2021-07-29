//Importo el módulo fs
const fs = require('fs')

fs.readFile('package.json', "utf-8", (error, data) => {
    if (error) {
        "No se encontró el archivo package.json"
    } else {
        const info = {
            contenidoStr: JSON.stringify(data),
            contenidoObj: JSON.parse(data),
            size: "Number",
        }

        //Muestro el objeto info
        console.log(info)

        //Guardo el archivo
        //Un txt solo puede recibir un String
        fs.writeFile("info.txt", JSON.stringify(info), (error) => {
            if (error) {
                console.log("No se encontró el archivo")
            }
        })
    }
})

