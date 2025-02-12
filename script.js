// Permite cambiar el valor de las variables
let firstName = 'Victor'
firstName = 'Juan'

// No permite cambiar el valor de las variables
const lastName = 'Estupinan'
// lastName = 'Perez' genera error porque const solo es de lectura

console.log(`Hola ${firstName} ${lastName}`)