//                                       Header Animation

let nav = document.querySelector('.nav');

window.addEventListener('scroll',() => {
 if(window.scrollY > 930){
     nav.classList.add('anim-nav');
 } else {
     nav.classList.remove('anim-nav');
 }
// console.log("Hello");
})



// Anim click

window.addEventListener('click', (e) => {
    // console.log(e);

    const rond = document.createElement('div');
    rond.className = 'clickAnim';
    rond.style.top = `${e.pageY - 25}px`;
    rond.style.left = `${e.pageX - 25}px`;
    document.body.appendChild(rond);

    setTimeout(() => {
        rond.remove();
    }, 1500)
})





