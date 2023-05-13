javascript: function main() {
    var t = '';
    var popup = document.createElement("div");
    document.body.appendChild(popup);
    popup.style.backgroundImage = "url('data:image/jpeg;base64,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')";
    popup.style.id = "dwayneTheRock";
    popup.style.backgroundRepeat = "no-repeat";
    popup.style.backgroundSize = "contain";
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.left = "20px";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.visibility = "hidden";
    
    var regex = new RegExp('\\bballs\\b', 'i');
    
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function gText(e) {
    
      await sleep(100);
      var sound = new Audio('https://www.myinstants.com/media/sounds/vine-boom.mp3');
      t = (document.all) ? document.selection.createRange().text : document.getSelection();
      
      if (regex.test(t.toString().toLowerCase())) {
        popup.style.visibility = "visible";
        sound.play();
        console.log("appear");
        await sleep(300);
        popup.style.visibility = "hidden";
        console.log("gone");
      }
    }
    document.onmouseup = gText;
    if (!document.all) document.captureEvents(Event.MOUSEUP);
    return 0;
  }
  main();
  void 0;
  