var numImages = 21;

var images = [];

for(let a=1; a<=numImages;a++){
    images.push("images/image_"+a+".jpg");
    console.log(a);
}

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
