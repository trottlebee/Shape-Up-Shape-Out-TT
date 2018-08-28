
const MAX = 600;
let shapeCanvas = document.getElementById('shapeCanvas');

class Shape {

    constructor(x, y){
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;

        shapeCanvas.appendChild(this.div);


    this.div.addEventListener('dblclick', () => {       
            this.div.remove();
        });


    this.div.addEventListener('click', () => {         
        this.describe();
    });

    }
}

class Rectangle extends Shape {

    constructor(x, y, width, height) {
        super(x, y);
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`;
        this.div.classList.add('rectangle');

    }

    describe() {

        let shapeName = document.getElementById('shapeName');
        shapeName.innerText = this.constructor.name;

        let shapeWidth = document.getElementById('shapeWidth');
        shapeWidth.innerText = this.div.style.width;

        let shapeHeight = document.getElementById('shapeHeight');
        shapeHeight.innerText = this.div.style.height;

        let shapeRadius = document.getElementById('shapeRadius');
        shapeRadius.innerText = 'N/A';

        let shapeArea = document.getElementById('shapeArea');
        let area = parseInt(this.div.style.height, 10) * parseInt(this.div.style.width, 10);
        shapeArea.innerText = `${area}px`;

        let perimeterText = parseInt(this.div.style.height, 10) * 2 + parseInt(this.div.style.width, 10) * 2;
        let shapePerimeter = document.getElementById('shapePerimeter');
        shapePerimeter.innerText = `${perimeterText}px`;

    }

}

class Square extends Shape {

    constructor(x, y, sideLength) {
        super(x, y);
        this.div.sideLength = sideLength;
        this.div.style.width = `${sideLength}px`;
        this.div.style.height = `${sideLength}px`;
        this.div.classList.add('square');

    }

    describe() {

        let shapeName = document.getElementById('shapeName');
        shapeName.innerText = this.constructor.name;

        let shapeWidth = document.getElementById('shapeWidth');
        shapeWidth.innerText = this.div.style.width;

        let shapeHeight = document.getElementById('shapeHeight');
        shapeHeight.innerText = this.div.style.height;

        let shapeRadius = document.getElementById('shapeRadius');
        shapeRadius.innerText = 'N/A';

        let squareArea = parseInt(this.div.style.height, 10) * parseInt(this.div.style.width, 10);
        let shapeArea = document.getElementById('shapeArea');
        shapeArea.innerText =`${squareArea}px`;

        let perimeterText = parseInt(this.div.style.width, 10) * 4;
        let shapePerimeter = document.getElementById('shapePerimeter');
        shapePerimeter.innerText = `${perimeterText}px`;

    }

}

class Circle extends Shape {

    constructor(x, y, radius) {
        super(x, y);
        this.div.radius = radius;
        this.div.style.height = `${radius}px`;
        this.div.style.width = `${radius}px`;
        this.div.classList.add('circle');
    }

    describe() {

        let shapeName = document.getElementById('shapeName');
        shapeName.innerText = this.constructor.name;

        let width = parseInt(this.div.radius, 10) * 2;
        let shapeWidth = document.getElementById('shapeWidth');
        shapeWidth.innerText = `${width}px`;

        let height = parseInt(this.div.radius, 10) * 2;
        let shapeHeight = document.getElementById('shapeHeight');
        shapeHeight.innerText = `${height}px`;

        let areaText = parseInt(this.div.radius, 10) * parseInt(this.div.radius, 10) * 3.14;
        let shapeArea = document.getElementById('shapeArea');
        shapeArea.innerText = `${areaText}px`;

        let perimeterText = parseInt(this.div.radius, 10) * 3.14 * 2;
        let shapePerimeter = document.getElementById('shapePerimeter');
        shapePerimeter.innerText = `${perimeterText}px`;

        let radius = parseInt(this.div.radius, 10);
        let shapeRadius = document.getElementById('shapeRadius');
        shapeRadius.innerText = `${radius}px`;

    }

}

class Triangle extends Shape {

    constructor(x, y, height) {
        super(x, y);

        this.div.style.width = 0;
        this.div.style.height = 0;
        this.div.style.borderBottom = `${height}px solid yellow`;
        this.div.style.borderLeft = `${height}px solid transparent`;
        this.div.classList.add('triangle');
    }

    describe() {
        
        let shapeName = document.getElementById('shapeName');
        shapeName.innerText = this.constructor.name;

        let shapeWidth = document.getElementById('shapeWidth');
        shapeWidth.innerText = 'N/A';

        let height = parseInt(this.div.style.borderBottom, 10) 
        let shapeHeight = document.getElementById('shapeHeight');
        shapeHeight.innerText = `${height}px`;

        let shapeRadius = document.getElementById('shapeRadius');
        shapeRadius.innerText = 'N/A';

        let areaText = parseInt(this.div.style.borderBottom, 10) * parseInt(this.div.style.borderLeft, 10) * 0.5;
        let shapeArea = document.getElementById('shapeArea');
        shapeArea.innerText = `${areaText}px`;

        let perimeterText = parseInt(this.div.style.borderLeft, 10) * 2  + Math.sqrt(2) * parseInt(this.div.style.borderLeft, 10);
        let shapePerimeter = document.getElementById('shapePerimeter');
        shapePerimeter.innerText = `${perimeterText}px`;

    }

}


let rectangleBtn = document.getElementById('rectangleBtn');
rectangleBtn.addEventListener('click', insertRectangle);

function insertRectangle(event) {
    event.preventDefault();
    let width = document.getElementById('rectangleWidth').value;
    let height = document.getElementById('rectangleHeight').value;
    let xVal = randomVal(0,(MAX - width));
    let yVal = randomVal(0,(MAX - height));
    let rectangle = new Rectangle(xVal, yVal, width, height);

}


let squareBtn = document.getElementById('squareBtn');
squareBtn.addEventListener('click', insertSquare);

function insertSquare(event) {
    event.preventDefault();
    let sideLength = document.getElementById('squareLengths').value;
    let xVal = randomVal(0, (MAX - sideLength));
    let yVal = randomVal(0, (MAX - sideLength));
    let square = new Square(xVal, yVal, sideLength);

}


let circleBtn = document.getElementById('circleBtn');
circleBtn.addEventListener('click', insertCircle);

function insertCircle(event) {
    event.preventDefault();
    let radius = document.getElementById('circleRadius').value;
    let xVal = randomVal(0, (MAX - radius));
    let yVal = randomVal(0, (MAX - radius));
    let circle = new Circle(xVal, yVal, radius);

}


let triangleBtn = document.getElementById('triangleBtn');
triangleBtn.addEventListener('click', insertTriangle);

function insertTriangle(event) {
    event.preventDefault();
    let height = document.getElementById('triangleHeight').value;
    let xVal = randomVal(0, (MAX - height));
    let yVal = randomVal(0, (MAX - height ));
    let triangle = new Triangle(xVal, yVal, height);

}

function randomVal(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}