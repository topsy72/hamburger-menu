var menus = document.getElementsByClassName('ham-menu');
[].forEach.call(menus, function(m){
    m.addEventListener('click', function(){
        m.classList.toggle('open');
    });
});