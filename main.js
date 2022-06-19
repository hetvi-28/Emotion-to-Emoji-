prediction_1="";
prediction_2="";

Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("webcam");
Webcam.attach('#webcam');

function take_photo()
{
    Webcam.snap(function(data_uri){
        document.getElementById("captured_photo").innerHTML='<img id="c_image" src="'+ data_uri+'"/>';
    });
}
console.log('ml5 version- ', ml5.version );
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/d-OJw6W-J/model.json', modelloaded);
function modelloaded(){
    console.log('Model loaded');
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is: " + prediction_1;
    speak_data_2="The second prediction is: " + prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);
}
function captured_photo()
{
    img=document.getElementById('c_image');
    classifier.classify(img, gotresult);
}
function gotresult(error, results)
{
    if(error) 
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        document.getElementById("emotion").innerHTML= results[0].label;
        document.getElementById("emotion_1").innerHTML= results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();

        if(prediction_1=="happy")
        {
            document.getElementById("emoji_pic").innerHTML="&#128522;";
        }
        if(prediction_1=="sad")
        {
            document.getElementById("emoji_pic").innerHTML="&#128532;";
        }
        if(prediction_1=="angry")
        {
            document.getElementById("emoji_pic").innerHTML="&#128545;";
        }
        if(prediction_1=="shocked")
        {
            document.getElementById("emoji_pic").innerHTML="&#128559;";
        }
        if(prediction_1=="laughing")
        {
            document.getElementById("emoji_pic").innerHTML="&#128514;";
        }
        if(prediction_2=="happy")
        {
            document.getElementById("emoji_pic_1").innerHTML="&#128522;";
        }
        if(prediction_2=="sad")
        {
            document.getElementById("emoji_pic_1").innerHTML="&#128532;";
        }
        if(prediction_2=="angry")
        {
            document.getElementById("emoji_pic_1").innerHTML="&#128545;";
        }
        if(prediction_2=="shocked")
        {
            document.getElementById("emoji_pic_1").innerHTML="&#128559;";
        }
        if(prediction_2=="laughing")
        {
            document.getElementById("emoji_pic_1").innerHTML="&#128514;";
        }
        
    }
}