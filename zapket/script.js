const admins = [
    {
     id: 0,
     panel: true
    },
    {
     id: 0,
     panel: false
    }, 
    {
     id: 0,
     panel: true
    },
    {
     id: 0,
     panel: "limited"
    }
   ]


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.sideButton');
  const savedTab = localStorage.getItem('activeTab');
  if (savedTab) {
      buttons.forEach(button => {
          if (button.href.includes(savedTab)) {
              button.classList.add('clicked');
          }
      });
  }
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          buttons.forEach(btn => btn.classList.remove('clicked'));
          button.classList.add('clicked');
          localStorage.setItem('activeTab', button.href);
      });
  });
});


function animate(className, frames, dely) {
    const element = document.querySelector(`.${className}`);
    if (!element) {
        console.error(`Element with class ${className} not found.`);
        return;
    }
    let currentFrame = 0;

    function updateSVG() {
        let path = `/svgs/blooks/${frames[currentFrame]}`;
        element.src = path;
        currentFrame = (currentFrame + 1) % frames.length;
    }
    updateSVG();
    setInterval(updateSVG, dely);
}

//animate('class', ['frame1.svg', 'frame2.svg'], delyMS)

animate('computerSvg', ['computer.svg','computer2.svg'], 500)
animate('gemDragon', ['gemDragon.svg','gemDragon2.svg','gemDragon3.svg','gemDragon4.svg','gemDragon5.svg','gemDragon6.svg','gemDragon7.svg','gemDragon6.svg', 'gemDragon5.svg', 'gemDragon4.svg', 'gemDragon3.svg', 'gemDragon2.svg', 'gemDragon.svg'], 500)


//check id to admin id

