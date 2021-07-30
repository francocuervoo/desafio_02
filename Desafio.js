class Contenedor {
  constructor(fileName) {
    //Nombre del archivo
    this.fileName = fileName;
    this.array = [];
    this.counter = 1;
  }

  //Métodos
  save(objeto) {
    //Importo el módulo fs
    const fs = require("fs");
    //Agrego el id al objeto
    objeto.id = this.counter;
    this.array.push(objeto);
    fs.writeFileSync(
      this.fileName,
      JSON.stringify(this.array, null, 2),
      (error) => {
        throw new Error("No se guardó el archivo. Error:", error);
      }
    );
    //Aumento id
    this.counter++;
    return objeto.id;
  }

  getById(id) {
    const resultObject = this.array.find((object) => object.id === id);
    if (resultObject) {
      return resultObject;
    }
    return null;
  }

  getAll() {
    const fs = require("fs");
    fs.readFile(this.fileName, "utf-8", (error, data) => {
      if (error) {
        throw new Error("No se encontró el archivo" + this.fileName);
      }
      //Acá encuentro un error que me devuelve un undefined
      console.log(JSON.parse(data));
    });
  }

  deleteById(id) {
    const resultObject = this.array.find((object) => object.id === id);
    if (resultObject) {
      //Elimino el array con el id ingresado
      this.array.splice(id, id);
      const fs = require("fs");
      fs.writeFileSync(
        this.fileName,
        JSON.stringify(this.array, null, 2),
        (error) => {
          throw new Error("No se guardó el archivo. Error:", error);
        }
      );
      return "El archivo con el id", id, "fue eliminado";
    }
  }

  deleteById(id) {
    const fs = require("fs");
    fs.unlink("fileName", (error) => {
      if (error) {
        ("No se encontró ningún archivo con ese id");
      } else {
        console.log("¡Borrado!");
      }
    });
  }

  deleteAll() {
    const fs = require("fs");
    fs.unlink(this.fileName, (error) => {
      if (error) {
        ("No se encontró ningún archivo con ese id");
      } else {
        fs.writeFileSync(
          this.fileName,
          JSON.stringify(this.array, null, 2),
          (error) => {
            throw new Error("No se guardó el archivo. Error:", error);
          }
        );
      } console.log("¡Borrado!");
    });
  }
}

//save()
let objetoContenedor = new Contenedor("ArchvoDesafio.txt");
let objetoHeladera = {
  title: "Heladera",
  price: 80000,
};
let agregoObjetoHeladera = objetoContenedor.save(objetoHeladera);
console.log("El id de ese objeto es", agregoObjetoHeladera);
let objetoLavarropas = {
  title: "Lavarropas",
  price: 60000,
};
let agregoObjetoLavarropas = objetoContenedor.save(objetoLavarropas);
console.log("El id de ese objeto es", agregoObjetoLavarropas);

//getById()
let buscoObjetoConId = objetoContenedor.getById(3);
console.log("El objeto con ese id es", buscoObjetoConId);

//getAll()
let arrayConTodosLosObjetos = objetoContenedor.getAll();
//Acá encuentro un error que me devuelve un undefined
console.log(
  "El array con todos los objetos es este:\n",
  arrayConTodosLosObjetos
);

//deleteById()
let eliminoObjetoConId = objetoContenedor.deleteById(1);
console.log(
  "El archivo con el array eliminado quedó de esta forma",
  eliminoObjetoConId
);

//deleteAll()
let eliminoTodosLosObjetos = objetoContenedor.deleteAll();
console.log("El archivo quedó sin objetos", eliminoTodosLosObjetos);
