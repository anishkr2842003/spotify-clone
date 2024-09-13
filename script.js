var discoverSongs = [
  {
    title: "Mere naam tu",
    path: "Songs/_Mere-Naam-Tu-Full-Video-Song-ZERO-Shah-Rukh-Khan-Anushka-Sha.mp3",
    image: "images/mera naam tu.jpeg",
  },
  {
    title: 'Tera Fitoor',
    path: 'Songs/01 Tera Fitoor (Genius).mp3',
    image: 'Images/tera fetoor.jpeg'
  },
  {
    title: 'Hua Hain Aaj Pehli Baar',
    path: 'Songs/03 Hua Hain Aaj Pehli Baar - Sanam Re (Armaan Malik) 320Kbps.mp3',
    image: 'Images/Huaa hai aaj pahli baar.jpeg'
  },
  {
    title: 'Dhal Jaun Main',
    path: 'Songs/06 Dil Meri Na Sune (Reprise) Genius.mp3',
    image: 'Images/dhal jau main.jpeg'
  },
  {
    title: 'Enna Sona',
    path: 'Songs/A.R. Rahman - Enna Sona Best Video_OK Jaanu_Arijit Singh_Shraddha Kapoor_Aditya Roy(MP3_128K).mp3',
    image: 'Images/Enna sona.jpeg'
  },
  {
    title: 'ADDY NAGAR - Achchi Lagti Ho',
    path: 'Songs/ADDY NAGAR - Achchi Lagti Ho ( Full Song ) Vijay JammersNew Hindi Songs.mp3',
    image: 'Images/mujhe tum achhi lagti ho.jpeg'
  },
  {
    title: 'Aakhon Ko Teri Aadat Hai',
    path: 'Songs/Aakhon Ko Teri Aadat Hai Lyrics(MP3_128K).mp3',
    image: 'Images/aankho ko teri aadat hai.jpeg'
  },
  {
    title: 'Aankhon Mein Aansoon Leke',
    path: 'Songs/Aankhon Mein Aansoon ¦ New Hindi Songs 2017 ¦ Nadeem, Palak, Yaseer ¦ Ek Haseena Thi Ek Deewana Tha.mp3',
    image: 'Images/aanko me aansu leke.jpeg'
  },
  
];

var indiasBestSongs = [
  {
    title: 'Aawara Hawa Ka Jhonka Hoon',
    path: 'Songs/Aawara Hawa Ka Jhonka Hoon I Cover Song by Sneh Upadhya (Helo Kon).mp3',
    image: 'Images/Awara hawa ka jhoka hu.jpeg'
  },
  {
    title: 'Aawara Shaam Hai',
    path: 'Songs/Aawara Shaam Hai ¦ Meet Bros Ft. Piyush Mehroliyaa ¦ Manjul, Rits Badiani, Shabbir ¦ Hit Song.mp3',
    image: 'Images/Awara shaam hai.jpeg'
  },
  {
    title: 'Agar Tum Saath Ho',
    path: 'Songs/Agar Tum Saath Ho FULL AUDIO Song _ Tamasha _ Ranbir Kapoor_ Deepika Padukone _ T-Series(MP3_128K).mp3',
    image: 'Images/Agar tum sath ho.jpeg'
  },
  {
    title: 'Akh Lad Jaave',
    path: 'Songs/Akh_Lad_Jaave_With_Lyrics__Loveyatri__Aayush_S__Warina_H_Badshah,Tanishk_Bagchi,Jubin_N,Asees_K.mp3',
    image: 'Images/aankh lad jaye.jpeg'
  },
  {
    title: 'Apnaa Mujhe Tu Lagaa',
    path: 'Songs/Apnaa Mujhe Tu Lagaa Lyrical 1920 Evil Returns Aftab Shivdasani, Sonu Nigam.mp3',
    image: 'Images/Apna mujhe tu laga.jpeg'
  },
  {
    title: 'Muskurane',
    path: 'Songs/Arijit Singh - Muskurane (Full Song Official) - Citylights (2014) - Rajkumar Rao - YouTube(MP3_128K).mp3',
    image: 'Images/Muskurane ki wajah tum ho.jpeg'
  },
  {
    title: 'BOL DO NA ZARA',
    path: 'Songs/BOL DO NA ZARA Lyrical Video Song _ AZHAR _ Emraan Hashmi_ Nargis Fakhri _ Armaan Malik_Amaal Mallik(MP3_128K).mp3',
    image: 'Images/Bol do n jara.jpeg'
  },
  {
    title: 'Baithe Baithe',
    path: 'Songs/Baithe Baithe - Mouni Roy_ Angad Bedi _ Meet Bros .mp3',
    image: 'Images/baithe baithe.jpeg'
  },
];

