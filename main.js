cocossd="";
results=[];
value=[];

function setup(){
Canvas=createCanvas(380,380);
Canvas.center()
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
}

function start(){
    objectdetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting object";
}

function modelLoaded(){
console.log("model is loaded");
status=true;
}

function draw(){
    image(video,0,0,380,380);
}

function gotresults(error,results){
    if(error){
      console.log("error");
    } 
    else{
           console.log(results);
           object=results;
    }
  }


function draw(){
    if(status != ""){
        for(i=0; i<object.length;i++){
            document.getElementById("u").innerHTML=" objects detected : " + object.length;
            text(object[i].label+""+ percent + "%",object[i].x + 15,object[i].y + 15);












    }
}
}

















































