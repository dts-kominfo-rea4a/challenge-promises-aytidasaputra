const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

let promiseOutput = async (value) => {
  let dataIXX = await promiseTheaterIXX()
  let dataVGC = await promiseTheaterVGC()
  var dataResult = [].concat(dataIXX, dataVGC);
  let count = 0;

  dataResult.forEach((v) => (v.hasil === value && count++));
  return count;
}

module.exports = {
  promiseOutput,
};
