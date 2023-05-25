function getAlbums() {
    let url = "https://itunes.apple.com/lookup/?id=1472380750&entity=album";
    $.get(url, function(data, status){
        if (status != "success") {
            console.log(`Error getting ${url}`);
            return;
        }
        const albums = JSON.parse(data);
        
        for (var key in albums){
            for (var key1 in albums[key]) {
                addCard(albums[key][key1]);
            }
        }
    });

}

function addCard(album) {
    if (album.collectionType != "Album") return;
    let card = "<div class=\"col-12 col-lg-3 \">" +
               "<div class=\"card h-100\" >" +
                   `<img class=\"card-img-top\" src=\"${album.artworkUrl100.replace("100x100bb", "1024x1024bb")}\" alt=\"${album.collectionName}\">` +
                   "<div class=\"card-body\">" +
                       `<h5 class=\"card-title\">${album.collectionName}</h5>` +
                   "</div>" +
               "</div>"+ 
           "</div> ";
    $("#albumrow").append(card);
}