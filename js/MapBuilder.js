function MapBuilder(meteroits) {
	this.meteroits = meteroits;this.createMap();
}

MapBuilder.WALL_HEIGHTS = [
	76, // Lowest slice
	159,
	192,
	220,
	300  // Highest slice
];

MapBuilder.prototype.createMap = function() {
	this.createWallSpan(1, 2, true);
	this.createGap(1);
	this.createWallSpan(8, 4);
	this.createGap(1);
	this.createWallSpan(12, 6);
	this.createGap(1);
	this.createSteppedWallSpan(2, 5, 18);
	this.createGap(1);
	this.createWallSpan(21, 8);
	this.createGap(1);
	this.createWallSpan(2, 6); 
	this.createGap(1);
	this.createWallSpan(11, 18);
	this.createGap(1);
	this.createWallSpan(3, 6);
	this.createGap(1);
	this.createWallSpan(5, 8);
	this.createGap(1)
	this.createWallSpan(1, 7);
	this.createGap(1);
	this.createWallSpan(2, 16);
	this.createGap(1);
	this.createWallSpan(6, 6);
	this.createGap(1);
	this.createWallSpan(15, 12);
	this.createGap(2);
	this.createWallSpan(18, 24);
	this.createGap(2);
	this.createWallSpan(12, 8);
	this.createGap(2);
	this.createSteppedWallSpan(3, 5, 12);
	this.createGap(3);
	this.createWallSpan(0, 8);
	this.createGap(3);
	this.createWallSpan(1, 50);
	this.createGap(20);
};

MapBuilder.prototype.createGap = function(spanLength) {
	for (var i = 0; i < spanLength; i++)
	{
		this.meteroits.addSlice(SliceType.GAP);
	}
};

MapBuilder.prototype.createWallSpan = function(
	heightIndex, spanLength, noFront, noBack
) {
	noFront = noFront || false;
	noBack = noBack || false;

	if (noFront == false && spanLength > 0)
	{
		this.addWallFront(heightIndex);
		spanLength--;
	}

	var midSpanLength = spanLength - (noBack ? 0 : 1);
	if (midSpanLength > 0)
	{
		this.addWallMid(heightIndex, midSpanLength)
		spanLength -= midSpanLength;
	}

	if (noBack == false && spanLength > 0)
	{
		this.addWallBack(heightIndex);
	}
};

MapBuilder.prototype.createSteppedWallSpan = function(
	heightIndex, spanALength, spanBLength
) {
	if (heightIndex < 2)
	{
		heightIndex = 2;
	}

	this.createWallSpan(heightIndex, spanALength, false, true);
	this.addWallStep(heightIndex - 2);
	this.createWallSpan(heightIndex - 2, spanBLength - 1, true, false);
};

MapBuilder.prototype.addWallFront = function(heightIndex) {
	var y = MapBuilder.WALL_HEIGHTS[heightIndex];
	this.meteroits.addSlice(SliceType.FRONT, y);
};

MapBuilder.prototype.addWallBack = function(heightIndex) {
	var y = MapBuilder.WALL_HEIGHTS[heightIndex];
	this.meteroits.addSlice(SliceType.BACK, y);
};

MapBuilder.prototype.addWallMid = function(heightIndex, spanLength) {
	var y = MapBuilder.WALL_HEIGHTS[heightIndex];
	for (var i = 0; i < spanLength; i++)
	{
		if (i % 2 == 0)
		{
			this.meteroits.addSlice(SliceType.BROWN, y);
		}
		else
		{
			this.meteroits.addSlice(SliceType.GREY, y);
		}
	}
};

MapBuilder.prototype.addWallStep = function(heightIndex) {
	var y = MapBuilder.WALL_HEIGHTS[heightIndex];
	this.meteroits.addSlice(SliceType.STEP, y);
};
