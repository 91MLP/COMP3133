const { error } = require('console')
const fs = require('fs')
const { json } = require('stream/consumers')

let filePath = "output_data.txt"

let dataBuffer = Buffer.from("Yellow warning - snow with wind. up to 10 cm of snow")

//write to file asynchronously
//overwrite existing content if flog is not provided
fs.writeFile(filePath,dataBuffer, (error)=>{
    if(error){
        console.log(`Option1 - Unable to write to file ${filePath}:${JSON.stringify(error)}`)

    }else{
        console.log(`Option 1 -Data successfully written to ${filePath}`)
    }
})

dataBuffer ="101491193"
dataBuffer = Buffer.from('\n this new message from option 2 attempt \n \n \n this will expand multiple lines')

//append the data to previous one 
fs.writeFileSync(filePath, dataBuffer, {flag:'a'},(error)=>{
    if(error){
         console.log(`\nOption2 - Unable to write to file ${filePath}:${JSON.stringify(error)}`)

    }else{
        console.log(`\nOption 2 -Data successfully written to ${filePath}`)

    }
})

//write to file synchronously 
datBuffer = Buffer.from([1,2,3,4,5,6,7,8,9])

const err = fs.writeFileSync(filePath.dataBuffer)

    if(err){
         console.log(`\nOption3- Unable to write to file ${filePath}:${JSON.stringify(error)}`)

    }else{
        console.log(`\nOption 3 -Data successfully written to ${filePath}`)

    }

//delete the file

console.log(`\n Trying to delete the file${filePath}`);
fs.unlink(filePath,(err)=>{
    if(err){
        console.log(`Error while trying to delete file${filePath}:${JSON.stringify}`)
    }else{
        console.log(`File ${filePath} deleted successfully.`)
    }
})



