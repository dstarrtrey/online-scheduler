const fs = require('fs');

export default function generateSchedule(name, password, startDate, endDate) {
  fs.writeFile("test.txt", name, "utf8", err => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}