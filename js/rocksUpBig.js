function RocksUpBig() {
            var rocksUpBig = PIXI.Texture.fromImage("resources/rock_up_big.png");
	    PIXI.TilingSprite.call(this, rocksUpBig, 1024, 320);
            this.position.x = 0;
            this.position.y = 0;
            this.tilePosition.x = 0;
            this.tilePosition.y = 0;

            this.viewportX = 0;


};

RocksUpBig.constructor = RocksUpBig;
RocksUpBig.prototype = Object.create(PIXI.TilingSprite.prototype);

RocksUpBig.DELTA_X = 0.129;

RocksUpBig.prototype.setViewportX = function (newViewportX) {
        var distanceTravelled = newViewportX - this.viewportX;
        this.viewportX = newViewportX;
        this.tilePosition.x -= (distanceTravelled * RocksUpBig.DELTA_X);


};
