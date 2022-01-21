var socket = io();

socket.on('GoNext', function(){
    pop_up.classList.remove('active');
});

const clouse_pop_up = document.getElementById('clouse_pop_up');
const pop_up =  document.getElementById('pop_up');
const buttonclouse_pop_up = document.getElementById('buttonclouse_pop_up');
const pop_up_on = document.getElementById('login');

clouse_pop_up.addEventListener('click',  function(e){
    e.preventDefault();
    let log = document.getElementById("login").value;
    let pas = document.getElementById("password").value;
    let offical = document.getElementById("offical").value;
    let msLogIn = [log,pas,offical];
    socket.emit('logIn',msLogIn);
});

buttonclouse_pop_up.addEventListener('click',  function(e){
    e.preventDefault();
    pop_up.classList.remove('active');
});

pop_up_on.addEventListener('click',  function(e){
    e.preventDefault();
    pop_up.classList.add('active');
});

const m2 = document.getElementById('m2');
const m4 = document.getElementById('m4');
const history = document.getElementById('history');
const tour = document.getElementById('tour');
const kon = document.getElementById('kon');

history.addEventListener('click', function(e){
    e.preventDefault();
    m2.scrollIntoView();
});

kon.addEventListener('click', function(e){
    e.preventDefault();
    m4.scrollIntoView();
});



