function Scroller(stage) {

	this.main_bg = new Background_main();
	stage.addChild(this.main_bg);

	this.rocksDownMid = new RocksDownMid();
	stage.addChild(this.rocksDownMid);

	this.rocksDownSmall = new RocksDownSmall();
	stage.addChild(this.rocksDownSmall);

	this.rocksUpBig = new RocksUpBig();
	stage.addChild(this.rocksUpBig);

	this.rocksUpSmall = new RocksUpSmall();
	stage.addChild(this.rocksUpSmall);

	this.stars = new Stars();
	stage.addChild(this.stars);


	this.sun = new Sun();
	stage.addChild(this.sun);

	this.saturnus = new Saturnus();
	stage.addChild(this.saturnus);

	this.meteroits = new Meteroits();
	stage.addChild(this.meteroits);

	this.mapBuilder = new MapBuilder(this.meteroits); 

	this.viewportX = 0;
}

Scroller.prototype.setViewportX = function (viewportX) {
	this.viewportX = viewportX;
	this.main_bg.setViewportX(viewportX);
	this.rocksDownMid.setViewportX(viewportX);
	this.rocksUpBig.setViewportX(viewportX);
	this.rocksDownSmall.setViewportX(viewportX);
	this.rocksUpSmall.setViewportX(viewportX);
	this.stars.setViewportX(viewportX);
	this.sun.setViewportX(viewportX);
	this.saturnus.setViewportX(viewportX);
	this.meteroits.setViewportX(viewportX);

};
Scroller.prototype.getViewportX = function () {
	return this.viewportX;
};

Scroller.prototype.moveViewportXBy = function(units) {
	var newViewportX = this.viewportX + units;
	this.setViewportX(newViewportX);
};
