let nombre = "Denis"
let apellido = "Ponce"

const Persona = {
    nombre,
    apellido
}

sessionStorage.setItem("objeto", Persona)

localStorage.setItem("objeto", Persona)

document.cookie = "objetoCaducidad = Persona; expires" + new Date (2023, 2, 20, 20, 24, 00).toUTCString