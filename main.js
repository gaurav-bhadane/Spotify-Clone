 console.log("Welcome to Spotify")
 let songindex =0
 let masterplay=document.querySelector('#masterplay')
 let myprogressbar=document.querySelector('#myprogressbar')
 let gif=document.querySelector('#gif')
let forward=document.querySelector('#forward')
let backward=document.querySelector('#backward')
let songpara=document.querySelector('.songpara')
let songitem=document.querySelectorAll('.songitem')

 let songs=
 [
    {songname: "Heeriye", filepath: "songs/1.mp3", coverpath: "covers/1.jpeg"},
    {songname: "Kahani Suno", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname: "Chaleya", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songname: "Kesariya", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songname: "Maan Meri Jaan", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songname: "Not Ramaiya Vastavaiya", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songname: "Tere Hawale", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songname: "Phir aur kya Chahiye", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
 ]

 let audioelement=new Audio('./songs/1.mp3')
 audioelement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    myprogressbar.value=progress
 })
 myprogressbar.addEventListener("change",()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
 })

 masterplay.addEventListener("click",()=>{
    if (audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play()
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1

    }
    else
    {
        audioelement.pause()
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity=0  
    }
    
})
const makeAllPlays=()=>
{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.add("fa-circle-play")
        element.classList.remove("fa-circle-pause")
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener("click",(e)=>{
        makeAllPlays()
        songindex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioelement.src = `songs/${songindex}.mp3`
        songpara.innerText=songs[songindex-1].songname
        gif.style.opacity=1
        audioelement.currentTime = 0;
        audioelement.play()
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');
    })
});

document.getElementById('forward').addEventListener("click",()=>{
    if (songindex>songs.length)
    {   
        songindex=0
    }
    else
    {
        songindex++;
    }
    audioelement.src = `songs/${songindex}.mp3`
    songpara.innerText=songs[songindex-1].songname
    audioelement.currentTime = 0;
    audioelement.play()
    masterplay.classList.add('fa-circle-pause');
    masterplay.classList.remove('fa-circle-play');

})
document.getElementById('backward').addEventListener("click",()=>{
    if (songindex<0)
    {   
        songindex=songs.length
    }
    else
    {
        songindex--;
    }
    audioelement.src = `songs/${songindex}.mp3`
    songpara.innerText=songs[songindex-1].songname
    audioelement.currentTime = 0;
    audioelement.play()
    masterplay.classList.add('fa-circle-pause');
    masterplay.classList.remove('fa-circle-play');

})