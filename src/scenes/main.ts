import 'phaser';
import { TextButton } from '../components/text-button';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('main')
  }

  preload() {
    this.load.image('bg', 'assets/bg/desertbg.webp')
  }

  create() {
    const screen = this.cameras.main
  
    //Background
    let image = this.add.image(screen.width / 2, screen.height / 2, 'bg')
    let scaleX = screen.width / image.width
    let scaleY = screen.height / image.height
    let scale = Math.max(scaleX, scaleY)
    image.setScale(scale)//.setScrollFactor(0)

    //Logo
    this.add.text(screen.width / 2, 200, 'Ryder\'s Bubble Roundup', { font: '64px Courier', fill: '#f00' }).setOrigin(0.5, 0.5);

    //Play Button
    const playButton = new TextButton(this, screen.width / 2, screen.height / 2, 'Play', { font: '64px Courier', fill: '#f00'}, () => this.playButton()).setOrigin(0.5, 0.5);
    this.add.existing(playButton); 
  }

  playButton() {
    this.scene.switch("game")
  }
}
