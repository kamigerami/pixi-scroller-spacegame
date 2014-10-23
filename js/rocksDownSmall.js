function RocksDownSmall() {
            var rocksDownSmall = PIXI.Texture.fromImage("resources/rock_down_small.png");
	    PIXI.TilingSprite.call(this, rocksDownSmall, 1024, 320);
            this.position.x = 0;
            this.position.y = 0;
            this.tilePosition.x = 0;
            this.tilePosition.y = 0;

            this.viewportX = 0;


};

RocksDownSmall.constructor = RocksDownSmall;
RocksDownSmall.prototype = Object.create(PIXI.TilingSprite.prototype);

RocksDownSmall.DELTA_X = 0.024;

RocksDownSmall.prototype.setViewportX = function (newViewportX) {
        var distanceTravelled = newViewportX - this.viewportX;
        this.viewportX = newViewportX;
        this.tilePosition.x -= (distanceTravelled * RocksDownSmall.DELTA_X);


};
