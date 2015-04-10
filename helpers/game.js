(function(){
    paper.install(window);
    window.onload = function() {
        paper.setup('myCanvas');
        var path = new Path.Rectangle([75, 75], [100, 100]);
        path.strokeColor = 'black';

        view.onFrame = function(event) {
            // On each frame, rotate the path by 3 degrees:
            path.rotate(3);
        }
    }
})