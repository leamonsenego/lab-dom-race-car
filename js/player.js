class Player extends Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    super(gameScreen, left, top, width, height, imgSrc);

    this.directionX = 0;
    this.directionY = 0;
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    if (this.left < 10) {
      this.left = 10;
    }

    if (this.top < 10) {
      this.top = 10;
    }

    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
  }

  didCollide(obstacle) {
    const playerPosition = this.element.getBoundingClientRect();
    const obstaclePosition = this.element.getBoundingClientRect();

    if (
      playerPosition.left < obstaclePosition.right &&
      playerPosition.right > obstaclePosition.left &&
      playerPosition.top < obstaclePosition.bottom &&
      playerPosition.bottom > obstaclePosition.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
