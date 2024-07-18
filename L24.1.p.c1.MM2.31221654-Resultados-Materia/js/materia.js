const estudiantes = {
    888: 60,
    777: 50,
    999: 40,
    333: 90,
    111: 30,
    666: 90,
    444: 48,
    222: 60
};

let aprobados = 0;
let mejoresEstudiantes = [];

for (let cedula in estudiantes) {
    if (estudiantes[cedula] >= 48) {
        aprobados++;
    }
    if (estudiantes[cedula] >= 90) {
        mejoresEstudiantes.push(cedula);
    }
}

const porcentajeAprobados = (aprobados / Object.keys(estudiantes).length) * 100;

document.getElementById("salida").innerHTML = "Estadísticas de Estudiantes:";
document.getElementById("salida").innerHTML += `<br>Porcentaje de Aprobados: ${porcentajeAprobados}%`;
document.getElementById("salida").innerHTML += `<br>Cédula de uno de los mejores estudiantes: ${mejoresEstudiantes[0]}`;