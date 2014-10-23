function Background_main() {
	var main_bgTexture = PIXI.Texture.fromImage("resources/space_pattern.jpg");
	PIXI.TilingSprite.call(this, main_bgTexture, 1024, 320);

           this.position.x = 0;
           this.position.y = 0;
           this.tilePosition.x = 0;
           this.tilePosition.y = 0;

	   this.viewportX = 0;
};

Background_main.constructor = Background_main;
Background_main.prototype = Object.create(PIXI.TilingSprite.prototype);

Background_main.DELTA_X = 0.00948;

Background_main.prototype.setViewportX = function (newViewportX) { 
	var distanceTravelled = newViewportX - this.viewportX;
	this.viewportX = newViewportX;
	this.tilePosition.x += (distanceTravelled * Background_main.DELTA_X);


};	
