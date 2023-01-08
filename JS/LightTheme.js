// Theme switcher script

    var switcher = document.querySelector('.switcher');
    var bar = document.querySelector('.hamburger .bar');
    var switchelement = document.querySelector('.switch');
    var hamburger1_active = document.querySelector('.hamburger.active::before');
    var hamburger2_active = document.querySelector('.hamburger.active::after');
    var hamburger_1_active = document.querySelector('.hamburger-1.active::before')
    var hamburger_2_active = document.querySelector('.hamburger-1.active::after')
        
    switcher.addEventListener('click', () => {
        switcher.classList.toggle('active');
        menu.classList.toggle('light');
        bar.classList.toggle('light');
        general.classList.toggle('light');
        switchelement.classList.toggle('light');
        activemenu.classList.toggle('light');
        hamburger1_active.classList.toggle('light');
        hamburger2_active.classList.toggle('light');
        hamburger_1_active.classList.toggle('light');
        hamburger_2_active.classList.toggle('light');
    })

    var inf = document.querySelector('.me');
    var namespan = document.querySelector('.name span');
    var indie = document.getElementById('indie');
    var topbar = document.getElementById('top-bar');
    var themediv = document.querySelector('.theme-div'); 
    var body = document.querySelector('body')
    var menudiv = document.querySelector('.menu')
    var bottombar = document.getElementById('bottom-bar')
    var scroll = document.getElementById('scroll')
    var selfinfo = document.querySelector('.self-info');
    var progressdiv = document.getElementById('progress-div');
    var aboutme = document.querySelector('.about-me');
    var socials = document.getElementById('socials');
    var num = document.querySelector('.num');
    var num_1 = document.querySelector('.num-1');
    var num_2 = document.querySelector('.num-2');
    var num_3 = document.querySelector('.num-3');
    var mask = document.querySelector('.mask');
    var mask_1 = document.querySelector('.mask-1');
    var mask_2 = document.querySelector('.mask-2');
    var topmenu = document.querySelector('.top-menu');
    var html = document.querySelector('.html');
    var css = document.querySelector('.css');
    var js = document.querySelector('.js');
    var php = document.querySelector('.php');
    var line_1 = document.querySelector('.l1');
    var line_2 = document.querySelector('.l2');
    var line_3 = document.querySelector('.l3');
    var line_4 = document.querySelector('.l4');
    var tick_1 = document.querySelector('.tick1');
    var tick_2 = document.querySelector('.tick2');
    var tick_3 = document.querySelector('.tick3');
    var tick_4 = document.querySelector('.tick4');
    var progressbar = document.querySelector('.pb');
    var progressbar_1 = document.querySelector('.pb-1');
    var progressbar_2 = document.querySelector('.pb-2');
    var progressbar_3 = document.querySelector('.pb-3');
    var breaks = document.querySelector('.break');
    var breaks_1 = document.querySelector('.break-1');
    var informations = document.querySelector('.informations');
    var life_title = document.getElementById('life-title');
    var c_inside = document.querySelector('.c-inside');
    var c_inside_1 = document.querySelector('.c-inside-1');
    var c_inside_2 = document.querySelector('.c-inside-2');
    var c_inside_3 = document.querySelector('.c-inside-3');
    var c = document.querySelector('.c')
    var c_1 = document.querySelector('.c-1');
    var c_2 = document.querySelector('.c-2');
    var c_3 = document.querySelector('.c-3');
    var connect = document.querySelector('.connector');
    var connect_1 = document.querySelector('.connector-1');
    var connect_2 = document.querySelector('.connector-2');

    switcher.addEventListener('click', () => {
        inf.classList.toggle('light');
        namespan.classList.toggle('light');
        indie.classList.toggle('light');
        topbar.classList.toggle('light');
        themediv.classList.toggle('light');
        body.classList.toggle('light');
        menudiv.classList.toggle('light');
        bottombar.classList.toggle('light');
        scroll.classList.toggle('light')
        selfinfo.classList.toggle('light');
        progressdiv.classList.toggle('light');
        aboutme.classList.toggle('light');
        socials.classList.toggle('light');
        num.classList.toggle('light');
        num_1.classList.toggle('light');
        num_2.classList.toggle('light');
        num_3.classList.toggle('light');
        mask.classList.toggle('light');
        mask_1.classList.toggle('light');
        mask_2.classList.toggle('light');
        topmenu.classList.toggle('light');
        html.classList.toggle('light');
        css.classList.toggle('light');
        js.classList.toggle('light');
        php.classList.toggle('light');
        line_1.classList.toggle('light');
        line_2.classList.toggle('light');
        line_3.classList.toggle('light');
        line_4.classList.toggle('light');
        tick_1.classList.toggle('light');
        tick_2.classList.toggle('light');
        tick_3.classList.toggle('light');
        tick_4.classList.toggle('light');
        progressbar.classList.toggle('light');
        progressbar_1.classList.toggle('light');
        progressbar_2.classList.toggle('light');
        progressbar_3.classList.toggle('light');
        breaks.classList.toggle('light');
        breaks_1.classList.toggle('light');
        informations.classList.toggle('light');
        life_title.classList.toggle('light');
        c_inside.classList.toggle('light');
        c_inside_1.classList.toggle('light');
        c_inside_2.classList.toggle('light');
        c_inside_3.classList.toggle('light');
        c.classList.toggle('light');
        c_1.classList.toggle('light');
        c_2.classList.toggle('light');
        c_3.classList.toggle('light');
        connect.classList.toggle('light');
        connect_1.classList.toggle('light');
        connect_2.classList.toggle('light');
    });

