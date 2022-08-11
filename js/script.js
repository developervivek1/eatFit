window.onload = function () {
    var myPane = new CupertinoPane(
      '.cupertino-pane', // Pane container selector
      { 
        parentElement: 'body', // Parent container
        upperThanTop: true,
        buttonDestroy: false,
        backdrop: true,
        breaks: {
            top:{ enabled: true, height: 670, bounce: true },
            middle: { enabled: true, height: 450, bounce: true },
            bottom: { enabled: false, height: 180 },
        },
        // onDrag: () => console.log('Drag event'),
        onBackdropTap: () => {
          console.log('onBackdropTap');
          myPane.moveToBreak('bottom');
          myPane.backdrop({show: false});
        },
        onTransitionEnd: () => {
          if (myPane.currentBreak() === 'bottom') {
            myPane.backdrop({show: false});
          } else {
            myPane.backdrop({show: true});
          }
        },
        // onDragEnd: () => {
        //   if (myPane.currentBreak() === 'bottom') {
        //     myPane.backdrop({show: false});
        //   } else {
        //     myPane.backdrop({show: true});
        //   }
        // },
      }
    );
    myPane.present({animate: true}).then(res => {
      console.log('present')
    });
};






// tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();