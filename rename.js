const fs = require('fs')
const path = require('path')
const process = require('process')

function rename(dirName, currentExtension, targetExtension) {
  fs.readdir(dirName, (err, files) => {
    if (err) return err

    files.forEach((file) => {
      const name = path.basename(file)
      const extension = path.extname(file)
      const fileName = path.basename(name, extension)
      if (extension === `.${currentExtension}`) {
        const newFile = `${dirName}${fileName}.${targetExtension}`

        fs.rename(`${dirName}${file}`, newFile, (err) => {
          if (err) return err

          console.log('Renamed', file, 'to', newFile)
        })
      }
    })
  })
}

rename(`${process.argv[2]}`, `${process.argv[3]}`, `${process.argv[4]}`)
