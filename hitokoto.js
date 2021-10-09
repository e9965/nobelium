fetch('https://v1.hitokoto.cn')
    .then(function (res){
        return res.json();
    })
    .then(function (data) {
        var hitokoto = document.getElementById('yy520');
        hitokoto.innerText = "「 " + data.hitokoto + " 」";
    })
    .catch(function (err) {
        console.error(err);
    });
