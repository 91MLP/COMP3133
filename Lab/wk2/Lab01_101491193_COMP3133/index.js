const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

/**
 * Delete files（if exits）
 */
function deleteFileIfExists(fileName) {
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
  }
}

// Delete old files
deleteFileIfExists(canadaFile);
deleteFileIfExists(usaFile);

// write table head
fs.writeFileSync(canadaFile, 'country,year,population\n');
fs.writeFileSync(usaFile, 'country,year,population\n');

// read CSV
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    const country = row.country.toLowerCase();

    if (country === 'canada') {
      fs.appendFileSync(
        canadaFile,
        `${row.country},${row.year},${row.population}\n`
      );
    }

    if (country === 'united states' || country === 'usa') {
      fs.appendFileSync(
        usaFile,
        `${row.country},${row.year},${row.population}\n`
      );
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
