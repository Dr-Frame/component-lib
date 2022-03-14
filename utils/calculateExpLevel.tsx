import level from './levelExp';

export default function getLevelAndExp(
  userLvl: number,
  userExp: number,
  expFromTraining: number,
) {
  let newUser = {};
  let newLvl: number = userLvl;
  let newExp: number = userExp;
  level.map(item => {
    if (item.lvl === userLvl) {
      newExp += expFromTraining;

      if (newExp <= item.exp) {
        newUser = { exp: newExp, lvl: newLvl };
      }
      if (newExp >= item.exp) {
        newLvl = userLvl + 1;
        newUser = { exp: newExp, lvl: newLvl };
      }
    }
  });

  return newUser;
}
