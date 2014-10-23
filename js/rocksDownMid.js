function RocksDownMid() {
            var rocksDownMid = PIXI.Texture.fromImage("resources/rock_down_mid.png");
           PIXI.TilingSprite.call(this, rocksDownMid, 1024, 320);
            this.position.x = 0;
            this.position.y = 0;
            this.tilePosition.x = 0;
            this.tilePosition.y = 0;
            this.viewportX = 0;


};

RocksDownMid.constructor = RocksDownMid;
RocksDownMid.prototype = Object.create(PIXI.TilingSprite.prototype);

RocksDownMid.DELTA_X = 0.102;

RocksDownMid.prototype.setViewportX = function (newViewportX) {
        var distanceTravelled = newViewportX - this.viewportX;
        this.viewportX = newViewportX;
        this.tilePosition.x -= (distanceTravelled * RocksDownMid.DELTA_X);


};
