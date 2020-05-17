

function run() {

    var artist = (document.getElementById("artistName").value).toLowerCase();
    var limit = document.getElementById("limit").value;


    $.ajax({
        url: 'https://itunes.apple.com/search?term=' + encodeURIComponent(artist) + "&limit=" + limit,
        dataType: "json",
        success: process
    });
}

function process(data) {
    console.log(data);

    var explicit = document.getElementsByName("profanity").value;

    var songs = data.results;
    var o = "";

    var rowtracker;

    if(songs.length <= 0) {
        o += "<tr class='wrongInput'>Something went wrong, please make sure all inputs have been filled and try again.</tr>"
    }

    for(var p = 0; p < songs.length; p++) {
                o += "<tr><td>";
                o += "<img src='" + songs[p].artworkUrl100 + "'>";
                o += "</td><td>";
                o += "Song: " + songs[p].trackName;
                o += "<br>";
                o += "By: " + songs[p].artistName;
                o += "</td><td>";
                o += "Track is " + songs[p].trackExplicitness;
                o += "</td><td>";
                o += "Album: " + songs[p].collectionName;
                o += "</td><td>";
                o += "rank: " + (p + 1);
                o += "</td><td>";
                o += "<audio controls='true' src=" + songs[p].previewUrl + " id='audio' type='audio/m4a'></audio>";
                o += "</td></tr>";
            }

    var table = document.getElementById("output");
    table.innerHTML = o;
    table.style.display = "block";
}
