/* Clock script */

    function zegar() {
        var data = new Date();
        var godzina = data.getHours();
        var min = data.getMinutes();
        var sek = data.getSeconds();
        var obecnie = ""+godzina+
        ((min<10)?":0":":")+min+
        ((sek<10)?":0":":")+sek;
        document.getElementById("clock").innerHTML = obecnie;
        setTimeout("zegar()", 1000); }
        zegar();

/* Aos script link */

    AOS.init();
