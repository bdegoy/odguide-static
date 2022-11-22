/** 
* projet O-DGuide
* qrc-reader.js
* 
* Lecture d'un QR-Code et navigation vers la séquence.
* 
* [002s] [static1] Version pour site statique.
* On utilise les QR-Codes standard de O-DGuide. 
* Il faut donc faire abstraction de l'hôte de l’URL scannée et intégrer les paramètres lang et audiolangue dans la réponse. 
* Voir : le document odg_html_2_applications.
* 
* Nécessite HTML5 QR Code.
* Voir :  
* https://github.com/mebjas/html5-qrcode
* https://blog.minhazav.dev/HTML5-QR-Code-scanning-launched-v1.0.1/     
*
* A minifier avec https://jscompress.com/
* 
* Auteur : B.Degoy
* Tous droits réservés
* Copyright (c) 2022 i-Tego
*/ 

$(document).ready(function() {

    $('#loader').show();
    const html5QrCode = new Html5Qrcode("reader");

    Html5Qrcode.getCameras().then(devices => {

        if (devices && devices.length) {

            $('#loader').hide();
            html5QrCode.start(
                { facingMode: "environment" },    
                {fps: 5,},
                onScanSuccess,
                onScanFailure
            )

            function onScanSuccess(qrMessage) {
                var demande = window.location;
                // [static1] générer une URL relative avec les paramètres
                var lang = get_static_parameters(demande)[1];   
                var audiolangue = get_static_parameters(demande)[2];
                // la réponse est un chemin relatif du type <dir>/<qHex>-<lang>-<audiolangue>.html
                var dirqhex = parse_url(qrMessage)["path"];  // exemple : odguide-static/q884d...
                var reponse = dirqhex + '-' + lang + '-' + audiolangue + '.html';
                // redirection
                $(location).attr('href',reponse);    
            }

            function onScanFailure(error) {                                          
                // échec provisoire, continuer...
                //console.warn('Code scan error = ${error}');
                //$("#message").addClass("alert alert-danger").text(error);
            }

            $("#stop_camera").click(function() {
                html5QrCode.stop();
                // échec de la lecture? rediriger l'utilisateur.
                //$(location).attr('href','/spip.php?page=sequence-liste');    // liste des séquences
                $(location).attr('href',action_suivante);    // passer à la séquence suivante
            });

        } else {
            // Pas de caméra, ou la caméra est occupée par une autre application
            $('#loader').hide();
            $("#message").addClass("alert alert-danger").text(camera_absente);
        }

    }).catch(err => {
        // Erreur
        $('#loader').hide();
        $("#message").addClass("alert alert-danger").text(camera_erreur);

    });

});


/** [static][002s]
* Extrait les paramètres de la demande au format HTML statique.
* Exemple :
*   pour https://bdegoy.github.io/odguide-static/scn-<lang>-<audiolangue>.html
*   lang = get_static_parameters(url)[1];
*   audiolangue = get_static_parameters(url)[2];
* @param url
*/                                                                           
function get_static_parameters(url) {
    var path = parse_url(url);
    if ( path.endsWith(".html") ) {
        var path = path['path'].slice(0, -5);    // supprimer '.html'    
    }
    var file = path.split("/").pop();        //[static2] ne retenir que la fin du chemin
    var path_parts = file.split(('-'));    
    return path_parts; 
}

/**
* @see: https://blog.shevarezo.fr/post/2015/08/21/comment-parser-url-jquery-javascript 
* @param url
* @returns {Array}
*/
function parse_url(url) {
    // Création d'un <a> contenant l'URL à parser
    var a = $('<a>', {
        href: url
    });

    var aurl = [];
    aurl['scheme'] = a.prop('protocol');
    aurl['host'] = a.prop('hostname');
    aurl['path'] = a.prop('pathname');
    aurl['query'] = a.prop('search');
    aurl['fragment'] = a.prop('hash');
     
    return aurl;
}
