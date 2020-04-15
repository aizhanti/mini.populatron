const fs = require("fs");
const neatCsv = require("neat-csv");

// fs.readFile('./cities.csv', async (err, data) => {
//   if (err) {
//     console.error(err, '1')
//     return
//   }
//   let neatData = (await neatCsv(data))

// })

// let totalPopulation = (input) => {
//   let output = 0
//   for (const el of input) {
//     output = output + Number(el['population'])
//   }
//   // console.log(output)
//   return output
// }

// totalPopulation(neatData)

fs.readFile("./cities.csv", "utf8", async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let totalPopulation = (input) => {
    console.log(input);
    let output = 0;
    output = input.reduce((acc, curr) => {
      return Number(acc) + Number(curr["population"]);
    }, 0);
    console.log(output);
    return output;
  };
  let neatData = await neatCsv(data);
  return totalPopulation(neatData);
});

// let tp = (input) => {
//   let output = 0
//   output = input.reduce((acc, curr, 0) => { return acc + Number(curr['population']) })
//   // for (const el of input) {
//   //   output = output + Number(el['population'])
//   // }
//   console.log(output)
//   return output
// }

// function totalPopulation(tp) {
//   fs.readFile('./cities.csv', async (err, data) => {
//     if (err) {
//       console.error(err, '1')
//       return
//     }
//     let neatData = (await neatCsv(data))
//   })
// }

// const promise = (new Promise(() => {
//   fs.readFile('./cities.csv', async (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     let neatData = (await neatCsv(data))
//     let totalPopulation = (input) => {
//       let output = 0
//       for (el of input) {
//         output = output + Number(el['population'])
//       }
//       console.log(output)
//       return output
//     }
//     // totalPopulation(neatData)
//   })
// })).finished.then(totalPopulation(neatData), () => { console.log('err') })

// // fs.readFile('./cities.csv', async (err, data) => {
// //   if (err) {
// //     console.error(err)
// //     return
// //   }
// //   // let neatData = (await neatCsv(data))
// //   // totalPopulation(neatData)
// // })

// // totalPopulation(input)
// // let totalPopulation = (input) => {
// //   let output = 0
// //   for (el of input) {
// //     output = output + Number(el['population'])
// //   }
// //   console.log(output)
// //   return output
// // }

module.exports = {
  totalPopulation(onFinished) {},
};
