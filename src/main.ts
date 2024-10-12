import 'phaser'
import MainScene from './scenes/main'
import GameScene from './scenes/game'

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio
  },
  scene: [MainScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 200, x: 0 }
    }
  }
}

window.addEventListener('load', () => {
  new Phaser.Game(config)
})
