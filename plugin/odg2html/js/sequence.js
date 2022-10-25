/** 
* projet O-DGuide
* sequence.js
* 
* Rendu de la séquence : navigation et vitesse.
* JS compagnon de /content/sequence.html et head_js/sequence.html.
* 
* [002y] 2021/12/05 - l'objet audio peut ne pas être un HTML5 tag et avoir été 
* défini par document.createElement('audio')
* 
* Minifié avec https://jscompress.com/
* 
* Auteur : B.Degoy https://degoy.com
* Tous droits réservés
* Copyright (c) 2020 DnC
* 
* Auteur : B.Degoy https://i-tego.com
* [002aa] Enchaînement automatique si enchainement = 'oui'.
* [002ab] Généraliser l'application de preventDefault.
* [002ba] 2022/05/30 - collapse n'est pas une fonction.
*  
* Copyright (c) 2021-2022 i-Tego
*/ 

$(document).ready(function(){

    // Séquence suivante / précédente
    $("#btn_Prev").click(function(event) {
        event.preventDefault();
        var action = $(this).data("action");
        $(location).attr('href',action);
    });

    $("#btn_Next").click(function(event) {
        event.preventDefault();
        var action = $(this).data("action");
        $(location).attr('href',action);    
    });

    
    //[002y] Définition de audio
    try { 
        // Un objet audiocontrol a-t-il été défini par document.createElement('audio') ?
        var audio = audiocontrol;        
    } catch (error){
    // sinon, il doit avoir été défini comme élément audio HTML5. //[002u2] cela ne devrait plus se produire 
        var audio = document.getElementById("audiocontrol");    
    }
    
    // Vitesse de lecture
    
    var speed = Cookies.get('speed');
    if ( !speed ) speed = 1;
    setspeed(speed);

    var $btnplus = $('#btn_Plus');
    var $btnnormal = $('#btn_Normal');
    var $btnmoins = $('#btn_Moins');
    if ( speed >= 1.45 ) $btnplus.prop( "disabled", true ).css('background','silver');
    if ( speed <= .57 ) $btnmoins.prop( "disabled", true ).css('background','silver');
    var $speeddialog = $('#speeddialog');

    $btnplus.on("click", function(event) {
        event.preventDefault();
        speed *= 1.2;
        if ( speed >= 1.45 ) {
            $btnplus.prop( "disabled", true ).css('background','silver');
            speed = 1.45
        }
        $('.vitesselecture #btn_Normal').prop( "disabled", false ).css('background','white');
        setspeed(speed);    
    });

    $btnnormal.on("click", function(event) {
        event.preventDefault();
        speed = 1;
        $btnplus.prop( "disabled", false ).css('background','white');
        $btnmoins.prop( "disabled", false ).css('background','white');
        setspeed(speed);
    });

    $btnmoins.on("click", function(event) {
        event.preventDefault();
        speed /= 1.2;
        if ( speed <= .57 ) {
            $btnmoins.prop( "disabled", true ).css('background','silver');
            speed = .57;
        }
        $btnplus.prop( "disabled", false ).css('background','white');
        setspeed(speed);      
    });

    function setspeed(speed) {
        audio.playbackRate= speed;
        Cookies.set('speed', speed);    
        ds = Math.round(speed * 10) / 10;
        $('#displayspeed').text(ds);  
    }


    /*  Lancement à partir d'un objet de classe vitesselecture.
        Par exemple l'entrée de menu "Vitesse de lecture" avec la classe .vitesselecture
    */
    $('.vitesselecture').on('click', function(event) {      

        event.preventDefault();

        //[002ba] pour éviter que le menu chevauche la popup
        //$('.navbar-collapse').collapse('toggle');
        $('.navbar-collapse').removeClass('show');   //[002ba']

        $('#speeddialog').dialog({
            modal: true, 
            title: STR_VITESSE_LECTURE, 
            autoOpen: true,
            width: 'auto',
            buttons: [
                {
                    text: "Ok",
                    //icon: "ui-icon-heart",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ]
        });
    });
    
    
    //[002aa] Enchainement automatique sur la séquence suivante
    try{
        if ( auto === 'oui') {
            audio.addEventListener('ended', (event) => {
                var action = $("#btn_Next").data("action");
                $(location).attr('href',action);    
            });
        }
    } catch(error){};

});                                                         
