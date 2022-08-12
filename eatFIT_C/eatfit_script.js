const tab_btn = document.querySelectorAll('.leaderBoard .nav-item button');

tab_btn.forEach((tab,ind)=>{
  tab.addEventListener('click', function(e){
    let target = e.target.getAttribute('data-target');
    let activeBtn = e.target.closest('ul').querySelector('button.active');
    let targetBtn = e.target;
    let activeCon = e.target.closest('.leaderBoard').querySelector('.tab-content .tab-pane.active');
    let targetCon = e.target.closest('.leaderBoard').querySelector(`.tab-content ${target}`);
    let activeCon2 = e.target.closest('body').querySelector('.main-text .tab-content .tab-pane.active');
    let targetCon2 = e.target.closest('body').querySelector(`.main-text .tab-content ${target}`);
    if(!targetBtn.classList.contains('active')){
      targetBtn.classList.add('active');
      activeBtn.classList.remove('active');
      activeCon.classList.remove('active');
      targetCon.classList.add('active');
      activeCon2.classList.remove('active');
      targetCon2.classList.add('active');
    }
  })
})


  window.onload = function () {
    var myPane = new CupertinoPane(
      '.cupertino-pane', 
      { 
        parentElement: 'body', 
        upperThanTop: true,
        buttonDestroy: false,
        backdrop: true,
        breaks: {
            top:{ enabled: true, height: 600, bounce: false },
            middle: { enabled: true, height: 380, bounce: false },
            bottom: { enabled: false, height: 180 },
        },
      
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
        
      }
    );
    myPane.present({animate: true}).then(res => {
      console.log('present')
    });
};