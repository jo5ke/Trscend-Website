$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");

// what is the video src
var $videoSrc = $("#video").attr("src");

// when the modal is opened autoplay it
$('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" );
})


// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
$("#video").attr('src',$videoSrc);
})


// document ready
});
