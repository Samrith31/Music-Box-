console.log("Welcome to spotify");
let songIndex=0;
let audioElement=new Audio('songs1/1.mp3');
let audioElement1=new Audio('songs1/1.mp3');
let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
let songs=[

{songName:"Azhagae Pozhikiraai",filePath:"songs1/1.mp3 ",coverPath:"musicplayer template.jpeg"},
{songName:"Chedi Onnu",filePath:"songs1/2.mp3 ",coverPath:"musicplayer template.jpeg"},
{songName:"Devathai",filePath:"songs1/3.mp3 ",coverPath:"musicplayer template.jpeg"},
{songName:"Elangaathu Veesudhey",filePath:"songs1/4.mp3 ",coverPath:"musicplayer template.jpeg"},
{songName:"Iragai Pole",filePath:"songs1/5.mp3 ",coverPath:"musicplayer template.jpeg"},
{songName:"Malto Kithapuleh",filePath:"songs1/6.mp3 ",coverPath:"musicplayer template.jpeg"},
{songName:"Mazhai Megam Neeyadha",filePath:"songs1/7.mp3 ",coverPath:"musicplayer template.jpeg"},
{songName:"Raasthi Pola",filePath:"songs1/8.mp3 ",coverPath:"musicplayer template.jpeg"},
{songName:"Saayndhu Saayandhu",filePath:"songs1/9.mp3 ",coverPath:"musicplayer template.jpeg"},
{songName:"Thendral Vandhu",filePath:"songs1/10.mp3 ",coverPath:"musicplayer template.jpeg"},

]

songItems.forEach((element ,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})




// audioElement.play();

// handle play

masterplay.addEventListener('click',()=>{
      if(audioElement.paused||audioElement.currentTime<0){
        audioElement.play();

        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
        gif1=document.getElementById(`gif${songIndex}`);
       gif1.style.opacity=1;


      }
      else{
        audioElement.pause();
        makeAllgifsstop();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;


      }
})

let duration=0;
let duration1=0;
const setduration=()=>{
    Array.from(document.getElementsByClassName('songListplay')).forEach((element)=>{
        let id= element.getElementsByTagName('span')[0].id;
        console.log(id)
        
       
            audioElement1.src=`songs1/${id}.ogg`;
            audioElement1.src=`songs1/${id}.mp3`;
           audioElement1.onloadedmetadata=function(){
        
     
                duration=audioElement1.duration/60;
                duration1=duration.toFixed(2);
                console.log(duration1);
               
            //    console.log(id);
            //    console.log(duration);


            
               
           }
           
          

          
        });
       
   
}
setduration();

 
   



// listen to events

audioElement.addEventListener('timeupdate',()=>{

// console.log('timeupdate');

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value=progress;


})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= (myProgressBar.value * audioElement.duration/100);
})

 



const makeAllPlays=()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

const makeAllgifsstop=()=>{
    Array.from(document.getElementsByClassName('songListplay')).forEach((element)=>{
        
      let id= element.getElementsByTagName('img')[0].id;
       

       var gifhere=document.getElementById(id);
       gifhere.style.opacity=0;
      
    })

}

let prevTarget=null;

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{


        if(prevTarget==e.currentTarget){

            console.log('vanakamm')
    
    
         
          audioElement.pause();
          makeAllgifsstop();
          e.target.classList.remove('fa-pause');
          e.target.classList.add('fa-play');
          gif.style.opacity=0;
    
    
       
      
    }

       
       prevTarget=e.target;
        
       makeAllPlays();
       makeAllgifsstop();
     
       songIndex = parseInt(e.target.id);
       gif1=document.getElementById(`gif${songIndex}`);
       gif1.style.opacity=1;
     
       gif.style.opacity=1;
       e.target.classList.remove('fa-play');
       e.target.classList.add('fa-pause');
       audioElement.src=`songs1/${songIndex}.mp3`;
       masterSongName.innerText=songs[songIndex-1].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterplay.classList.remove('fa-play');
       masterplay.classList.add('fa-pause');

        
      


    })
})
 

document.getElementById('next').addEventListener('click',()=>{
            if(songIndex>9){
                songIndex=0;
            }
            else{
                songIndex+=1;
            }

            makeAllPlays();
            makeAllgifsstop();
            gif1=document.getElementById(`gif${songIndex}`);
            gif1.style.opacity=1;

            audioElement.src=`songs1/${songIndex}.mp3`;
       audioElement.currentTime=0;
       masterSongName.innerText=songs[songIndex-1].songName;
       gif.style.opacity=1;
       audioElement.play();
       masterplay.classList.remove('fa-play');
       masterplay.classList.add('fa-pause');

})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=10;
    }
    else{
        songIndex-=1;
    }

    makeAllPlays();
       makeAllgifsstop();
       gif1=document.getElementById(`gif${songIndex}`);
       gif1.style.opacity=1;

    audioElement.src=`songs1/${songIndex}.mp3`;
audioElement.currentTime=0;
masterSongName.innerText=songs[songIndex-1].songName;
gif.style.opacity=1;
audioElement.play();

masterplay.classList.remove('fa-play');
masterplay.classList.add('fa-pause');

})