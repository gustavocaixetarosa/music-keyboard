const pianoKeys = document.querySelectorAll('.piano-keys .key');

const volumeSlider = document.querySelector('.volume-slider input');

const keyCheck = document.querySelector('.keys-check input');

let audio = new Audio('tunes');

let mappedKeys = [];


const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150);
}

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key))
    mappedKeys.push(key.dataset.key)
})

document.addEventListener('keydown', (event) => {

    if(mappedKeys.includes(event.key)){
        playTune(event.key)
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value / 100;
}

volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

keyCheck.addEventListener('click', showHideKeys)