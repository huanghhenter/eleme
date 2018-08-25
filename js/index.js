// 购物车隐藏
$('.gap-max').hide()

// var myScroll;
window.onload = function() {
    $('.nav li').click(function() {
        $(this).addClass('highlight');
        $(this).siblings().removeClass('highlight');
        // $('.details').addClass('reveal')
        var _linkTo = $(this).attr('link');

       $('.jsCont[cont="'+_linkTo+'"]').removeClass('reveal').siblings('.jsCont').addClass('reveal');
        if (_linkTo == "review") {
            myScroll = new iScroll('ass-inner');
        }
    });
}


$('.fork').click(function() {
    $('.opacity').addClass('reveal')
});

var myScroll;
var myScroll2;
function loaded() {
    myScroll = new iScroll('wrapper_inner');
    myScroll2 = new iScroll('wrapper_right_inner');

    // myScroll = new iScroll('maintitle');
}

document.addEventListener('touchmove',
function(e) {
    e.preventDefault();
},
false);

document.addEventListener('DOMContentLoaded',
function() {
    setTimeout(loaded, 200);
},
false);

function _gettpl(tplName, data) {
    return _.template($('#' + tplName).html())(data);
}
function init() {

    $('#js-head').html(_gettpl('js-head-text', {
        'data': data
    }));

    $('#scroller-js').html(_gettpl('scroller-js-text', {
        'data': data
    }));
    $('#js-main').html(_gettpl('js-main-text', {
        'data': data
    }));
    $('#js-observer').html(_gettpl('js-observer-text', {
        'data': data
    }));
    bindEvent();
};
function bindEvent() {
    $('.js_foodtypelist li').click(function(){
        var _index = $(this).index();

        myScroll2.scrollToElement('#goods_' + _index);
    });
    $('.notice').click(function() {
        $('.opacity').removeClass('reveal');
        // $('.artical').hide()
    });

}
init();　

// details 滚动

$('.js-title li').click(function() {
    // event.preventDefault();
    $('.details').removeClass('reveal');
    $('.jsCont').addClass('reveal');
    $('header').addClass('reveal');
    $('.nav').addClass('reveal');
    var datas = {};
    var str5 = "";
    var id = $(this).attr('id');
    for (var i = 0; i < data.goods.length; i++) {
        for (var j = 0; j < data.goods[i].foods.length; j++) {
            if (id == data.goods[i].foods[j].id) {
                datas = data.goods[i].foods[j];
                str5 += ' <div class="hea">'+'<div class="revert">'+'<span>'+'返回'+'</span>' +'</div>'+ '<img src="' + datas.image + '">' + '</div>' + '<div class="select">' + '<div class="bb">' + datas.name + '</div>' + '<div class="sp">' + '<span class="sale">' + '月售' + datas.sellCount + '份' + '</span>' + '<span class="praise">' + '好评率' + datas.rating + '</span>' + '</div>' + '<div class="prix">' + '<span class="now">' + '¥' + datas.price + '</span>' + '<span class="forme">' + datas.oldPrice + '</span>' + '<span class="join">加入购物车</span>' + '</div>' + '</div>' + '<div class="blank"></div>' + '<div class="shin">' + '<div class="si">' + '商品介绍' + '</div>' + '<div class="content">' + datas.info + '</div>' + '</div>' + '<div class="blank"></div>' + '<div class="evalution">' + '<div class="el">商品评价</div>' + '<div class="block">' + '<span class="first">全部<span>57</span></span>' + '<span class="second">推荐<span>41</span></span>' + '<span class="third">吐槽<span>10</span></span>' + '</div>' + '</div>' + '<div class="bingo">' + '<img src="/images/66.jpg">' + '<div>只看有内容的评价</div>' + '</div>' + '<div id="scoller-custom" style="position:relative;">' + '<div id="incustom" style = "overflow:hidden;">' + '<div class="custom-main">';
                for (var n = 0; n < data.goods[i].foods[j].ratings.length; n++) {
                    str5 += '<div class="custom-comment">' + '<div class="time">' + datas.ratings[n].rateTime + '</div>' + ' <div class="account">' + '<div class="number">' + datas.ratings[n].username + ' </div>' + '<div class="head">' + '<img src="' + datas.ratings[n].avatar + '">' + '</div>' + '</div>' + '<div class="comment">' + '<img src="images/77.jpg">' + ' <span>' + datas.ratings[n].text + '</span>' + '</div>' + '</div>'
                    // +'</div>'
                    // +'</div>'
                    // +'</div>'
                }
                str5 += '</div>' + '</div>' + '</div>'
            }

        }
    }

    $('.details').empty().append(str5);
    var highla = ($(window).height() - 1606) + 'px';
    $('#incustom').css('height', highla);
    myScroll = new iScroll('incustom');

})
// 返回键
$(document).on("click", ".revert", function(){
    $('.details').addClass('reveal');
    $('header,.artical, .nav').removeClass('reveal');

})
// 阻止冒泡
$('.three').click(function() {
    event.stopPropagation();
})

$('.reduce').click(function() {
    // $('.details').addClass('reveal');
    $('.shopping,.term').addClass('yell');
    $(this).siblings().removeClass('reveal');
    var con = Number($(this).prev().text());
    con += 1;
    var meals = con * Number($(this).parent().prev().children('.need').text());
    $('.money').text("¥" + meals);
    $(this).prev().text(con);
    if (con >= 1) {
        $('footer').addClass('haven');

    }

    $('.shopping span').removeClass('reveal');
    var num = Number($('.shopping span').text());
    num += 1;
    $('.shopping span').text(num)

});
$('footer').click(function() {
    if ($('footer').hasClass('haven')) {
        $('.gap-max').toggle();
    }

})

