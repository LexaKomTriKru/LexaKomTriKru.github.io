//<![CDATA[
$(document).ready(function(){

  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_N",
    cssSelectorAncestor: "#jp_container_N"
  }, [
    {
      title:"Euphoria Theme of LOVE YOURSELF 起 Wonder",
      artist:"BTS",
      m4v:"video/BTS (방탄소년단) 'Euphoria _ Theme of LOVE YOURSELF 起 Wonder'.mp4"
    },{
      title:"FAKE LOVE",
      artist:"BTS",
      m4v:"video/BTS (방탄소년단) 'FAKE LOVE' Official MV.mp4"
    },{
      title:"IDOL",
      artist:"BTS",
      m4v:"video/BTS (방탄소년단) 'IDOL' Official MV.mp4"
    },{
      title:"LOVE YOURSELF 承 Her 'Serendipity' Comeback Trailer",
      artist:"BTS",
      m4v:"video/BTS (방탄소년단) LOVE YOURSELF 承 Her 'Serendipity' Comeback Trailer.mp4"
    },{
      title:"LOVE YOURSELF 結 Answer 'Epiphany' Comeback Trailer",
      artist:"BTS",
      m4v:"video/BTS (방탄소년단) LOVE YOURSELF 結 Answer 'Epiphany' Comeback Trailer.mp4"
    },{
      title:"'MIC Drop (Steve Aoki Remix)' Official MV",
      artist:"BTS",
      m4v:"video/BTS (방탄소년단) 'MIC Drop (Steve Aoki Remix)' Official MV.mp4"
    },{
      title:"'봄날 (Spring Day)' Official MV",
      artist:"BTS",
      m4v:"video/BTS (방탄소년단) '봄날 (Spring Day)' Official MV.mp4"
    },{
      title:"Батареи",
      artist:"Нервы",
      m4v:"video/Нервы - Батареи.mp4"
    },{
      title:"Кофе мой друг",
      artist:"Нервы",
      m4v:"video/Нервы - Кофе мой друг.mp4"
    },{
      title:"ЛАМПАМИ",
      artist:"Нервы",
      m4v:"video/НЕРВЫ - ЛАМПАМИ.mp4"
    },
  ], {
    playlistOptions: {
      enableRemoveControls: true
    },
    swfPath: "swf/",
    supplied: "webmv, ogv, m4v, oga, mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true
  });

  // The remove commands

  $("#playlist-remove").click(function() {
    myPlaylist.remove();
  });

  $("#playlist-remove--2").click(function() {
    myPlaylist.remove(-2);
  });
  $("#playlist-remove--1").click(function() {
    myPlaylist.remove(-1);
  });
  $("#playlist-remove-0").click(function() {
    myPlaylist.remove(0);
  });
  $("#playlist-remove-1").click(function() {
    myPlaylist.remove(1);
  });
  $("#playlist-remove-2").click(function() {
    myPlaylist.remove(2);
  });

  // The shuffle commands

  $("#playlist-shuffle").click(function() {
    myPlaylist.shuffle();
  });

  $("#playlist-shuffle-false").click(function() {
    myPlaylist.shuffle(false);
  });
  $("#playlist-shuffle-true").click(function() {
    myPlaylist.shuffle(true);
  });

  // The select commands

  $("#playlist-select--2").click(function() {
    myPlaylist.select(-2);
  });
  $("#playlist-select--1").click(function() {
    myPlaylist.select(-1);
  });
  $("#playlist-select-0").click(function() {
    myPlaylist.select(0);
  });
  $("#playlist-select-1").click(function() {
    myPlaylist.select(1);
  });
  $("#playlist-select-2").click(function() {
    myPlaylist.select(2);
  });

  // The next/previous commands

  $("#playlist-next").click(function() {
    myPlaylist.next();
  });
  $("#playlist-previous").click(function() {
    myPlaylist.previous();
  });

  // The play commands

  $("#playlist-play").click(function() {
    myPlaylist.play();
  });

  $("#playlist-play--2").click(function() {
    myPlaylist.play(-2);
  });
  $("#playlist-play--1").click(function() {
    myPlaylist.play(-1);
  });
  $("#playlist-play-0").click(function() {
    myPlaylist.play(0);
  });
  $("#playlist-play-1").click(function() {
    myPlaylist.play(1);
  });
  $("#playlist-play-2").click(function() {
    myPlaylist.play(2);
  });

  // The pause command

  $("#playlist-pause").click(function() {
    myPlaylist.pause();
  });

  // Changing the playlist options

  // Option: autoPlay

  $("#playlist-option-autoPlay-true").click(function() {
    myPlaylist.option("autoPlay", true);
  });
  $("#playlist-option-autoPlay-false").click(function() {
    myPlaylist.option("autoPlay", false);
  });

  // Option: enableRemoveControls

  $("#playlist-option-enableRemoveControls-true").click(function() {
    myPlaylist.option("enableRemoveControls", true);
  });
  $("#playlist-option-enableRemoveControls-false").click(function() {
    myPlaylist.option("enableRemoveControls", false);
  });

  // Option: displayTime

  $("#playlist-option-displayTime-0").click(function() {
    myPlaylist.option("displayTime", 0);
  });
  $("#playlist-option-displayTime-fast").click(function() {
    myPlaylist.option("displayTime", "fast");
  });
  $("#playlist-option-displayTime-slow").click(function() {
    myPlaylist.option("displayTime", "slow");
  });
  $("#playlist-option-displayTime-2000").click(function() {
    myPlaylist.option("displayTime", 2000);
  });

  // Option: addTime

  $("#playlist-option-addTime-0").click(function() {
    myPlaylist.option("addTime", 0);
  });
  $("#playlist-option-addTime-fast").click(function() {
    myPlaylist.option("addTime", "fast");
  });
  $("#playlist-option-addTime-slow").click(function() {
    myPlaylist.option("addTime", "slow");
  });
  $("#playlist-option-addTime-2000").click(function() {
    myPlaylist.option("addTime", 2000);
  });

  // Option: removeTime

  $("#playlist-option-removeTime-0").click(function() {
    myPlaylist.option("removeTime", 0);
  });
  $("#playlist-option-removeTime-fast").click(function() {
    myPlaylist.option("removeTime", "fast");
  });
  $("#playlist-option-removeTime-slow").click(function() {
    myPlaylist.option("removeTime", "slow");
  });
  $("#playlist-option-removeTime-2000").click(function() {
    myPlaylist.option("removeTime", 2000);
  });

  // Option: shuffleTime

  $("#playlist-option-shuffleTime-0").click(function() {
    myPlaylist.option("shuffleTime", 0);
  });
  $("#playlist-option-shuffleTime-fast").click(function() {
    myPlaylist.option("shuffleTime", "fast");
  });
  $("#playlist-option-shuffleTime-slow").click(function() {
    myPlaylist.option("shuffleTime", "slow");
  });
  $("#playlist-option-shuffleTime-2000").click(function() {
    myPlaylist.option("shuffleTime", 2000);
  });

  // AVOID COMMANDS

  $("#playlist-avoid-1").click(function() {
    myPlaylist.remove(2); // Removes the 3rd item
    myPlaylist.remove(3); // Ignored unless removeTime=0: Where it removes the 4th item, which was originally the 5th item.
  });


});
//]]>