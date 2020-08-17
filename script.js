function searchBtn(){
    const song = document.getElementById("songName").value;
    console.log(song);
    const apiUrl='https://api.lyrics.ovh/';
    const fullUrl = apiUrl + '/suggest/' + song ;
    console.log(fullUrl);
    fetch(fullUrl)
    .then(response => response.json())
    .then(data =>     {
        let songTitle = data.data[0].title;
        document.getElementById("a").innerText= songTitle;

        let songArtist = data.data[0].artist.name;
        document.getElementById("one").innerText= songArtist; 

         console.log(songArtist);

    })
}

function getLyrics(){
    const songTitle =  document.getElementById("a").innerText;
    var songArtist = document.getElementById("one").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
        console.log(allLyrics);
    })

    
}




// for (let i = 0; i < allArray.length; i++) {
//     let element = allArray[i];
//     console.log(element);
// //     var songTitle = element.title;
// //     for(let i = 0; i < songTitle.length; i++){
// //         console.log(songTitle);
// //     }  
// }