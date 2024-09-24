import * as fs from "fs";
import { parse } from "csv-parse";

let bands = {};

fs.createReadStream("./data/concert_data.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    let band = row[0];
    if (band in bands) {
      bands[band]++;
    } else {
      bands[row[0]] = 1;
    }
  })
  .on("end", () => {
    console.log("Finished");
  })
  .on("error", (error) => {
    console.log(error.message);
  });

export default bands;
