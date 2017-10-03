var myRandomMarioCols = ["red", "blue", "yellow", "green"];

$(color-mix).find("h1").each(function(){
    var $ltr = $(this),
    text = $ltr.text(),
    len = text.length,
    randomLen = myRandomMarioCols.length,
    newCont = " ";
    
    for (var i=0; i<len; i++){
        newCont += "<h1 style='color'=:"+ myRandomMarioCols[i%randomLen] + "'>" + text.charAt(i) + "</h1>";
    }
    
    $ltr.html(newCont);
});