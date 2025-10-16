function display_random_image(){
    $(document).ready(function(){
        var imageList =[
            { src:"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",width: 240,height: 100},
            { src:"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",width: 320,height: 195},
            { src:"http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",width: 500,height: 343}
        ];
        var randomImage = imageList[Math.floor(Math.random() * imageList.length)];
        displayImage(randomImage.src,randomImage.width,randomImage.height);
    });
    function displayImage(src,width,height){
        var img = $("<img>").attr({src: src,width: width,height: height});
        $("#image-container").empty();
        $("#image-container").append(img);
    }
}