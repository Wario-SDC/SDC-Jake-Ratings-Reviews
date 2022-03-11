const fs = require('fs');
const csv = require('csv');

// traverse the CSV file and transform the date into a PSQL readible/FEC expected date.
fs.createReadStream('../csvFiles/reviews.csv')
  .pipe(csv.parse({columns: true}))
  .pipe(csv.transform((input) => {
    return Object.assign({}, input, {
      date: (new Date(parseInt(input['date']))).toISOString()
    });
  }))
  .pipe(csv.stringify({header: true}))
  .pipe(fs.createWriteStream('../csvFiles/reviews-processed.csv'))
  .on('finish', () => {
    console.log('Done');
  });
