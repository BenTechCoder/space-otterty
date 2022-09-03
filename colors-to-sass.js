const fs = require('fs')
const tokens = require('./colors.js')

const colors = JSON.parse(tokens)

function toSassVariables(tokensObject) {
  let string = ''
  Object.entries(tokensObject).forEach(([key, value]) => {
    string += `$${key}: ${value};`
  })
  return string
}

const data = toSassVariables(colors)

fs.writeFile('src/css/_global.scss', data, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Sass variables generated!')
  }
})
