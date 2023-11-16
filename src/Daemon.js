import Character from './character';

export default class Daemon extends Character {
  constructor() {
    super();
    this.attack = 100;
    this.defence = 40;
  }
}
