// console.log("My name is Sourin.")
// console.log(global)

const os = require('os')
const path = require('path')

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log("Directory name: " + path.dirname(__filename))
// console.log("Base name: " + path.basename(__filename))
// console.log("Extension name: " + path.extname(__filename))

console.log(path.parse(__filename))
console.log("Root name: " + path.parse(__filename).root)
console.log("Base name: " + path.parse(__filename).base)
console.log("Extension name: " + path.parse(__filename).ext)
console.log("File name: " + path.parse(__filename).name)
console.log("Directory: " + path.parse(__filename).dir)