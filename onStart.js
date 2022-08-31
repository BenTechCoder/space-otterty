const fs = require('fs')

fs.writeFile('src/_data/version.json', '{}', (err) => {
  if (err) return console.log(err)
  console.log(`${''} > src/_data/version.json`)
})
