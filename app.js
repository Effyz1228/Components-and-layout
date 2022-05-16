const btns= document.querySelectorAll('.icon');

for(let btn of btns){
    const item =btn.parentElement;

    btn.addEventListener('click',()=>{
        item.classList.toggle('open');
        });
    }


    