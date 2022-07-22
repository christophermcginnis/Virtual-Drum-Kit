const bassDrum = document.querySelectorAll('#Bass');
const lowTom = document.querySelectorAll('#Low_Tom');
const snare = document.querySelectorAll('#Snare');
const highTom = document.querySelectorAll('#High_Tom');
const midTom = document.querySelectorAll('#Mid_Tom');
const closedHiHat = document.querySelectorAll('#Closed_Hihat');
const openHiHat = document.querySelectorAll('#Open_Hihat');
const halfHiHat = document.querySelectorAll('#Half_Hihat');
const ridingHiHat = document.querySelectorAll('#Riding_Hihat');
const crashHiHat = document.querySelectorAll('#Crash_Hihat');
const splashHiHat = document.querySelectorAll('#Splash_Hihat');


for (i = 0; i < bassDrum.length; i++){
  index = i;
  bassDrum[index].style.fill = 'white'
 
  bassDrum[index].addEventListener('mousedown', () => {
    bassDrum[index].style.fill = '#ededed'
    const audio = document.querySelector('[data-name="bass"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  bassDrum[index].addEventListener('mouseup', () => {
    bassDrum[index].style.fill = 'white'
    
  })
}

for (i = 0; i < snare.length; i++){
  index = i;
  snare[index].style.fill = 'white'

  snare[index].addEventListener('mousedown', () => {
    snare[index].style.fill = '#ededed'
    const audio = document.querySelector('[data-name="snare"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  snare[index].addEventListener('mouseup', () => {
    snare[index].style.fill = 'white'
  })
}

for (i = 0; i < lowTom.length; i++){
  index = i;
  lowTom[index].style.fill = 'white'

  lowTom[index].addEventListener('mousedown', () => {
    lowTom[index].style.fill = '#ededed'
    const audio = document.querySelector('[data-name="low-tom"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  lowTom[index].addEventListener('mouseup', () => {
    lowTom[index].style.fill = 'white'
  })
}

for (i = 0; i < highTom.length; i++){
  index = i;
  highTom[index].style.fill = 'white'

  highTom[index].addEventListener('mousedown', () => {
    highTom[index].style.fill = '#ededed'
    const audio = document.querySelector('[data-name="high-tom"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  highTom[index].addEventListener('mouseup', () => {
    highTom[index].style.fill = 'white'
  })

 
}

for (i = 0; i < midTom.length; i++) {
  index = i;
  midTom[index].style.fill = 'white'
  
  midTom[index].addEventListener('mousedown', () => {
    midTom[index].style.fill = '#ededed'
    const audio = document.querySelector('[data-name="mid-tom"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  midTom[index].addEventListener('mouseup', () => {
    midTom[index].style.fill = 'white'
  })
}

for (i = 0; i < closedHiHat.length; i++) {
  index = i;
  closedHiHat[index].style.fill = '#d2a47e'

  closedHiHat[index].addEventListener('mousedown', () => {
    closedHiHat[index].style.fill = '#c69e7f'
    const audio = document.querySelector('[data-name="closed-hihat"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  closedHiHat[index].addEventListener('mouseup', () => {
    closedHiHat[index].style.fill = '#d2a47e'
  })
}

for (i = 0; i < halfHiHat.length; i++){
  index = i;
 halfHiHat[index].style.fill = '#d2a47e'

  halfHiHat[index].addEventListener('mousedown', () => {
    halfHiHat[index].style.fill = '#c59d7e'
    const audio = document.querySelector('[data-name="half-hihat"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  halfHiHat[index].addEventListener('mouseup', () => {
    halfHiHat[index].style.fill = '#d2a47e'
  })
}

for (i = 0; i < openHiHat.length; i++){
  index = i;
  openHiHat[index].style.fill = '#d2a47e'

  openHiHat[index].addEventListener('mousedown', () => {
    openHiHat[index].style.fill = '#c59d7e'
    const audio = document.querySelector('[data-name="open-hihat"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  openHiHat[index].addEventListener('mouseup', () => {
    openHiHat[index].style.fill = '#d2a47e'
  })
}
for (i = 0; i < ridingHiHat.length; i++){
  index = i;
  ridingHiHat[index].style.fill = '#d2a47e'

  ridingHiHat[index].addEventListener('mousedown', () => {
    ridingHiHat[index].style.fill = '#c59d7e'
    const audio = document.querySelector('[data-name="riding-hihat"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  ridingHiHat[index].addEventListener('mouseup', () => {
    ridingHiHat[index].style.fill = '#d2a47e'
  })
}

for (i = 0; i < crashHiHat.length; i++){
  index = i;
  crashHiHat[index].style.fill = '#d2a47e'

  crashHiHat[index].addEventListener('mousedown', () => {
    crashHiHat[index].style.fill = '#c59d7e'
    const audio = document.querySelector('[data-name="crash-hihat"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  crashHiHat[index].addEventListener('mouseup', () => {
    crashHiHat[index].style.fill = '#d2a47e'
  })
}
for (i = 0; i < splashHiHat.length; i++){
  index = i;
  splashHiHat[index].style.fill = '#d2a47e'

  splashHiHat[index].addEventListener('mousedown', () => {
    splashHiHat[index].style.fill = '#c59d7e'
    const audio = document.querySelector('[data-name="splash-hihat"]')
    audio.currentTime = 0; //rewinds the start with each click
    audio.play();
  })

  splashHiHat[index].addEventListener('mouseup', () => {
    splashHiHat[index].style.fill = '#d2a47e'
  })
}