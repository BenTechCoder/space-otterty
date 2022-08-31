const fs = require('fs')
const process = require('process')

function removeQuotes(file) {
  try {
    const data = fs.readFileSync(file, 'utf8')
    const quotesRemoved = data.trim().slice(1, -1)
    fs.writeFileSync(file, quotesRemoved)
  } catch (err) {
    console.error(err)
  }
}

if (process.platform === 'win32') {
  console.log(
    'Your os is Windows so we need to remove the quotes from this file'
  )
  removeQuotes(`${process.argv[2]}`)
} else {
  console.log('Your OS is not Windows, so we did not remove the quotes')
}
