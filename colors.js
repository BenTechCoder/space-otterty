const fs = require('fs')

module.exports = fs.readFileSync('./src/_data/colors.json', (err, data) => {
  const obj = JSON.parse(data)
  return obj
})
