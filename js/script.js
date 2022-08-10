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
            bottom: { enabled: true, height: 180 },
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






// today date

