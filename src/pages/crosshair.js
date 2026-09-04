import p5 from 'p5';

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(400);
  }


  p.draw = () => {
    let x = 200;
    let y = 200;

    let h = 100;
    let w = 100;

  //Crosshair
  p.fill('lightblue');
  p.arc(x,y,100,100,0,2*p.PI);
  //Circle 1
  p.arc(x,y,100,100,0,p.PI/4,p.PIE);
  p.arc(x,y,100,100,p.PI/4,p.PI/2,p.PIE);
  p.arc(x,y,100,100,p.PI/2,p.PI/2+p.PI/4,p.PIE);
  p.arc(x,y,100,100,p.PI/2+p.PI/4,p.PI,p.PIE);
  p.arc(x,y,100,100,p.PI,p.PI+p.PI/4,p.PIE);
  p.arc(x,y,100,100,p.PI+p.PI/4,p.PI+p.PI/2,p.PIE);
  p.arc(x,y,100,100,p.PI+p.PI/2,p.PI+p.PI/2+p.PI/4,p.PIE);

  let circleSize = 20
  let sizeExpansion = circleSize * p.sin(p.frameCount * 0.1) + circleSize;

  p.fill('white');
  p.circle(200,200,sizeExpansion);

}
}
