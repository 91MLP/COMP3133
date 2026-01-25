const fs = require('fs')
const filePath = 'data.txt'
fs.open(filePath, 'r+', (err, fd) => {
    if (err) {
        console.log(`Unable to open file ${filePath} :${JSON.stringify(err)}`)
    } else {
        console.log(`File ${filePath} opened successfully.`)

    }
})

//perform read/write operations
const fileData = fs.readFileSync(fd)
console.log(`\n File Data: \n${fileData}`)

const dataBuffer = Buffer.from("Removed me for atklass code")
fs, fs.write(fd, dataBuffer, (error) => {
    if (error) {
        console.log(`\n Unabe to write to file ${filePath}:${JSON.stringify(error)}`)
    } else {
        console.log(`\n Data successfully written to ${filePath}`)
    }
    fs.close()
})