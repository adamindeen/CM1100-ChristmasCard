class Car {
	constructor(x, y, vex) {
		this.x = x;
		this.y = y;
		this.vex = vex;
		this.img = new Image();
		this.img.src = "img/vehicle/car.png";
	}

	draw(context) {
		context.drawImage(this.img,
		this.x,
		this.y,
		256,
		64);
	}

	drive() {
		this.x = this.x + this.vex;
		this.vex = this.vex - 0.03125;
	}
}