var popularSongs = [
  {
    title: 'Banjaara',
    path: 'Songs/Banjaara Full Video Song _ Ek Villain _ Shraddha Kapoor_ Siddharth Malhotra(MP3_128K).mp3',
    image: 'Images/Banjaraa.jpeg'
  },
  {
    title: 'Barsaat Ki Dhun',
    path: 'Songs/Barsaat Ki Dhun Song _ Rochak K Ft. Jubin N _ .mp3',
    image: 'Images/barshat ki dhun.jpeg'
  },
  {
    title: 'Mere Naam Tu',
    path: 'Songs/_Mere-Naam-Tu-Full-Video-Song-ZERO-Shah-Rukh-Khan-Anushka-Sha.mp3',
    image: 'Images/mera naam tu.jpeg'
  },
  {
    title: 'Tum Hi Ho Aashiqui 2',
    path: 'Songs/_Tum Hi Ho_ Aashiqui 2 Full Song With Lyrics _ Aditya Roy Kapur_ Shraddha Kapoor(MP3_128K).mp3',
    image: 'Images/tum hi ho aasiqi 2.jpeg'
  },
];


var discoverContainer = document.querySelector('#discover-song')
var indiansBestContainer = document.querySelector('#indias-best-song')
var popularContainer = document.querySelector('#popular-song')

var audioPlayer = document.querySelector('#audio')
function discoverSongCardCreate(){

    discoverSongs.forEach((e)=>{
        var card = `
        <div class="card">
                    <div class="card-img">
                        <img src="${e.image}" alt="">
                    </div>
                    <i class="fa-solid fa-play"></i>
                    <h4>${e.title.length > 25 ? e.title.slice(0,20)+' . . .' : e.title}</h4>
                </div>
        `

        var temDiv = document.createElement('div');
        temDiv.innerHTML = card
        discoverContainer.append(temDiv)

        temDiv.addEventListener('click', ()=>{
            playSong(e.path)
        })


    })

}
discoverSongCardCreate();

function indiansBestSongCardCreate(){

  indiasBestSongs.forEach((e)=>{
      var card = `
      <div class="card">
                  <div class="card-img">
                      <img src="${e.image}" alt="">
                  </div>
                  <i class="fa-solid fa-play"></i>
                  <h4>${e.title.length > 25 ? e.title.slice(0,20)+' . . .' : e.title}</h4>
              </div>
      `

      var temDiv = document.createElement('div');
      temDiv.innerHTML = card
      indiansBestContainer.append(temDiv)

      temDiv.addEventListener('click', ()=>{
          playSong(e.path)
      })


  })

}
indiansBestSongCardCreate()

function popularSongCardCreate(){

  popularSongs.forEach((e)=>{
      var card = `
      <div class="card">
                  <div class="card-img">
                      <img src="${e.image}" alt="">
                  </div>
                  <i class="fa-solid fa-play"></i>
                  <h4>${e.title.length > 25 ? e.title.slice(0,20)+' . . .' : e.title}</h4>
              </div>
      `

      var temDiv = document.createElement('div');
      temDiv.innerHTML = card
      popularContainer.append(temDiv)

      temDiv.addEventListener('click', ()=>{
          playSong(e.path)
      })


  })

}
popularSongCardCreate()

function playSong(songPath){
    audioPlayer.src = songPath
    audioPlayer.play()
}
