const songs = [{
    name : "music-1",
    title :"Lotus Lane",
    artist : "The loyallit",

},
{
    name: "music-2",
    title : "The Knight",
    artist : "The soul",
},
{
    name : "music-3",
    title :"Love Rigle",
    artist : "Never lie",
},
{
    name : "music-4",
    title :"Micheal Too",
    artist : "the Mouch",
},{
    name : "music-5",
    title :"Micheal Too",
    artist : "the Mouch",
},
{
    name : "music-6",
    title :"Micheal Too",
    artist : "the Mouch",
},
]
const Play = document.getElementById('play');
const Prev = document.getElementById('prev');
const Next = document.getElementById('next');
const Tilte = document.getElementById('title');
const Artist = document.getElementById('artist');
let progress = document.getElementById('progress');
let current_time = document.getElementById('current_time');
let progress_div = document.getElementById('progress_div');
let Duration = document.getElementById('duration')
const music = document.querySelector('audio');
const Img = document.querySelector('img');

let isPlaying = false;
let SongsNo = 0;

// window.addEventListener("DOMContentLoaded",()=>{
//     loadsong();
// })
//For Play 
 const playMusic = () =>{
    music.play(); 
    isPlaying = true;
    Play.classList.replace('fa-play', "fa-pause");
    Img.classList.add('anime');
    
}
//For Pause
pauseMusic = () =>{
    music.pause(); 
    isPlaying = false;
    Play.classList.replace('fa-pause', "fa-play");
    Img.classList.remove('anime');

}
Play.addEventListener('click',function(){
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic() : playMusic();
})
// changing music item 

const loadsong = (songs) =>{
    Tilte.textContent = songs.title;
    Artist.textContent = songs.artist;
    music.src = "songs/"+songs.name+".mp3";
    Img.src = "images/"+songs.name+".jpg";
}
loadsong(songs[SongsNo]);
Next.addEventListener('click',() =>{
    SongsNo++;
    if(SongsNo > songs.length -1){
        SongsNo =0;
    }
    loadsong(songs[SongsNo]);
    playMusic();
})

// Progress Work 
music.addEventListener('timeupdate',(e) =>{
    const {currentTime,duration} =e.srcElement;
    // console.log(currentTime);
    // console.log(duration);
    let Progress_time = (currentTime /duration)*100;
    progress.style.width = `${Progress_time}%`;
    

    // music duration update 
    let minute_duration = Math.floor(duration/60);
    let sec_duration = Math.floor(duration % 60);
    // console.log(minute_duration);
    // console.log(sec_duration);
    let tot_duration = `${minute_duration}:${sec_duration}`;
    if(duration){
    Duration.textContent  = `${tot_duration}`;
    }

    // currentTime 
    let minute_currentTime = Math.floor(currentTime/60);
    let sec_currentTime = Math.floor(currentTime % 60);
    // console.log(minute_duration);
    // console.log(sec_duration);
   
   
    if(sec_currentTime < 10){
        sec_currentTime = `0${sec_currentTime}`;
    }
    let tot_currentTime = `${minute_currentTime}:${sec_currentTime}`;
    current_time.textContent  = `${tot_currentTime}`;
    

});
music.addEventListener('ended',function(){
    music.pause();
    Img.classList.remove('anime');
});


progress_div.addEventListener('click',function(ece){
    const {duration} = music;  
 let move_progress = (ece.offsetX/ece.srcElement.clientWidth) * duration;
 music.currentTime = move_progress ;  
})