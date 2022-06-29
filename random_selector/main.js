let foodImages = [ "random_selector/ramen.jpg",
"random_selector/pasta.jpg",
"random_selector/hp.jpg"];

$(function(){
    console.log("Yo");
    $("input").on("click",function(){
        // alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",foodImages[randomChildNumber]);
        // if (randomChildNumber =0) {
        //     $("img").attr("src","ramen.jpg")
        // } else if (randomChildNumber =1) {
        //     $("img").attr("src","pasta.jpg")
        // } else {
        //     $("img").attr("src","hp.jpg")   
        // } 
    });
});