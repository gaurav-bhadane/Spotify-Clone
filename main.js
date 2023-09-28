 console.log("Welcome to Spotify")
 let songindex =0
 let masterplay=document.querySelector('#masterplay')
 let myprogressbar=document.querySelector('#myprogressbar')
 let gif=document.querySelector('#gif')
 let songs=
 [
    {songname: "Heeriye", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Heeriye", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Heeriye", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Heeriye", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Heeriye", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Heeriye", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Heeriye", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
 ]

 let audioelement=new Audio('1.mp3')
 //audioelement.play()
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
 //Listen to events
 myprogressbar.addEventListener("timeupdate",()=>{
    console.log('timeupdate');
 })