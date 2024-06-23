const calculateBalanceAndVictory = (victories, defeats) => {
  let victoriesBalance = victories - defeats;

  const elos = [
    { min: 101, elo: "Imortal" },
    { min: 91, elo: "Lendário" },
    { min: 81, elo: "Diamante" },
    { min: 51, elo: "Ouro" },
    { min: 21, elo: "Prata" },
    { min: 11, elo: "Bronze" },
    { min: 0, elo: "Ferro" },
  ];

  let playerElo = "Ferro";

  for (let i = 0; i < elos.length; i += 1) {
    if (victories >= elos[i].min) {
      playerElo = elos[i].elo;
      break;
    }
  }

  console.log(`O Herói tem o saldo de ${victoriesBalance} vitórias e está no elo ${playerElo}`);
};

const victories = 120;
const defeats = 0;

calculateBalanceAndVictory(victories, defeats);
