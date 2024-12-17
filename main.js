document.addEventListener('DOMContentLoaded', function () {
    let blocks = document.querySelectorAll('.but-top');
    function checkBlocksVisibility() {
        blocks.forEach(block => {
            if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            }
            else {
                block.style.opacity = "0";
                block.style.transform = "translateY(100px)";
            }
        });
    }
    checkBlocksVisibility();
    window.addEventListener('scroll', function () {
        checkBlocksVisibility();
    });
    let mask = document.getElementById('mask')
    window.addEventListener('load', q)
    function q() {
        mask.classList.add('hide')
        setTimeout(o, 600)
    }
    function o() {
        mask.remove()
    }
});
function show() {
    var modal = document.getElementById('myMadal');
    modal.style.display = 'flex';
    var modal1 = document.getElementById('cl');
    modal1.style.display = 'block';
    var modal2 = document.getElementById('sh');
    modal2.style.display = 'none';
}
function clos() {
    var modal = document.getElementById('myMadal');
    modal.style.display = 'none';
    var modal1 = document.getElementById('cl');
    modal1.style.display = 'none';
    var modal2 = document.getElementById('sh');
    modal2.style.display = 'block';
}
function showmarket() {
    var modal = document.getElementById('items');
    modal.style.height = '0px'
    modal.style.transition = '0.5s ease-in-out'
    modal.style.height = '620px'
    var modal1 = document.getElementById('clo');
    modal1.style.display = 'block';
    var modal2 = document.getElementById('sho');
    modal2.style.display = 'none';
}
function closemarket() {
    var modal = document.getElementById('items');
    modal.style.height = '620px'
    modal.style.transition = '0.5s ease-in-out'
    modal.style.height = '0px'
    var modal1 = document.getElementById('clo');
    modal1.style.display = 'none';
    var modal2 = document.getElementById('sho');
    modal2.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function () {
    let searchi = document.getElementById('s1');
    let searchis = document.getElementById('s');
    let modal = document.getElementById('myMadal');
    searchi.onmouseover = function () {
        modal.style.display = 'none';
        var modal1 = document.getElementById('cl');
        modal1.style.display = 'none';
        var modal2 = document.getElementById('sh');
        modal2.style.display = 'block';
    }
    searchis.onmouseover = function () {
        modal.style.display = 'none';
        var modal1 = document.getElementById('cl');
        modal1.style.display = 'none';
        var modal2 = document.getElementById('sh');
        modal2.style.display = 'block';
    }
})
function darkMod() {
    var white = document.getElementById('s');
    var white1 = document.getElementById('s1');
    var white2 = document.getElementById('s2');
    var white3 = document.getElementById('s3');
    var white4 = document.getElementById('s4');
    var whitet = document.getElementById('t');
    var whiteh = document.getElementById('hi');
    var whitee = document.getElementById('he');
    var whitei = document.getElementById('items');
    white.classList.toggle('dark');
    white1.classList.toggle('dark');
    white2.classList.toggle('dark');
    white3.classList.toggle('dark');
    white4.classList.toggle('dark');
    whitet.classList.toggle('dark');
    whiteh.classList.toggle('dark');
    whitee.classList.toggle('dark');
    whitei.classList.toggle('dark');
    if (white.classList.contains('dark')) {
        document.querySelector('.theme').innerText = 'Светлая тема'
    }
    else {
        document.querySelector('.theme').innerText = 'Темная тема'
    }
}