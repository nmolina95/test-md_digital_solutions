window.addEventListener('load', () => {
    
    const PLAY_BUTTON = document.getElementById('play-button');
    const MODAL = document.getElementById('modal');

    switchModal(PLAY_BUTTON);
    switchModal(MODAL);

    /*====== Show/Hide modal ======*/
    function switchModal(e){
        e.addEventListener('click',() =>{
            MODAL.classList.toggle('modal');
            MODAL.classList.toggle('modal-on');
        })
    }
})