console.log("Welcome to spotify");
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById('myProgressBar')
let masterSongName = document.getElementById('mastersongname')
let gif = document.getElementById('gif')

let songs = [
    {songName: "Despacito", filePath: "songs/1.mp3", coverPath: "covers/1.png"},
    {songName: "Shape of You", filePath: "songs/2.mp3", coverPath: "covers/2.png"},
    {songName: "See You Again ", filePath: "songs/3.mp3", coverPath: "covers/3.png"},
    {songName: "Uptown Funk", filePath: "songs/4.mp3", coverPath: "covers/4.png"},
    {songName: "Gangnam Style", filePath: "songs/5.mp3", coverPath: "covers/5.png"},
    {songName: "Dame Tu Cosita", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sugar", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Sorry", filePath: "songs/8.mp3", coverPath: "covers/8.png"},
    {songName: "Roar", filePath: "songs/9.mp3", coverPath: "covers/9.png"},
    {songName: "Counting Stars", filePath: "songs/10.mp3", coverPath: "covers/10.png"}

]
//handling event pause/play
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }

})
//listen tpo songs
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        gif.style.opacity = 1;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})
document.getElementById('forward').addEventListener('click',()=>{
    if(songindex >=9){
        songindex = 0
    }
    else{
        songindex+=1
    }
    audioElement.src= `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex <=0){
        songindex = 0
    }
    else{
        songindex-=1
    }

    audioElement.src= `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})