$('.js-gap').click(function(){
    $('.gap-max').hide();
});
$('.plus').click(function() {
    var ircon = Number($(this).next().text());
    ircon = ircon - 1;
    $(this).next().text(ircon);
    var meals = ircon * Number($(this).parent().prev().children('.need').text());
    $('.money').text("¥" + meals);
    if (ircon < 1) {
        $(this).addClass('reveal');
        $(this).next().addClass('reveal');
        $('footer').removeClass('haven');
    }
    var insnum = Number($('.shopping span').text());
    insnum = insnum - 1;
    $('.shopping span').text(insnum);
    if (insnum < 1) {
        $('.shopping span').addClass('reveal');
        $('.shopping,.term').removeClass('yell');
    }

})

$('.empty').click(function() {
    var $jsCar = $('#js-car');
    $jsCar.find('li').remove();
    $('.plus').addClass('reveal');
    $('.gap-max').hide();
    $('footer').removeClass('haven');
    $('.count').text(0);
    $('.count').addClass('reveal');
    $('.shopping span').text(0).addClass('reveal');
    $('.shopping,.term').removeClass('yell');
});
$('.status').click(function() {
    $('.love img:first').addClass('reveal');
    $('.love img:last').removeClass('reveal');
})

// 滚动事件
var hei;
var heis = $(window).height();
var heig = Number(268 + 94 + 100);

hei = heis - heig;

hei = hei + "px";
$('#wrapper_inner, #wrapper_right_inner').css('height', hei);

var hig;
var hight = $(window).height();
var higs = Number(268 + 94 + 100 + 483);
hig = hight - higs;
hig = hig + "px";
$('#ass-inner').css('height', hig);

// $('.siderbar li').click(function(){
//  var sc=$(this).index();
//    var ll=$('.title')
//    for(var i=0;i<ll.length;i++){
//     if(sc=i){
//        myScroll = new iScroll('#wrapper',{
//        snap:'ll[i]'
//     });
//     }
//    }
// })
// var cartdata = {};//用于存放用户选择的商品
// cartdata = {
//   'good_0_food_1': {
//     'name':'dfjds',
//     'price':323,
//     'num': 2
//     'id':'good_0_food_1'
//   },
//   'good_0_food_2':{},
//   'good_0_food_3':{},
// };
// cartdata['good_0_food_1']
// if(cartdata[ids]) {
//   cartdata[ids].num = cartdata[ids].num + 1;
// }else {
//   var food = {
//     'name':'dfjds',
//     'price':323,
//     'num': 2
//     'id':'good_0_food_1'
//   }
//   cartdata[food.id] = food;
// }

// 同步到购物车的数据

$('.reduce').click(function() {
    //需要添加到购物车商品的id
    var str = "";
    var nn = Number($(this).prev().text());
    var ids = $(this).parents('li').attr('id');

    var inCart = false;
    $('#js-car li').each(function() {
        var idss = $(this).attr('id');

        if (ids == idss) {
            inCart = true;
            // var amount = Number($(this).find('.amount').text()) ;
            // amount+= 1;
            $(this).find('.amount').empty().text(nn);
        }

    })

    if (!inCart) { //不在购物车的情况
        var names = {};
        for (var i = 0; i < data.goods.length; i++) {
            for (var j = 0; j < data.goods[i].foods.length; j++) {
                if (ids == data.goods[i].foods[j].id) {
                    names = data.goods[i].foods[j];

                    str += '<li class="menu1" id="' + names.id + '">' + '<div class="menu">' + '<div class="mena">' + '<span class="greens">' + names.name + ' </span>' + ' <div class="mon">' + '<span class="sign">¥</span>' + '<span class="catalog">' + names.price + '</span>' + '</div>' + '</div>' + ' <div class="ben">' + '<img src="images/3.jpg" class="decrease">' + '<span class="amount">' + nn + '</span>' + '<img src="images/4.jpg" class="ad">' + '</div>' + '</div>' + '</li>';

                }

            }

        }
        $('.jsrr').empty();
        $('#js-car').append(str);

    }
    // 购物车插入滚动  
    var maxlog = $('#js-car').height();
    if (maxlog == log) {
        myScroll = new iScroll('outcar');

    }
})



// 购物车插入滚动
var log = ($(window).height() - 100) + 'px';

$('#outcar').css('max-height', log);

// 代理事件
$(document).on("click", ".ad", function() {
    var _id = $(this).parents('li').attr('id');
    var co = Number($(this).prev().text());
    co += 1;
    $(this).prev().text(co);
    $('.js-title li').each(function() {
        var $this = $(this);
        var idd = $this.attr('id');
        if (_id == idd) {
            $(this).find('.count').text(co)
        }
    });
});

$(document).on("click", ".gap", function() {
    
});

// 代理事件
$(document).on("click", ".decrease", function() {
    var _id = $(this).parents('li').attr('id');
    var co = Number($(this).next().text());
    co = co - 1;
    $(this).next().text(co);
    if (co <= 0) {
        $(this).parents('li').remove();
        $('#js-car li ').each(function() {
            var long = $('#js-car li').length;
            if (long = 0) {
                $('.gap-max').hide();
            }
        });

    }
    $('.js-title li').each(function() {
        var $this = $(this);
        var idd = $this.attr('id');
        if (_id == idd) {
            $(this).find('.count').text(co)
        }
    });
});
