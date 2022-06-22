const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const planets = ['earth', 'mercury', 'venus', 'jupiter']

const planets_copy = [...planets]

planets[0] = 'mars'

console.log('planets', planets)
console.log('planets_copy', planets_copy)
