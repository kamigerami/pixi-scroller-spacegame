function MeteroitSpritesPool() {
	this.createBrownMeteroits();
	this.createGreyMeteroits();
}	
////// Brown
MeteroitSpritesPool.prototype.borrowBrownMeteroit = function () {
		return this.brownMeteroits.shift();
};

MeteroitSpritesPool.prototype.returnBrownMeteroit = function(sprite) {
		this.brownMeteroits.push(sprite);
};

// Grey
MeteroitSpritesPool.prototype.borrowGreyMeteroit = function () {

		return this.greyMeteroits.shift();	
};

MeteroitSpritesPool.prototype.returnGreyMeteroit = function(sprite) {

		this.greyMeteroits.push(sprite);
};

// continue /// create the functions for the top //

MeteroitSpritesPool.prototype.createBrownMeteroits = function () {
			this.brownMeteroits = [];
			
			this.addBrownMeteroitSprites(1, "meteorBrown_big1.png"); 
			this.addBrownMeteroitSprites(1, "meteorBrown_big2.png"); 
			this.addBrownMeteroitSprites(1, "meteorBrown_big3.png"); 
			this.addBrownMeteroitSprites(1, "meteorBrown_big4.png"); 
			this.addBrownMeteroitSprites(1, "meteorBrown_med1.png"); 
			this.addBrownMeteroitSprites(1, "meteorBrown_med3.png"); 
			this.addBrownMeteroitSprites(1, "meteorBrown_small1.png"); 
			this.addBrownMeteroitSprites(1, "meteorBrown_small2.png"); 
			this.addBrownMeteroitSprites(1, "meteorBrown_tiny1.png"); 
			this.addBrownMeteroitSprites(1, "meteorBrown_tiny2.png"); 

		// create method to shuffle and randomize the order that they appear in

			this.shuffle(this.brownMeteroits);
};

// create function for GREY meteroits

MeteroitSpritesPool.prototype.createGreyMeteroits = function () {
			this.greyMeteroits = [];
			
			this.addGreyMeteroitSprites(1, "meteorGrey_big1.png"); 
			this.addGreyMeteroitSprites(1, "meteorGrey_big2.png"); 
			this.addGreyMeteroitSprites(1, "meteorGrey_big3.png"); 
			this.addGreyMeteroitSprites(1, "meteorGrey_big4.png"); 
			this.addGreyMeteroitSprites(1, "meteorGrey_med1.png"); 
			this.addGreyMeteroitSprites(1, "meteorGrey_med2.png"); 
			this.addGreyMeteroitSprites(1, "meteorGrey_small1.png"); 
			this.addGreyMeteroitSprites(1, "meteorGrey_small2.png"); 
			this.addGreyMeteroitSprites(1, "meteorGrey_tiny1.png"); 
			this.addGreyMeteroitSprites(1, "meteorGrey_tiny2.png"); 

		// create method to shuffle and randomize the order that they appear in

			this.shuffle(this.greyMeteroits);
};


// actual function for pushing sprites to Object Brown and Grey

MeteroitSpritesPool.prototype.addBrownMeteroitSprites = function (amount, frameId) {
			for (var i = 0; i < amount; i++) {
				var sprite = PIXI.Sprite.fromFrame(frameId);
				this.brownMeteroits.push(sprite);
			}		
};


MeteroitSpritesPool.prototype.addGreyMeteroitSprites = function (amount, frameId) {
			for (var i = 0; i < amount; i++) {
				var sprite = PIXI.Sprite.fromFrame(frameId);
				this.greyMeteroits.push(sprite);
			}		
};

// shuffle it all
MeteroitSpritesPool.prototype.shuffle = function(array) {
			var len = array.length;
			var shuffles = len * 3;
			for (var i = 0; i < shuffles; i++ ) {
				var meteorSlice = array.pop();
				var pos = Math.floor(Math.random() * (len-1));
				array.splice(pos, 0, meteorSlice);
			}
};

