/** 
* projet O-DGuide
* mapresponsive.js
* 
* Map responsive sur le background de back-layer
* Compatible avec Bootstrap fit-image qui centre horizontalement l'image dans le div et l'étend verticalement.
* Minifié avec https://jscompress.com/
* 
* Usage :
* Positionnement de zone interactive : les area sont décrites dans la zone HTML de façon classique, par exemple :
* <map name="backgroundmap">     // l'image doit comprendre l'attribut usemap="#backgroundmap".
* <area id='area1' shape="rect" coords="100,100 200,200" href="s1">
* <area id='area2' shape="rect" coords="200,200 300,300" href="s3">
* ...
* </map>
* 
* Auteur : B.Degoy https://degoy.com
* Tous droits réservés
* Copyright (c) 2020 DnC
*/ 

//[002u1] Ce script figure maintenant dans le fichier script.js du template.

var initialWidth, initialHeight;
var backgroundWidth, backgroundHeight;


$(document).on('ready', function(){

    var map;
    if (  map = document.getElementById('backgroundmap') ) {   //[002u3] l'id backgroundmap est nécessaire.

        var img = $('#background');

        backgroundWidth = img.width();
        backgroundHeight = img.height();

        // Mesurer les dimensions de l'image originale
        getNaturalImageSize(img, function(width, height){
            initialWidth = width;
            initialHeight = height;
            // Nota : c'est un callback, on effectue maintenant la suite des traitements  
            resizeMap(img)

        }); 

        
        // Recaler les areas et créer les div .area
        function resizeMap(img) {

            // saisir les coordonnées 
            var n,
            areas = map.getElementsByTagName('area'),
            len = areas.length,
            coords = [];
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }

            // fit-image étend l'image pour remplir verticalement #background 
            var n, m, clen;
            var ratio = backgroundHeight / initialHeight;
            // fit-image centre horizontalement : calculer la rognure du bord gauche
            var cropX = ( initialWidth * ratio - backgroundWidth)/2  ;
            // recaler les areas et créer des divs
            for (n = 0; n < len; n++) {
                clen = coords[n].length;
                for (m = 0; m < clen; m++) {
                    if (m % 2 === 0)  
                        coords[n][m] = coords[n][m] * ratio - cropX;   // retrancher l'abscisse du bord gauche
                    else
                        coords[n][m] *= ratio;   // y
                }
                // recaler les areas
                areas[n].coords = coords[n].join(',');
                // et créer des divs (petit carré blanc) pour les matérialiser
                var elementDiv = $('<div class="area"></div>')
                //.css({position: 'absolute', left: coords[n][0], top: coords[n][1]})
                //.width(coords[n][2]-coords[n][0])
                //.height(coords[n][3]-coords[n][1]);
                .css({position: 'absolute', left: coords[n][0]+(coords[n][2]-coords[n][0])/2, top: coords[n][1]+8})
                .width(8)
                .height(8).
                css('background-color','white');
                $(".backg").append(elementDiv);
            }

            // Hover sur les div .area
            $(".area").hover(
                function(){
                    $(this).css("border", "1px solid white");
                }, 
                function(){
                    $(this).css("border", "none");
                }
            );

            return true;
        }   

        // https://stackoverflow.com/questions/23390393/get-image-height-before-its-fully-loaded
        function getNaturalImageSize(img, callback) {
            var $img = $(img);   // provoque le chargement de l'image
            var wait = setInterval(function() {   // on attend que l'image soit chargée
                var w = $img[0].naturalWidth,
                h = $img[0].naturalHeight;
                if (w && h) {
                    clearInterval(wait);
                    callback.apply(this, [w, h]);
                }
                }, 30);
        }


    }


});
