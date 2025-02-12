// Variables

// let permite cambiar el valor de las variables
let firstName = 'Victor'
firstName = 'Juan'

// const no permite cambiar el valor de las variables
const lastName = 'Estupinan'
// lastName = 'Perez' genera error porque const solo es de lectura

console.log(`Hola ${firstName} ${lastName}`)

// ---------------------------------------------------------------

// Tipos de datos

// String
const tString = 'Texto'

// Number
const tNumber = 25

// Boolean
const tBoolean = true

// Null
const tNull = null

// Undefined
const tUndefined = undefined

// ---------------------------------------------------------------

// Mutaciones

// Tipos de datos no mutables (Primitivos: String, Number, Boolean, Null, Undefined)
// Los tipos de datos primitivos son inmutables
firstName.toUpperCase()
// Se obtiene el valor original porque es inmutable
console.log(firstName)

// Se crea una nueva variable con el valor modificado
const firstNameUpper = firstName.toUpperCase()
console.log(firstNameUpper)

// Tipos de datos mutables (Objetos)
const list = []
list.push(1, 2, 3)
console.log(list)

const person = {
    firstName: 'Victor',
    lastName: 'Estupinan',
    links: ['https://www.google.com', 'https://www.facebook.com']
}

person.firstName = 'Juan'

const field = 'firstName'
console.log(person[field])
console.log(person.lastName)
console.log(person.links[0])

// ---------------------------------------------------------------