function Start(){
  navigator.mediaDevices.getUserMedia({audio:true})
  classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ergEiXL3u/model.json", modelReady)

}
function modelReady(){
  classifier.classify(gotResults)
}
function gotResults(error,results){
  if (error){
      console.log(error)

  } else {
      console.log(results)
      document.getElementById("label").innerHTML="I can hear - "+ results[0].label
      document.getElementById("accuracy").innerHTML="accuracy - "+ (results[0].confidence * 100).toFixed(2)+"%"
      var img1=document.getElementById("alien1")
      var img2=document.getElementById("alien2")
      var img3=document.getElementById("alien3")
      var img4=document.getElementById("alien4")

      if(results[0].label=="clap"){
          img1.src="cow.gif"
          img2.src="lion-roar02.png"
          img3.src=".png"
          img4.src="aliens-04.png"

      }else if(results[0].label=="Snap"){
          img1.src="aliens-01.png"
          img2.src="aliens-02.gif"
          img3.src="aliens-03.png"
          img4.src="aliens-04.png"

      }else if(results[0].label=="Bell"){
          img1.src="aliens-01.png"
          img2.src="aliens-02.png"
          img3.src="aliens-03.gif"
          img4.src="aliens-04.png"

      }else if(results[0].label=="Background Noise"){
          img1.src="aliens-01.png"
          img2.src="aliens-02.png"
          img3.src="aliens-03.png"
          img4.src="aliens-04.gif"

      }
      randomR=Math.floor(Math.random()*255)+1
      randomG=Math.floor(Math.random()*255)+1
      randomB=Math.floor(Math.random()*255)+1
      document.getElementById("label").style.color="rgb("+randomR+","+randomG+","+randomB+")"

      document.getElementById("accuracy").style.color="rgb("+randomR+","+randomG+","+randomB+")"


  }
}