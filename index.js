const toggle = document.querySelector('.toggle');
const icon = document.querySelectorAll('.icon')
const draggable = document.querySelector('.draggable')
const nav = document.querySelector('.nav')

toggle.onclick = e => {
  toggle.classList.toggle('active');
  icon.forEach(i => {
    i.classList.toggle('active');
  })
}

let shiftX = 0;
let shiftY = 0;

function onMouseMove (e) {
  let x = e.pageX;
  let y = e.pageY;
  draggable.style.left = `${x}px`;
  draggable.style.top = `${y}px`;
}

nav.onmousedown = function(e){
  shiftX = e.pageX - nav.getBoundingClientRect().left;
  shiftY = e.pageY - nav.getBoundingClientRect().top;

  onMouseMove(e)

  document.addEventListener('mousemove', onMouseMove)

  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    nav.onmouseup = null;
  }
}

nav.ondragstart = function() {
  return false;
}