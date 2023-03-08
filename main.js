function Persona(nombre, edad, correo) {
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
};
// este array sera el contenedor de las personax
const personas = []

//personas por defecto
const persona1 = new Persona('Gael', 23, ['gaelmyers_23@gmail.com']);
const persona2 = new Persona('Ariana', 30, ['arianeishon_30@gmail.com']);
const persona3 = new Persona('Ibrahim', 26, ['ibragamer_26@gmail.com']);

// agregado de personas por defecto al array
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);


// función que recorre el registro de cada persona
function registro() {
    for (let i = 0; i < personas.length; i++) {
        console.log(`Nombre: ${personas[i].nombre}`);
        console.log(`Edad: ${personas[i].edad}`);
        console.log('Correo:');
        for (let c = 0; c < personas[i].correo.length; c++) {
        console.log(`${personas[i].correo[c]}`);
        }
        console.log("-------------------------");
        }
    };

function personaNueva() {
    const nombre = prompt("Ingrese su nombre:");
    const edad = parseInt(prompt("Ingrese su edad:"));
    const correo = prompt("Ingrese su correo:").split(',');

    const persona = new Persona(nombre, edad, correo);
    personas.push(persona);

    console.log(`${nombre} se agrego al registro.`);
}

// repetir agregarMasPersonas mientras se ingresa "s"
let agregarMasPersonas = true;
while (agregarMasPersonas) {
personaNueva();
const respuesta = prompt("Quiere registrar otra persona? (s/n)");
agregarMasPersonas = (respuesta.toLowerCase() === "s");
}

registro();