var drawGrid = function (num_rectangles_wide, num_rectangles_tall, boundingRect, canvasObj, canvasHeight, canvasWidth) {
    canvasObj.width = canvasHeight;
    canvasObj.height = canvasWidth;
    var width_per_rectangle = 19;
    var height_per_rectangle = 19;
    for (var i = 0; i < num_rectangles_wide; i++) {
        for (var j = 0; j < num_rectangles_tall; j++) {
            var aRect = new paper.Path.Rectangle(boundingRect.left + i * width_per_rectangle,
                boundingRect.top + j * height_per_rectangle,
                width_per_rectangle,
                height_per_rectangle);
            aRect.strokeColor = 'black';
            aRect.fillColor = 'white';
        }
    }
};

var fillCell = function (event) {
    var hitOptions = {
        fill: true,
        tolerance: 5
    };

    var hitResult = project.hitTest(event.point, hitOptions);

    if (hitResult && hitResult.item) {
        if (hitResult.item.clicked) {
            hitResult.item.fillColor = 'white';
        } else {
            hitResult.item.fillColor = 'grey';
        }

        hitResult.item.clicked = !hitResult.item.clicked;
    }
};

var fillCells = function (event) {

    var hitOptions = {
        fill: true,
        tolerance: 1,
        segment: true
    };

    var hitResult = project.hitTest(event.point, hitOptions);

    if (hitResult && hitResult.item) {
        hitResult.item.fillColor = 'grey';
        hitResult.item.clicked = true;
    }
};

var init = function () {
    var canvas = document.getElementById('myCanvas');
    paper.setup(canvas);

    var tool = new Tool();
    tool.fixedDistance = 10;
    tool.onMouseDown = fillCell;
    tool.onMouseDrag = fillCells;

    drawGrid(64, 32, paper.view.bounds, canvas, 1240, 475);
};
