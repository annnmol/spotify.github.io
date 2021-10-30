console.log("Welcome to Spotify");

let songsindex = 0;
let audioElement = new Audio('/songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let mastersongartist = document.getElementById('mastersongartist');
let mastercover = document.getElementById('mastercover');
let mastersongstart = document.getElementById('mastersongstart');
let mastersongend = document.getElementById('mastersongend');
let songsduration = document.getElementsByClassName('songsduration');
let songsitem = Array.from(document.getElementsByClassName('songsitem'))

// let songs = [{
//         songsname: "Humma Humma",
//         filePath: '/songs/1.mp3',
//         songscover: '/covers/1.jpg',
//         songsartist: 'Arijit Singh',
//         songsduration: '4:59',
//     },
//     {
//         songsname: "Brown Rang",
//         filePath: '/songs/1.mp3',
//         songscover: '/covers/2.jpg',
//         songsartist: 'YoYo Honey Singh',
//         songsduration: '3:02',
//     },
//     {
//         songsname: "Ae Dil Hai Mushkil",
//         filePath: '/songs/3.mp3',
//         songscover: '/covers/3.jpg',
//         songsartist: 'Arijit Singh',
//         songsduration: '3:38',
//     },
//     {
//         songsname: "Agar Tum Saath Ho",
//         filePath: '/songs/4.mp3',
//         songscover: '/covers/4.jpg',
//         songsartist: 'Alka Yagnik',
//         songsduration: '2:10',
//     },
//     {
//         songsname: "Baarish Ki Jaaye",
//         filePath: '/songs/5.mp3',
//         songscover: '/covers/5.jpg',
//         songsartist: 'B Praak (Ganza)',
//         songsduration: '3:29',
//     },
//     {
//         songsname: "Kabza",
//         filePath: '/songs/6.mp3',
//         songscover: '/covers/6.jpg',
//         songsartist: 'BabbuMann',
//         songsduration: '1:50',
//     },
//     {
//         songsname: "Itihaas",
//         filePath: '/songs/7.mp3',
//         songscover: '/covers/7.jpg',
//         songsartist: 'BabbuMann',
//         songsduration: '3:07',
//     },
//     {
//         songsname: "Barsaat Ke Mausam Mein",
//         filePath: '/songs/8.mp3',
//         songscover: '/covers/8.jpg',
//         songsartist: 'Kumar Sanu',
//         songsduration: '2:39',
//     },
//     {
//         songsname: "Sanu Tedi Tedi Takdi Tu",
//         filePath: '/songs/9.mp3',
//         songscover: '/covers/9.jpg',
//         songsartist: 'Surjit Bindrakhiya',
//         songsduration: '4:59',
//     },
// ]

songsitem.forEach((element, i) => {
    element.getElementsByClassName('songsname')[0].innerText = songs[i].songsname;
    element.getElementsByClassName('songscover')[0].innerText = songs[i].songscover;
    element.getElementsByClassName('songsartist')[0].innerText = songs[i].songsartist;

})

isplaying = false;

function playfunction() {
    isplaying = true;
    // console.log(isplaying);
    audioElement.play();
    document.getElementById('masterPlay').src = "/images/pause-round.svg";
    gif.style.opacity = 1;
    mastercover.style.animationPlayState = 'running';
}

function pausefunction() {
    isplaying = false;
    // console.log(isplaying);
    setallsongsicontoplay();
    audioElement.pause();
    document.getElementById('masterPlay').src = "/images/play-button.svg";
    gif.style.opacity = 0;
    mastercover.style.animationPlayState = 'paused';
}




// play pause song
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {

        playfunction();
    } else {
        pausefunction();

    }
})

// Event listen 
audioElement.addEventListener('timeupdate', () => {
    // calculating progress value 
    
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //displaying progress in console
    // console.log(progress); 
    //update progress bar
    myProgressBar.value = progress;

    audioElement.addEventListener('loadeddata', () => {
        

        tmin = Math.floor(audioElement.duration / 60);
        if (tmin < 10) {
            tmin = '0' + tmin;
        }
        let tsec = Math.floor(audioElement.duration % 60);
        if (tsec < 10) {
            tsec = '0' + tsec;
        }
        mastersongend.innerHTML = `${tmin}:${tsec}`;
    })
    cmin = Math.floor(audioElement.currentTime / 60);
        if (cmin < 10) {
            cmin = '0' + cmin;
        }
        let csec = Math.floor(audioElement.currentTime % 60);
        if (csec < 10) {
            csec = '0' + csec;
        }
        mastersongstart.innerHTML = `${cmin}:${csec}`;

})




