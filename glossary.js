$(document).ready(function() { //code to change the color of the h1 and h2 text when clicked or hovered.
    $('.botanic').hide();
    $('h1, h2').mouseover(function() {
        $(this).css('color', 'blue');
    }).mouseout(function() {
        $(this).css('color', 'darkgreen'); 
    });

$('.flower').click(function() {
    $('.botanic').hide();
    $(this).find('.botanic').show();
});
           $('.flower').click(function() {
   
    $('.botanic').hide();
    $(this).children('.botanic').show();
});
//code to show the code when the mouse is hovering over the flower word.
$('.pic').hover(
    function(evt) {

        const flowerId = $(this).attr('title'); 
                const imgDivSelector = $('#' + flowerId);
        const imgDiv = $(imgDivSelector);

        let x = evt.pageX + 150;
        let y = evt.pageY; 
        
    
        imgDiv.css({
            top: y + 10 + 'px', 
            left:x + 'px' 
        }).show(); 
    },
    //code to hide the image of the flowers when not hovering over the word.
    function() {
        const flowerId = $(this).attr('title');
        const imgDivSelector= "#" + flowerId;
        $(imgDivSelector).hide();
    }
);
     $('.botanic').hide();
    $('.imgdiv').hide();
    $(document).keypress(function(event) {
        const keyPressed = String.fromCharCode(event.which).toLowerCase();
        const firstFlower = $('.flower').filter(function() {
            return $(this).text().trim().toLowerCase().startsWith(keyPressed);
        }).first(); 
        if (firstFlower.length) {
           
            window.location.hash = '#' + keyPressed; 
            $('html, body').animate({
                scrollTop: firstFlower.offset().top
            }, 500); 
        }
        });
});