$(document).ready(function() {

    $(".magnific").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true 
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

});
 
