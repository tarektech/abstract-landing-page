const buttons = document.querySelector('.button-one');
const open_closed = document.querySelector('.opened-closed');

    buttons.addEventListener('click',() =>{
        const currentState = buttons.getAttribute('aria-expanded');
        if(!currentState || currentState === 'false'){
            buttons.setAttribute('aria-expanded' ,'true');
            open_closed.style.display = 'flex';
        }
        else{
            buttons.setAttribute('aria-expanded' ,'false');
            open_closed.style.display = 'none';
        }
    });
