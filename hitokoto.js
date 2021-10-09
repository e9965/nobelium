import {tify, sify} from 'chinese-conv';
fetch('https://v1.hitokoto.cn')
    .then(function (res){
        return res.json();
    })
    .then(function (data) {
        var hitokoto = document.getElementById('yy520');
        hitokoto.innerText = "「 " + tify(data.hitokoto) + " 」";
    })
    .catch(function (err) {
        console.error(err);
    });