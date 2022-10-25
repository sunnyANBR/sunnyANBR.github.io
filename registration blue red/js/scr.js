const devider = document.querySelector('.modal_devider'),
      modal = document.querySelector('.modal'),
      modalBlock = document.querySelector('.modal_block');

devider.addEventListener('click', e => {
    if(e.target.tagName == 'BUTTON') {
        modal.classList.toggle('first_yellow');
        devider.classList.toggle('second_yellow');
        modalBlock.classList.toggle('modal_block_left');
    }
});