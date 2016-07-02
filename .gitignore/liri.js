// // Include all  NPM packages
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");

// twitter cred
var client = new twitter({
  consumer_key: 'lp13rUDMPuCGfrKuyayRaGeu6',
  consumer_secret: 'IWNWtRRf3pPWDN3cRWz58yUpik5LdMzfKnF5FBNaWVgu0W3cMM',
  access_token_key: '4702434110-7O182CgiKXvKR71k2e7TnU0cXqwpIZ0T6QPkWfX',
  access_token_secret: '6xeRIUOx24hFkIpfxcwMSr7xhXfSDLGN7ot9dd7dROMzI'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

// making tweet on Twitter 
client.post('statuses/update', {status: 'Hi There!'},  function(error, tweet, response){
  // if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});

// Retweet the same post
var tweetId = '1';
client.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});

// Take in the command line arguments
var nodeArgs = process.argv;
 
 // Acessing spotigy 
var spotify = require('spotify');


var trackname = "track:" + trackname;
// Then we use the package to search for the track
spotify.search({type: 'track', query: trackname }, function(err, data) {

  // If there is an error log it.
  if(err) {
    console.log('Error occurred: ' + err);
        return;
  }

  // If there is no error... then print out the spotify track data. 
  console.log(data);
});

// base query url :  https://api.spotify.com/v1/search?query=?&offset=20&limit=20&type=track
// for loop and json parsing
for (var i=0; i<data.tracks.items.length; i++) {
            for (var j=0; j<data.tracks.items[i].artists.length; j++) {
              outToBoth("artist #" + (j+1) + ": " + data.tracks.items[i].artists[j].name);
            };
            outToBoth("song name: " + data.tracks.items[i].name);
            outToBoth("preview link: " + data.tracks.items[i].preview_url);
            outToBoth("album: " + data.tracks.items[i].album.name);
            outToBoth(" ");
          }

        } else {
          outToBoth('Error occurred:' + err);
        }
      };

    } else {
    // if use did not provie a param (i.e., specify a song) then program defaults to "what's my age again" by blink 182
      outToBoth("\"what's my age again\" by blink 182");
    };

