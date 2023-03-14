const usuarios = [
    {id: 1, nombre: "gael", edad: 23, correo: "gaelmyers_23@gmail.com"},
    {id: 2, nombre: "ariana", edad: 30, correo: "arianeishon_30@gmail.com"},
    {id: 3, nombre: "ibrahim", edad: 26, correo: "ibragamer_26@gmail.com"},
];

const registro = () => {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`ID: ${usuarios[i].id}`);
        console.log(`Nombre: ${usuarios[i].nombre}`);
        console.log(`Edad: ${usuarios[i].edad}`);
        console.log(`Correo: ${usuarios[i].correo}`);
        console.log("---------------------------------");
        }
};

const agregadoUsuario = () => {
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");
    let correo = prompt("Ingrese su correo");
    let nuevoRegistro = {
    id: usuarios.length + 1,
    nombre: nombre,
    edad: edad,
    correo: correo,
    };
    usuarios.push(nuevoRegistro);
    alert(`${nombre} se agrego al registro.`);
    console.log(usuarios);
};

const metodoFilter = () => {
    let entrada2 = prompt("Ingrese el nombre del usuario");
    let filtrados = usuarios.filter((persona) => persona.nombre.includes(entrada2.toLowerCase()));
    filtrados.forEach((persona) => {
        console.log(filtrados)
        let mensaje = `
        Id: ${persona.id}
        nombre: ${persona.nombre}
        edad: ${persona.edad}
        correo: ${persona.correo}
        `;
    alert(mensaje);
    });
};

const metodoFind = () => {
    let entradaFind = prompt("Ingrese el id del producto");
    if (entradaFind == "") {
        alert("Ingrese el id del usuario")
    } else {
        let encontrado = usuarios.find(item => item.id == entradaFind);
        console.log(encontrado)
    }
};

let entrada = prompt(" 1- Registrar\n 2- Ver Registro (consola)\n 3- Buscar Nombre\n 4- Buscar ID (consola)\n 5- Salir");
while (entrada != "5") {
    switch (entrada) {
        case "1":
            agregadoUsuario();
            break;
        case "2":
            registro();
            break;
        case "3":
            metodoFilter();
            break;
        case "4":
            metodoFind();
            break;
        default:
            alert("La opcion ingresada es invalida")
            break;
    }
    entrada = prompt(" 1- Registrar\n 2- Ver Registro (consola)\n 3- Buscar Nombre\n 4- Buscar ID (consola)\n 5- Salir");
    
};
