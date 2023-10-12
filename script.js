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

$(document).ready(function() {
    var currentImage = 0;
    var totalImages = $('.slideshow-image').length;


    $('.slideshow-image:first').show();

    function displayImage() {
        $('.slideshow-image').hide();
        $('.slideshow-image:eq(' + currentImage + ')').fadeIn();
    }

    $('#nextButton').click(function() {
        currentImage = (currentImage + 1) % totalImages;
        displayImage();
    });

    $('#prevButton').click(function() {
        currentImage = (currentImage - 1 + totalImages) % totalImages;
        displayImage();
    });
});
