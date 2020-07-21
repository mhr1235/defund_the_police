// don't use new Array(3), just use []
var i, images = [];
// use push, don't manually assign the index
images.push("images/image_1.jpg");
images.push("images/image_2.jpg");
images.push("images/image_3.jpg");
images.push("images/image_4.jpg");
images.push("images/image_5.jpg");
images.push("images/image_6.jpg");
images.push("images/image_7.jpg");
images.push("images/image_8.jpg");
images.push("images/image_9.jpg");
images.push("images/image_10.jpg");
images.push("images/image_11.jpg");
images.push("images/image_12.jpg");
//just add more images to creeate a larger pool

images.sort(function ()
{
    return 0.5 - Math.random();
});



for (var i = 0; i < 9; i++){


document.getElementsByClassName('captcha-image')[i].innerHTML = "<img src='"+images[i]+"'>";
console.log(images[i]);

}

  
   // document.getElementsByClassName("captcha-image").innerHTML = "<img src='images/image_1.jpg'>";
    //querySelector('.captcha-image').innerHTML = "<img src='images/image_1.jpg'>";
   // document.querySelectorAll('.captcha-image').innerHTML ="Hello World";