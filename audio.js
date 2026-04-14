const maxCharacters = 10000;
const url = "http://api.voicerss.org/";
const apikey = "b51f8e9858da4f79ad4dbb14f6206fc8";

const toolLongError = 'Text exceeds 10000 character maximum.';
const whitespaceError = 'Text must contain text character other than empty spaces';

const buildUrl = (str) => `${url}?key=${apikey}&src=${str}&f=48khz_16bit_stereo`;
const tooLong = (str) => str.length >= maxCharacters;

// Hello -> ['H', 'e', 'l', 'l', 'o']
// '    ' -> [' ', ' ', ' ', '\n']
// function to test an emty str
const emptyString = (str) => str.split('').every(_char => _char === ' ' || _char === '\n');

const playBtn =() => document.getElementById('play-btn');
const textInput = () => document.getElementById('text-input');
const appContainer = () => document.getElementById('app-container');
const errorMessage = () => document.getElementById('error-message');

const listenerFn = (event) => {
    if(event.target.value || event.type === 'paste')
        playBtn().disabled = false;
    else
        playBtn().disabled = true;
}

playBtn().addEventListener('click', () => {
    //clearError()

    if(!emptyString(textInput().value) && !tooLong(textInput().value))
        console.log('go ahead and send');
    else
        displayErrorMsg(textInput().value)

});

document.addEventListener('DOMContentLoaded', () => {
    //center vertically
    const containerHeight = appContainer().clientHeight;
    const docHeight = window.innerHeight;
    appContainer().style.marginTop = `${docHeight/2 - containerHeight/2 -25}px`;
    textInput().addEventListener('keyup', listenerFn);
    textInput().addEventListener('paste', listenerFn);
});