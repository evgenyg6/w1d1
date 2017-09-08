var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

printPlaylists: function () {

  console.log("TEST - printPlaylists")

  for (i in this.playlists){
      var currPl = this.playlists[i]; //reference to current playlist in object this
      var len = currPl.tracks.length; //returns tracks array length
      console.log(currPl.id + ": " + currPl.name + " - " + len + " tracks");
  }

},

//printPlaylists(); //test

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function () {

  console.log("TEST - printTracks");

    for(i in this.tracks){
      var currTr = this.tracks[i];
      console.log(currTr.id + ": " + currTr.name + " by " + currTr.artist + " (" + currTr.album + " )");

    }

},
//printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

 printPlaylist: function (playlistId) {
  console.log("TEST - printPlaylist");

  for(i in this.playlists){
    var currPl = this.playlists[i];

    if(playlistId != currPl.id)
      continue;

    var len = currPl.tracks.length; //returns tracks array length
    console.log(currPl.id + ": " + currPl.name + " - " + len + " tracks");

    for (tr in currPl.tracks)
      var trr = currPl.tracks[tr];
      var track_obj = this.tracks[trr];
      console.log(track_obj.id + ": " + track_obj.name + " by " + track_obj.artist + " (" + track_obj.album + " )" );

  }

},
//printPlaylist("p01");

// adds an existing track to an existing playlist

 addTrackToPlaylist: function (trackId, playlistId) {

  this.playlists[playlistId].tracks.push(trackId); //pushes trackId into a playlist
  //console.log(this.playlists.p02);  test
},
//addTrackToPlaylist("t02", "p02");

// generates a unique id
// (use this for addTrack and addPlaylist)

uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


// adds a track to the this

addTrack: function (name, artist, album) {

  var newId = this.uid();

  this.tracks[newId] = {id: newId, name: name, artist: artist, album: album};
  //console.log(this.tracks); test
},
//addTrack();

// adds a playlist to the this

addPlaylist: function (name) {

  var newId = this.uid();

  this.playlists[newId] = {id: newId, name: name, tracks: []};

},
//addPlaylist("Test");
//console.log(this.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

printSearchResults: function(query) {

},
}
