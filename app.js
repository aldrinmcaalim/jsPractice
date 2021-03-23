const averageScore = function (score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
};

const dolphinScore = averageScore(44, 23, 71);
const koalaScore = averageScore(65, 54, 49);

const verifyVictor = function (firstTeamScore, secondTeamScore) {
    if (firstTeamScore >= secondTeamScore * 2) {
        console.log(`${firstTeamScore} vs. ${secondTeamScore}: Dolphins win!`);
    } else if (secondTeamScore >= firstTeamScore * 2) {
        console.log(`${secondTeamScore} vs. ${firstTeamScore}: Koalas win!`);
    } else {
        console.log(`It's a tie...`);
    }
};
 
const winner = verifyVictor(dolphinScore, koalaScore);
winner;
