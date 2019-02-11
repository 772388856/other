var pub = {
    url: [
        'http://99-you.com',
        'http://wetdogbook.com'
    ],
    imagesUrl: [
        'http://b-ssl.duitang.com/uploads/item/201408/30/20140830150812_4WskV.thumb.700_0.jpeg',
        'http://b-ssl.duitang.com/uploads/item/201411/30/20141130111304_BkUJV.thumb.224_0.jpeg',
        'http://img4q.duitang.com/uploads/item/201408/16/20140816104624_sUYJe.thumb.700_0.png',
        'http://img.zcool.cn/community/011b4b56e7c1ad6ac7255885d86311.jpg@900w_1l_2o_100sh.jpg'
    ],
    from: '?from=pub',
    key: '20190211',
    setStyle: function(){
        var style = document.createElement('style'),
            sh = '';

        sh += '.pub-box-' + this.key + '{ position: fixed; top: 0; left: 0; z-index: 999999; width: 100%; height: 100%; background: #000; }';
        sh += '.pub-link-' + this.key + '{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('+ this.imagesUrl[Math.floor(Math.random()*this.imagesUrl.length)] +'); background-repeat: no-repeat; background-size: cover; background-position: center; }';
        sh += '.pub-btn-' + this.key + '{ position: fixed; top: 20px; right: 20px; z-index: 2; font-size: 16px; color: #FFF; padding: 10px 20px; background: rgba(0,0,0,.5); border-radius: 100px; box-shadow: 0 0 10px #fff; }';

        style.innerHTML = sh;

        document.querySelector('head').appendChild(style);
    },
    setHtml: function(){
        var div = document.createElement('div'),
            link = document.createElement('a'),
            btn = document.createElement('a');

        div.setAttribute('class', 'pub-box-' + this.key);
        link.setAttribute('class', 'pub-link-' + this.key);
        link.setAttribute('href', this.url[Math.floor(Math.random()*this.url.length)] + this.from);
        btn.setAttribute('class', 'pub-btn-' + this.key);
        btn.setAttribute('href', this.url[Math.floor(Math.random()*this.url.length)] + this.from + '&btn');
        btn.innerText = '4s 跳过';

        div.appendChild(link);
        div.appendChild(btn);
        document.querySelector('body').appendChild(div);
    },
    domHandle: function(){
        var timer = null,
            t = 4,
            _this = this;

        timer = setInterval(function(){
            t--;

            if(!t) {
                clearInterval(timer);
                document.querySelector('body').removeChild(document.querySelector('.pub-box-' + _this.key));
                return false;
            }

            document.querySelector('.pub-btn-' + _this.key).innerText = t + 's 跳过';
        }, 1000);
    },
    init: function(){
        var f = document.querySelector('body[from]');
        if(f) {
            this.from = '?from=' + f.getAttribute('from');
        }

        this.setStyle();
        this.setHtml();
        this.domHandle();
    }
}

window.onload = function(){
    pub.init();
}