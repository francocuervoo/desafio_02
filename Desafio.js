//Productos
let p1 = {
  title: "Heladera",
  price: 80000,
};

let p2 = {
  title: "Lavarropas",
  price: 60000,
};

//Importo el módulo fs
const fs = require("fs");

class Contenedor {
  constructor(fileName) {
    //Nombre del archivo
    this.fileName = fileName;
    this.id = 0;
    this.data = [];
  }

  //Métodos
  async save(objeto) {
    await this.getAll();
    this.id++;
    this.data.push({
      id: this.id,
      product: objeto,
    });
    try {
      await fs.promises.writeFile(
        this.fileName,
        JSON.stringify(this.data, null, 2)
      );
      //Devuelvo los id asignados
      return console.log("El id del objeto ingresado es", this.id);
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    await this.getAll();
    try {
      await fs.promises.writeFile(
        this.fileName,
        JSON.stringify(this.data, null, 2)
      );
      //Busco el objeto con ese id
      const objetoId = this.data.find((dat) => dat.id === id);
      if (objetoId) {
        return console.log("El objeto con el id", id, "es", objetoId);
      }
    } catch (error) {
      return null;
    }
  }

  async getAll() {
    //Manejo error con try catch
    try {
      const data = await fs.promises.readFile(this.fileName, "utf-8");
      if (data) {
        //Paso data a un objeto
        this.data = JSON.parse(data);
        this.data.map((producto) => {
          //Obtengo cual es el id máximo del archivo
          if (this.id < producto.id) this.id = producto.id;
        });
      }
    } catch (error) {
      //Si hay un error que no retorne nada. Que siga.
      return;
    }
  }

  async deleteById(id) {
    await this.getAll();
    try {
      await fs.promises.writeFile(
        this.fileName,
        JSON.stringify(this.data, null, 2)
      );
      //Elimino el objeto con ese id
      this.data.splice(id, id);
      //Devuelvo los id asignados
      return console.log("El archivo con el id", id, "fue eliminado.");
    } catch (error) {
      console.log(error);
    }
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
      }
      console.log("¡Borrado!");
    });
  }
}

const objetoContenedor = new Contenedor("ArchvoDesafio.txt");

async function newFunction() {
  await objetoContenedor.save(p1);
  await objetoContenedor.save(p2);
  await objetoContenedor.getById(8);
  await objetoContenedor.deleteById(2);
}

newFunction();
