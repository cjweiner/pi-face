var Point = function(x, y){
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    this.isEmpty = (this.x === 0 && this.y === 0)? true: false;
};

module.exports = Point;