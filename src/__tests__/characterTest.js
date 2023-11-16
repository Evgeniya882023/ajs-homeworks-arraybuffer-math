import Magician from '../Magician';
import Daemon from '../Daemon';

test('test not stoned', () => {
  const hero = new Magician();
  hero.distance = 2;
  expect(hero.getAttack()).toBe(90);
});

test('test stoned', () => {
  const hero = new Daemon();
  hero.distance = 3;
  hero.setStoned(true);
  expect(hero.getAttack()).toBe(72);
});
