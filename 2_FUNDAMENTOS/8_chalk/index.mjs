import chalk from "chalk";

const nota = 6;

if (nota >= 7) {
  console.log(chalk.green("Parabéns! Você está aprovado!"));
} else {
  console.log(
    chalk.bgRed.black.bold("Você precisa fazer a prova de recuperação!")
  );
}
