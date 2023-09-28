//Expand List

$(document).ready(function() {
    
    $('.item').hide();


    $('#toggleButton').click(function() {
        $('.item').toggle(500);
    });
});

//Animate element

$(document).ready(function() {
    var isOnLeft = true;


    $('#animateButton').click(function() {
        var $animatedText = $('#animatedText');
        var containerWidth = $('.container').width();
        
        if (isOnLeft) {
            $animatedText.css('left', containerWidth - $animatedText.width());
        } else {
            $animatedText.css('left', 0);
        }

        isOnLeft = !isOnLeft; 
    });
});
