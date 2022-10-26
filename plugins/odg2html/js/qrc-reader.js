/** 
* projet O-DGuide
* qrc-reader.js
* 
* Lecture d'un QR-Code et navigation vers la séquence.
* 
* [002s] 
* [static] réintégrer les paramètres lang et audiolangue à l’URL scannée
* 
* Nécessite HTML5 QR Code.
* Voir :  
* https://github.com/mebjas/html5-qrcode
* https://blog.minhazav.dev/HTML5-QR-Code-scanning-launched-v1.0.1/
*
* Minifié avec https://jscompress.com/
* 
* Auteur : B.Degoy
* Tous droits réservés
* Copyright (c) 2021 DnC
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
                var lang = get_static_parameters(demande)[1];   
                var audiolangue = get_static_parameters(demande)[2];
                // La réponse est du type : https://<host>/<qHex>-<lang>-<audiolangue>.html
                var reponse = qrMessage + '-' + lang + '-' + audiolangue + '.html';
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

//[static] 

/**
* Extrait les paramètres de la demande au format HTML statique.
* Exemple https://odguide.io/scn-<lang>-<audiolangue>.html
* lang = get_static_parameters(url)[1];
* audiolangue = get_static_parameters(url)[2];
* @param url
*/
function get_static_parameters(url) {
    var path = parse_url(url);
    var thepath = path['path'].slice(0, -5);    // supprimer '.html'
    var path_parts = thepath.split(('-'));  
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
