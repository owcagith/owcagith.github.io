/* Clock script */

    function clock() {
        var data = new Date();
        var godzina = data.getHours();
        var min = data.getMinutes();
        var sek = data.getSeconds();
        var obecnie = godzina+ ":" + min + ":" + sek;
        document.getElementById("clock").innerHTML = obecnie;
        setTimeout("clock()", 1000); }
    clock();

/* Aos script link */

    AOS.init();