//updating progress bar

myProgressBar.addEventListener('change', () => {
    // converting percentage value into duration
    seektime = myProgressBar.value * audioElement.duration / 100;
    // console.log(seektime);
    audioElement.currentTime = seektime;



})





//plays next song after current song ends
audioElement.addEventListener('ended', () => {
    if (songsindex >= 8) {
        songsindex = 0
    } else {
        songsindex += 1;
    }
    updatesongindex();
    playfunction();
})
function abc (){
Array.from(document.getElementsByClassName('songsduration')).forEach((element) => {
    audioElement.addEventListener('loadeddata', () => {
        

        tmin = Math.floor(audioElement.duration / 60);
        if (tmin < 10) {
            tmin = '0' + tmin;
        }
        let tsec = Math.floor(audioElement.duration % 60);
        if (tsec < 10) {
            tsec = '0' + tsec;
        }
        element.innerHTML = `${tmin}:${tsec}`;
    })    
})
}
// changing song title color on hover
Array.from(document.getElementsByClassName('songsname')).forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.color = "red";
    });
    element.addEventListener("mouseout", () => {
        element.style.color = "black";
    });
})







// //changing coverimage to playicon on hover
// Array.from(document.getElementsByClassName('songscover')).forEach(element => {
//         element.addEventListener("mouseover", ()=>{
//             element.src = "/images/play-button-black.svg";
//         });
//         element.addEventListener("mouseout",()=>{
//             element.src=songscover;
//         } );
// })


// Array.from(document.getElementsByClassName('songscover')).forEach((element) => {
//     if(isplaying=true){
//         element.src="/images/volume.svg";
//     }
// });







// // play song on clicking songscover 
// Array.from(document.getElementsByClassName('songscover')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         if (audioElement.paused) {

//             songsindex = parseInt(e.target.id);

//             updatesongindex();
//             playfunction();
//         } else {

//             pausefunction();
//         }
//     })
// })



function setallsongsicontoplay() {
    Array.from(document.getElementsByClassName('playicon')).forEach((element) => {

        element.src = "/images/play-button-black.svg";
    })
}



// play song on clicking song item playicon
Array.from(document.getElementsByClassName('playicon')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused) {
            setallsongsicontoplay();
            element.src = "/images/pause-round-black.svg";
            songsindex = parseInt(e.target.id);
            updatesongindex();
            playfunction();
        } else {

            pausefunction();
            element.src = "images/play-button-black.svg";
        }
    })
})


// update song index function for buttons

function updatesongindex() {

    audioElement.src = `songs/${songsindex + 1}.mp3`;
    mastersongname.innerHTML = songs[songsindex].songsname;
    mastersongartist.innerHTML = songs[songsindex].songsartist;
    document.getElementById('mastercover').src = songs[songsindex].songscover;
    mastersongend.innerHTML = songs[songsindex].songsduration;
    audioElement.currentTime = 0;
}



//back button

document.getElementById("previous").addEventListener('click', () => {
    if (songsindex <= 0) {
        songsindex = 0
    } else {
        songsindex -= 1;
    }
    updatesongindex();
    playfunction();
})

//next button
document.getElementById("next").addEventListener('click', () => {
    if (songsindex >= 9) {
        songsindex = 0
    } else {
        songsindex += 1;
    }
    updatesongindex();
    playfunction();
})

//shuffle button
document.getElementById("shuffle").addEventListener('click', () => {
    if (songsindex >= 9) {
        songsindex = 0
    } else {
        // Returns a random integer from 0 to 9:
        songsindex = Math.floor(Math.random() * 10);
    }
    updatesongindex();
    playfunction();
})

//replay button
document.getElementById("replay").addEventListener('click', () => {

    updatesongindex();
    playfunction();
})