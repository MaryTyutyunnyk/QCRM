window.setInterval(function () {
    let bgImg =
            [
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg'
            ],
        bgImgName = Math.floor(Math.random() * bgImg.length),
        bodyBg = document.getElementById('bodyBg');

    bodyBg.style.backgroundImage = 'url(' + bgImg[bgImgName] + ')';
}, 4000);



