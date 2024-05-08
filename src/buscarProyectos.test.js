//Casos
// buscar un proyecto enn una lista vacia 
// buscar y encontrar un proyecto en una lista de 1 proyecto
// buscar y encontrar un proyecto en una lista de varios proyectos
// buscar y enceontrar mas de una coindencia de proyectos
// buscar y enceontrar proyectos cuyo nombre empieza con el criterio de busqueda
// por ejm: "ejerc" y en mi lista tengo "ejercio1", "ejercicio2" -> devuelve ambos
function buscarProyecto(nombre, proyectos) 
{
    const coincidencias = [];
    for (const proyecto of proyectos) {
        if (proyecto === nombre) {
            coincidencias.push(proyecto);
        }
    }
    return coincidencias;
}

// Pruebas actualizadas:
describe("Buscar", () => {
    it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {     
        const proyectos = [];
        expect(buscarProyecto("ejercicio1", proyectos)).toEqual([]);
    });

    it("encuentra un proyecto cuando el mismo existe en una lista de 1 proyecto", () => {
        const proyectos = ["miUnicoProyecto"];
        expect(buscarProyecto("miUnicoProyecto", proyectos)).toEqual(["miUnicoProyecto"]);
    });

    it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
        const proyectos = ["proyecto1", "proyecto2", "proyecto3"];
        expect(buscarProyecto("proyecto2", proyectos)).toEqual(["proyecto2"]);
    });

    it("encuentra varias coincidencias de un proyecto", () => {
        const proyectos = ["proyecto1", "proyecto1", "proyecto3"];
        expect(buscarProyecto("proyecto1", proyectos)).toEqual(["proyecto1", "proyecto1"]);
    });
});

          //Para terminar:
          
          // 1.- buscar y enceontrar mas de una coindencia de proyectos
          
          // 2.-buscar y enceontrar proyectos cuyo nombre empieza con el criterio de busqueda
          
                   // por ejm: "ejerc" y en mi lista tengo "ejercio1", "ejercicio2" -> devuelve ambos
          
          // 3.- Devuelve "" cuando no existe una coincidencia con ningun proyecto