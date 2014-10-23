function Main() {
         this.stage = new PIXI.Stage(000000);
         var width = document.getElementById("game-canvas").width;
         var height = document.getElementById("game-canvas").height;

         this.renderer = new PIXI.autoDetectRenderer( width, height, document.getElementById("game-canvas") );

	 this.loadSpriteSheet();
}

Main.SCROLL_SPEED = 5;
Main.MIN_SCROLL_SPEED = 5;
Main.MAX_SCROLL_SPEED = 15;         
Main.SCROLL_ACCELERATION = 0.005;  
                                  
Main.prototype.update = function() { 
	this.scroller.moveViewportXBy(Main.MIN_SCROLL_SPEED); 
	this.MIN_SCROLL_SPEED += Main.SCROLL_ACCELERATION;  
	if (this.MIN_SCROLL_SPEED > Main.MAX_SCROLL_SPEED)
          {                                         
        	this.SCROLL_SPEED = Main.MAX_SCROLL_SPEED;
          }                                         

        this.renderer.render(this.stage);               
        requestAnimFrame(this.update.bind(this));  
};


// adding spritesheet (atlas)

Main.prototype.loadSpriteSheet = function() {
	var assetsToLoad = ["resources/sheet2.json", "resources/space_pattern.jpg", "resources/stars.png", "resources/sun.png", "resources/saturnus.png", "resources/rock_down_mid.png", "resources/rock_down_small.png", "resources/rock_up_big.png", "resources/rock_up_small.png"];
	loader = new PIXI.AssetLoader(assetsToLoad);
	loader.onComplete = this.spriteSheetLoaded.bind(this);
	loader.load();

};
// what to do with spritesheet function after its loaded

Main.prototype.spriteSheetLoaded = function () {
           this.scroller = new Scroller(this.stage);
           requestAnimFrame(this.update.bind(this));

};
