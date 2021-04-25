class Tree {
	constructor(img, x, y, scale) {
		this.img = new Image();
		this.img.src = img
		this.x = x;
		this.y = y;
		this.scale = scale;
	}

	draw(context) {
		context.drawImage (this.img,
		this.x - 64 * this.scale,
		this.y - 128 * this.scale,
		128 * this.scale,
		128 * this.scale);
	}
}

