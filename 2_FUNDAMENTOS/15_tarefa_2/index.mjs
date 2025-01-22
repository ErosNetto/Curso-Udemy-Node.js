import inquirer from "inquirer";
import chalk from "chalk";

inquirer
  .prompt([
    {
      name: "nome",
      message: "Insira seu nome:",
    },
    {
      name: "idade",
      message: "Insira sua idade:",
    },
  ])
  .then((answers) => {
    if (!answers.nome || !answers.idade) {
      throw new Error("O nome e a idade são obrigatórios!");
    }

    console.log(
      chalk.bgYellow.black.bold(
        `Seu nome é ${answers.nome} e você tem ${answers.idade} de idade!`
      )
    );
  })
  .catch((err) => console.log(err));
