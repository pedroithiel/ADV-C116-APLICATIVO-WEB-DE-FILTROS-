noseY= 0
noseX = 0
BocaX= 0
BocaY= 0
function preload() {
    img = loadImage("https://i.postimg.cc/8zWN4r9C/image.png")
    img2 = loadImage("https://i.postimg.cc/rwkL7Nz7/lollipop-png-5a3a39842453a0-1724241115137652521488.png")
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoad)
    poseNet.on('pose', pegarposes);
}
function pegarposes(resultado) {
    console.log(resultado)
    if(resultado.length > 0) {
    noseX = resultado[0].pose.nose.x -15  
    noseY = resultado[0].pose.nose.y -15

    BocaX = resultado[0].pose.nose.x -20 
    BocaY = resultado[0].pose.nose.y + 30

    console.log(noseX)
    console.log(noseY)
    }  

}
function modelLoad() {
    console.log("model load!")
}
function draw() {
    image(video,0, 0, 400, 400)
    image(img,noseX,noseY,50, 50)
    image(img2,BocaX,BocaY,100,100 )
    fill(22,150, 95)
}
function Foto() {
    save("image.jpg")
}

//https://i.postimg.cc/rwkL7Nz7/lollipop-png-5a3a39842453a0-1724241115137652521488.png