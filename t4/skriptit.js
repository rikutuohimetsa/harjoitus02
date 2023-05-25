function getAlbumit() {
    $.get("https://itunes.apple.com/lookup/?id=1472380750&entity=album", function(data, status){
        const albumit = JSON.parse(data);
        console.log(albumit);
        
        for (var key in albumit){
            for (var key1 in albumit[key]) {
                luoHTML(albumit[key][key1]);
            }
        }
    });

}

function luoHTML(albumi) {
    if (albumi.collectionType != "Album") return;
    let card = "<div class=\"col-12 col-lg-3 \">" +
               "<div class=\"card h-100\" >" +
                   `<img class=\"card-img-top\" src=\"${albumi.artworkUrl100.replace("100x100bb", "1024x1024bb")}\" alt=\"${albumi.collectionName}\">` +
                   "<div class=\"card-body\">" +
                       `<h5 class=\"card-title\">${albumi.collectionName}</h5>` +
                   "</div>" +
               "</div>"+ 
           "</div> ";
    $("#albumrow").append(card);
}