let rPos, pPos, rDir, pDir, tX, tY

function setup() {
  createCanvas(400, 400)
  rPos = createVector(100, 200)
  pPos = createVector(300, 200)
  tX = 0.0
  tY = 1000.0
}

function draw() {
  background(51)
  noFill()
  strokeWeight(4)
  rDir = createVector(random(-1, 1), random(-1, 1))
  pDir = createVector(map(noise(tX), 0, 1, -1, 1), map(noise(tY), 0, 1, -1, 1))
  rDir.setMag(50)
  pDir.setMag(50)
  stroke(255, 0, 0)
  ellipse(rPos.x, rPos.y, 10)
  line(rPos.x, rPos.y, rPos.x + rDir.x, rPos.y + rDir.y)
  stroke(0, 255, 0)
  ellipse(pPos.x, pPos.y, 10)
  line(pPos.x, pPos.y, pPos.x + pDir.x, pPos.y + pDir.y)
  tX += 0.01
  tY += 0.01
}
