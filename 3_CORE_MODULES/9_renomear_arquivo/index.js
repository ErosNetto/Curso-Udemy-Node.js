const fs = require("fs");

const arqAntigo = "arquivo.txt";
const arqNovo = "novo_arquivo.txt";

fs.rename(arqAntigo, arqNovo, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Arquivo renomeado!");
});
