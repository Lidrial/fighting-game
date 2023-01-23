const controlsButton = document.querySelector('.controls-button');

const controls = document.querySelector('.controls');


const noDisplay = 'no-display';

function display(){
    if (controls.classList.contains(noDisplay)){
        controls.classList.remove(noDisplay);
        console.log('remove');
    }else{
        controls.classList.add(noDisplay);
        console.log('add');
    }
}

controlsButton.addEventListener("click", display);