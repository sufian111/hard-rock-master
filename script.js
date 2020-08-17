function searchBtn(){
    const song = document.getElementById("songName").value;
    console.log(song);
    const apiUrl='https://api.lyrics.ovh/';
    const fullUrl = apiUrl + '/suggest/' + song ;
    console.log(fullUrl);
    fetch(fullUrl)
    .then(response => response.json())
    .then(data =>     {
        function listNumberOne(){
            
        let songTitle = data.data[0].title;
        document.getElementById("a").innerText= songTitle;

        let songArtist = data.data[0].artist.name;
        document.getElementById("one").innerText= songArtist;


        }
        listNumberOne();

        function listNumberTwo(){
            let songTitle = data.data[1].title;
            document.getElementById("b").innerText= songTitle;

            let songArtist = data.data[1].artist.name;
            document.getElementById("two").innerText= songArtist;
        }
        listNumberTwo();

        function listNumberThree(){
            let songTitle = data.data[2].title;
            document.getElementById("c").innerText= songTitle;

            let songArtist = data.data[2].artist.name;
            document.getElementById("three").innerText= songArtist;
        }
        listNumberThree();
        
        function listNumberFour(){
            let songTitle = data.data[3].title;
            document.getElementById("d").innerText= songTitle;

            let songArtist = data.data[3].artist.name;
            document.getElementById("four").innerText= songArtist;
        }
        listNumberFour();


        function listNumberFive(){
            let songTitle = data.data[4].title;
            document.getElementById("e").innerText= songTitle;

            let songArtist = data.data[4].artist.name;
            document.getElementById("five").innerText= songArtist;
        }
        listNumberFive();
        

        // nowlastsix
        function listNumberSix(){
            
            let songTitle = data.data[5].title;
            document.getElementById("f").innerText= songTitle;
    
            let songArtist = data.data[5].artist.name;
            document.getElementById("six").innerText= songArtist;
    
    
            }
            listNumberSix();
    
            function listNumberSeven(){
                let songTitle = data.data[6].title;
                document.getElementById("g").innerText= songTitle;
    
                let songArtist = data.data[6].artist.name;
                document.getElementById("seven").innerText= songArtist;
            }
            listNumberSeven();
    
            function listNumberEight(){
                let songTitle = data.data[7].title;
                document.getElementById("h").innerText= songTitle;
    
                let songArtist = data.data[7].artist.name;
                document.getElementById("eight").innerText= songArtist;
            }
            listNumberEight();
            
            function listNumberNine(){
                let songTitle = data.data[8].title;
                document.getElementById("i").innerText= songTitle;
    
                let songArtist = data.data[8].artist.name;
                document.getElementById("nine").innerText= songArtist;
            }
            listNumberNine();
    
    
            function listNumberTen(){
                let songTitle = data.data[9].title;
                document.getElementById("ten").innerText= songTitle;
    
                let songArtist = data.data[9].artist.name;
                document.getElementById("ten").innerText= songArtist;
            }
            listNumberTen();



    })
}

function getLyricsOne(){
    const songTitle =  document.getElementById("a").innerText;
    var songArtist = document.getElementById("one").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

    
}


function getLyricsTwo(){
    const songTitle =  document.getElementById("b").innerText;
    var songArtist = document.getElementById("two").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

    
}


function getLyricsThree(){
    const songTitle =  document.getElementById("c").innerText;
    var songArtist = document.getElementById("three").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

    
}


function getLyricsFour(){
    const songTitle =  document.getElementById("d").innerText;
    var songArtist = document.getElementById("four").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

    
}


function getLyricsFive(){
    const songTitle =  document.getElementById("e").innerText;
    var songArtist = document.getElementById("five").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

}


// nextfive

function getLyricsSix(){
    const songTitle =  document.getElementById("f").innerText;
    var songArtist = document.getElementById("six").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

    
}


function getLyricsSeven(){
    const songTitle =  document.getElementById("g").innerText;
    var songArtist = document.getElementById("seven").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

}


function getLyricsEight(){
    const songTitle =  document.getElementById("h").innerText;
    var songArtist = document.getElementById("eight").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

    
}


function getLyricsNine(){
    const songTitle =  document.getElementById("i").innerText;
    var songArtist = document.getElementById("nine").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

    
}


function getLyricsTen(){
    const songTitle =  document.getElementById("j").innerText;
    var songArtist = document.getElementById("ten").innerText;
    const apiUrl='https://api.lyrics.ovh/';
    const lyricsUrl =  apiUrl + '/v1/' + songArtist + '/' + songTitle ;

    fetch(lyricsUrl)
    .then(response => response.json())
    .then(data =>  {
        const allLyrics = data.lyrics;
        document.getElementById("story").innerText = allLyrics; 
    })
    document.getElementById("songHeader").innerText = songTitle;

}