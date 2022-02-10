export default function getUserPlace(
  guesedWordsAmount: number,
  totalWordAmount: number,
) {
  const percentageOfCorrectWords = Math.round(
    guesedWordsAmount / totalWordAmount,
  );
  if (percentageOfCorrectWords === 1) {
    return 1;
  }
  if (percentageOfCorrectWords >= 0.6 && percentageOfCorrectWords < 1) {
    return 2;
  } else {
    return 3;
  }
}
