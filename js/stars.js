function Stars() {
            var starsTexture = PIXI.Texture.fromImage("resources/stars.png");
            PIXI.TilingSprite.call(this, starsTexture, 1024, 320);
            this.position.x = 0;
            this.position.y = 0;
            this.tilePosition.x = 0;
            this.tilePosition.y = -160;

           this.viewportX = 0;
};

Stars.constructor = Stars;
Stars.prototype = Object.create(PIXI.TilingSprite.prototype);

Stars.DELTA_X = 0.024;

Stars.prototype.setViewportX = function (newViewportX) {
        var distanceTravelled = newViewportX - this.viewportX;
        this.viewportX = newViewportX;
        this.tilePosition.x -= (distanceTravelled * Stars.DELTA_X);


};

