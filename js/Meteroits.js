function Meteroits() {
	PIXI.DisplayObjectContainer.call(this);

	this.pool = new MeteroitSpritesPool();
	this.createLookupTables();

	this.slices = [];

	this.viewportX = 0;
	this.viewportSliceX = 0;
}

Meteroits.constructor = Meteroits;
Meteroits.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

Meteroits.VIEWPORT_WIDTH = 1024;
Meteroits.VIEWPORT_NUM_SLICES = Math.ceil(Meteroits.VIEWPORT_WIDTH/MeteroitSlice.WIDTH) + 1;

Meteroits.prototype.setViewportX = function(viewportX) {
	this.viewportX = this.checkViewportXBounds(viewportX);

	var prevViewportSliceX = this.viewportSliceX;
	this.viewportSliceX = Math.floor(this.viewportX/MeteroitSlice.WIDTH);

	this.removeOldSlices(prevViewportSliceX);
	this.addNewSlices();
};

Meteroits.prototype.removeOldSlices = function(prevViewportSliceX) {
	var numOldSlices = this.viewportSliceX - prevViewportSliceX;
	if (numOldSlices > Meteroits.VIEWPORT_NUM_SLICES)
	{
		numOldSlices = Meteroits.VIEWPORT_NUM_SLICES;
	}

	for (var i = prevViewportSliceX; i < prevViewportSliceX + numOldSlices; i++)
	{
		var slice = this.slices[i];
		if (slice.sprite != null)
		{
			this.returnMeteroitSprite(slice.type, slice.sprite);
			this.removeChild(slice.sprite);
			slice.sprite = null;
		}
	}
};

Meteroits.prototype.addSlice = function(sliceType, y) {
	var slice = new MeteroitSlice(sliceType, y);
	this.slices.push(slice);
};

Meteroits.prototype.checkViewportXBounds = function(viewportX) {
	var maxViewportX = (this.slices.length - Meteroits.VIEWPORT_NUM_SLICES) * 
						MeteroitSlice.WIDTH;
	if (viewportX < 0)
	{
		viewportX = 0;
	}
	else if (viewportX > maxViewportX)
	{
		viewportX = maxViewportX;
	}

	return viewportX;
};

Meteroits.prototype.addNewSlices = function() {
	var firstX = -(this.viewportX % MeteroitSlice.WIDTH);
	for (var i = this.viewportSliceX, sliceIndex = 0;
			 i < this.viewportSliceX + Meteroits.VIEWPORT_NUM_SLICES;
			 i++, sliceIndex++)
	{
		var slice = this.slices[i];
		if (slice.sprite == null && slice.type != SliceType.GAP)
		{
			slice.sprite = this.borrowMeteroitSprite(slice.type);

			slice.sprite.position.x = firstX + (sliceIndex * MeteroitSlice.WIDTH);
			slice.sprite.position.y = slice.y;

			this.addChild(slice.sprite);
		}
		else if (slice.sprite != null)
		{
			slice.sprite.position.x = firstX + (sliceIndex * MeteroitSlice.WIDTH);
		}
	}
};

Meteroits.prototype.createLookupTables = function() {
	this.borrowMeteroitSpriteLookup = [];
	this.borrowMeteroitSpriteLookup[SliceType.GREY] = this.pool.borrowGreyMeteroit;
	this.borrowMeteroitSpriteLookup[SliceType.BROWN] = this.pool.borrowBrownMeteroit;

	this.returnMeteroitSpriteLookup = [];
	this.returnMeteroitSpriteLookup[SliceType.GREY] = this.pool.returnGreyMeteroit;
	this.returnMeteroitSpriteLookup[SliceType.BROWN] = this.pool.returnBrownMeteroit;
};

Meteroits.prototype.borrowMeteroitSprite = function(sliceType) {
	return this.borrowMeteroitSpriteLookup[sliceType].call(this.pool);
};

Meteroits.prototype.returnMeteroitSprite = function(sliceType, sliceSprite) {
	return this.returnMeteroitSpriteLookup[sliceType].call(this.pool, sliceSprite);
};
