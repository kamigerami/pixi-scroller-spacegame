function RocksUpSmall() {
            var rocksUpSmall = PIXI.Texture.fromImage("resources/rock_up_small.png");
	    PIXI.TilingSprite.call(this, rocksUpSmall, 1024, 320);
            this.position.x = 0;
            this.position.y = 0;
            this.tilePosition.x = 0;
            this.tilePosition.y = 0;

            this.viewportX = 0;


};

RocksUpSmall.constructor = RocksUpSmall;
RocksUpSmall.prototype = Object.create(PIXI.TilingSprite.prototype);

RocksUpSmall.DELTA_X = 0.054;

RocksUpSmall.prototype.setViewportX = function (newViewportX) {
        var distanceTravelled = newViewportX - this.viewportX;
        this.viewportX = newViewportX;
        this.tilePosition.x -= (distanceTravelled * RocksUpSmall.DELTA_X);


};
