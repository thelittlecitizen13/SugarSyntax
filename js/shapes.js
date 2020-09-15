class Shape{
    constructor(surface, color, point){
        this.surface = surface;
        this.color = color;
        this.point = point;
    }
    show(){
        console.log(`Surface ${this.surface}`);
        console.log(`Color ${this.color}`);
        console.log(`Locaion ${this.point.show()}`);
    }
}

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    show(){
        return `(${this.x}, ${this.y})`;
    }
}

class Circle extends Shape{
    constructor(surface, color, point, diameter){
        super(surface, color, point);
        this.diameter = diameter;
    }
    show(){
        console.log(`Shape Circle`);
        super.show();
        console.log(`diameter ${this.diameter}`);
    }
}

class Square extends Shape{
    constructor(surface, color, point, sideLength){
        super(surface, color, point);
        this.sideLength =  sideLength;
    }
    show(){
        console.log(`Shape Square`);
        super.show();
        console.log(`sideLength ${this.sideLength}`);
    }
}

class Rectangle extends Shape{
    constructor(surface, color, point, height, width){
        super(surface, color, point);
        this.height = height;
        this.width = width;
    }
    show(){
        console.log(`Shape Rectangle`);
        super.show();
        console.log(`height ${this.height}`);
        console.log(`width ${this.width}`);
    }
}

function printShit(){

    baseShape.show();
    circle.show();
    square.show();
    rect.show();
    }

function changePoint(obj ,x,y){
    p = new Point(x,y);
    obj.point = p;
    printShit();
}

var p = new Point(1,2);
var baseShape = new Shape(20, `blue`, p);
var circle = new Circle(50, `red`, p, 10);
var square = new Square(30, `green`, p, 2);
var rect = new Rectangle(50, `white`, p, 40);
printShit();
changePoint(rect, 3,4);


