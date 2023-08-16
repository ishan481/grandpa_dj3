harrypotter="";
peterpan="";
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
scoreLeftwrist=0;
scoreRightwrist=0;

function preload(){
    harrypotter=loudSound("music.mp3");
    peterpan=loudSound("music2.mp3");
}


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#0000FF");
    
}

function modelLoaded(){

    console.log('poseNet is initialized');

}

function gotPoses(results){

    if(results.length>0){
        console.log(results);
        scoreLeftwrist=results[0].pose.keypoints[9].score;
        scoreRightwrist=results[0].pose.keypoints[10].score;
        console.log("score leftwrist="+scoreLeftwrist+ "score Rightwrist="+scoreRightwrist);
       leftWristX=results[0].pose.leftWrist.x;
         leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX=" +leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX=" +rightWristX+"rightWristY="+rightWristY);

         
        

    }
}
