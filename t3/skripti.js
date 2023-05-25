function vaihdateksti(valittu) {
    var teksti = $(valittu).prop("name");
    $("h2").text(teksti);
} 