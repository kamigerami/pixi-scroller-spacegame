function Sun() {
            var sunTexture = PIXI.Texture.fromImage("resources/sun.png");
            PIXI.Sprite.call(this, sunTexture);
            this.position.x = 690;
            this.position.y = -150;
            this.viewportX = 0;
};

Sun.constructor = Sun;
Sun.prototype = Object.create(PIXI.Sprite.prototype);

Sun.DELTA_X = 0.005;

Sun.prototype.setViewportX = function (newViewportX) {
        var distanceTravelled = newViewportX - this.viewportX;
        this.viewportX = newViewportX;
        this.position.x -= (distanceTravelled * Sun.DELTA_X);
};
