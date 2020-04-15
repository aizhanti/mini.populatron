const fs = require("fs");
const neatCsv = require("neat-csv");

module.exports = {
  totalPopulation(onFinished) {
    let output = 0;
    fs.readFile("./cities.csv", async (err, data) => {
      if (err) {
        return;
      }
      let neatData = await neatCsv(data);
      output = neatData.reduce((acc, curr) => {
        return Number(acc) + Number(curr["population"]);
      }, 0);
      onFinished(output);
    });
  },
};
