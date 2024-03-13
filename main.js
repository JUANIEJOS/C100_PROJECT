var SpeechRecognition = window.webkitSpeechRecognition;
var Content="";
var recognition = new SpeechRecognition();
img_id="";

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function start()
{
    recognition.start();
} 
recognition.onresult=function(event){
    console.log(event);
    Content=event.results[0][0].transcript;

    if(Content=="selfie"){
        speak();
        Webcam.attach(camera);
    }
}

function speak(){
setTimeout( function(){
img_id="selfie1";
take_snapshot();
var synth = window.speechSynthesis;
speak_data = "Taking your next Selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);

}, 5000);



setTimeout( function(){
img_id="selfie2";
take_snapshot();
var synth = window.speechSynthesis;
speak_data2 = "Taking your next Selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data2);
synth.speak(utterThis);

}, 10000);

setTimeout( function(){
img_id="selfie3";
take_snapshot();
}, 15000);

}

function take_snapshot(){
console.log(img_id);

Webcam.snap(function(data_uri){
if(img_id=="selfie1"){
document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'">';
}
if(img_id=="selfie2"){
    document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'">';
}
if(img_id=="selfie3"){
    document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'">';
    img_id="";
}
})
};