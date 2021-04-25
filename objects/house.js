class House {
	constructor(x, y) {
		this.img = new Image();
		this.x = x;
		this.y = y;
	}

	draw(context) {
		context.drawImage (this.img,
		this.x - 64,
		this.y - 128,
		128,
		128);
	}

	doorOpen() {
		this.img.src = "img/house/open.png";
	}

	doorClose() {
		this.img.src = "img/house/closed.png";
	}

	night() {
		this.img.src = "img/house/night.png"
	}
}

