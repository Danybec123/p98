var API=window.webkitSpeechRecognition
var nuevo=new API
function Click() {
    nuevo.start()
}
function hablar(){
    var appi=window.speechSynthesis;
    var respuesta="tomando foto en 5 segundos"
    var decir=new SpeechSynthesisUtterance(respuesta)
    appi.speak(decir)
    Webcam.attach(camarota);
}


nuevo.onresult=function(results){
    
   console.log(results)
    var guardar=results.results[0][0].transcript
    console.log(guardar)
     document.getElementById("textarea").innerHTML=guardar
       if (guardar=="take selfie") {
        hablar()
        setTimeout(function(){
         selfies()
        },5000)    
       }

    }
    camarota=document.getElementById("Div")
    Webcam.set({
        width:500,
        height:500,
        image_format:"png"
    })

    function selfies(){
        Webcam.snap(function(data_uri){
            document.getElementById("Dive").innerHTML=    "<img id='image' src="+data_uri+">"
        })
        
    function selfies(){
        Webcam.snap(function(data_uri){
            document.getElementById("divv").innerHTML=    "<img id='image' src="+data_uri+">"
        })
        
    function selfies(){
        Webcam.snap(function(data_uri){
            document.getElementById("id").innerHTML=    "<img id='image' src="+data_uri+">"
        })
    }