function denseRanking(totalPlayers, scores, numOfGames, gitsScores) {
  const skorUnik = [...new Set(scores)];
  const rankings = [];

  for (let i = 0; i < numOfGames; i++) {
    const gitsScore = gitsScores[i];

    // Menambahkan skor GITS ke array skor yang unik
    const newScore = [...skorUnik, gitsScore];

    // Mengurutkan array by desc
    newScore.sort((a, b) => b - a);

    //cari index skor gits
    const rank = newScore.indexOf(gitsScore) + 1;

    rankings.push(rank);
  }

  return rankings;
}

const totalPlayers = 7;
const scores = [100, 100, 50, 40, 40, 20, 10];
const numOfGames = 4;
const gitsScores = [5, 25, 50, 120];

const result = denseRanking(totalPlayers, scores, numOfGames, gitsScores);
console.log(result);
