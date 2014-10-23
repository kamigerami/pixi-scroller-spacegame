function Saturnus() {
            var saturnusTexture = PIXI.Texture.fromImage("resources/saturnus.png");
            PIXI.Sprite.call(this, saturnusTexture);
            this.position.x = 0;
            this.position.y = 0;
            this.viewportX = 0;
};

Saturnus.constructor = Saturnus;
Saturnus.prototype = Object.create(PIXI.Sprite.prototype);

Saturnus.DELTA_X = 0.015;

Saturnus.prototype.setViewportX = function (newViewportX) {
        var distanceTravelled = newViewportX - this.viewportX;
        this.viewportX = newViewportX;
        this.position.x += (distanceTravelled * Saturnus.DELTA_X);
};

