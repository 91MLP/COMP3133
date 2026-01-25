const fs = require('fs')
const filePath = "input_data.txt"
//reading the file asynchronously useing fs.readFile()
fs.readFile(filePath,(err,data)=>{
    if(error){
        console.log(`Error while reading the file ${filePath}: ${JSON.stringify}`)
    }else{
        //readFile is successful; process the data
        if(data){ // check if data is not undefined
            console.log(`Option 1 -Data from ${filePath}:\n${data}`);
        }else{
            console.log(`No data received from ${filePath}`)
        }
    }
})

//read the file synchronosly using fs.readFileSync()
console.log("\n\n");
console.log(`Trying to reading the file synchronously..`)

const fileData = fs.readFileSync(filePath)
console.log(`Option 2 - fileData:\n${fileData}`)