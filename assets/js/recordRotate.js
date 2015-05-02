/*
this rotates the record for 30 secs, the 
length of each snippet provided by iTunes
*/

$(document).ready(function () {

    $('.waves-effect').click(function () {
        $('.record').stop(true, true).rotate({
            count: 30,
            forceJS: true
        });
    });

	$('.waves-effect.stop').click(function () {
    	$('.record').stop(true, true)
    });  
});
