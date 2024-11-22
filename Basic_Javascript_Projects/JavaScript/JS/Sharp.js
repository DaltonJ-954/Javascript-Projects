var greeting = console.log("Hello World!");
print(greeting);

var items = $('body').getElementByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup pl-video-edit-remove yt-uix-tooltip");
function deleteWL(i) {
    setInterval(function() {
    items[i].click();
    }, 500);
}
for (var i = 0; i < 1; i++) 
deleteWL(i);
