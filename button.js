// 插入按钮
var $button=$("<button id='btn__getInfo'>获取信息</button>")
$("body").append($button)

// 检查是否可以获取信息
const checkShop = function () {
  //throw error 
  // setTimeout(()=>{
  //   checkShop()
  // },1000)
  return true
}

// 获取店铺ID
const getCanonical = function () {
  // 纯js这样写，要是jquery的话 就方便多了 rurl = $("link[rel=canonical]").attr("href");
  var rurl = "";
  var links = document.getElementsByTagName("link");
  var link = {};
  for(var i=0;i<links.length;i++){
      link = links[i];
      if(link.rel === "canonical"){
          rurl = link.href;
          break;
      }
  }
  if (rurl) {
    return rurl.split('shop/')[1]
  } else {
    return ''
  }
}

// 获取店铺名称
const getShopName = function () {
  var nameList = document.getElementsByClassName('shop-name')[0]
  var nameResult = nameList.innerText && nameList.innerText.split(' ')[0]
  return nameResult
}
// 获取点评信息
const getCommit = function () {
  var commit = {}
  commit.reviewCount = $('#reviewCount')[0] && $('#reviewCount')[0].innerText
  commit.avgPriceTitle = $('#avgPriceTitle')[0] && $('#avgPriceTitle')[0].innerText
  commit.comment_score = $('#comment_score')[0] && $('#comment_score')[0].innerText
  commit.summary = $('.content')[0] && $('.content')[0].innerText
  commit.submit = $('.comment-filter-box')[0] && $('.comment-filter-box')[0].innerText
  return commit
}

// 获取基础信息
const getPoiPhone = function () {
  var baseInfo = {}
  baseInfo.address = $('.address')[1] && $('.address')[1].innerText
  baseInfo.tel = $('.tel')[0] && $('.tel')[0].innerText
  baseInfo.infoTime = document.getElementsByClassName('info-indent')[0] && document.getElementsByClassName('info-indent')[0].innerText
  baseInfo.intro = document.getElementsByClassName('info-indent')[2] && document.getElementsByClassName('info-indent')[2].innerText
  baseInfo.poi = $('#map')[0] && $('#map')[0].innerHTML.split('|')[1].split('"')[0]
  return baseInfo
}

$('#btn__getInfo').on('click',function(){
  let shopInfo = {}
  checkShop()
  shopInfo.canonical = getCanonical()
  shopInfo.shopName = getShopName()
  shopInfo.commit = getCommit()
  shopInfo.poiPhone = getPoiPhone()
  console.warn(shopInfo)
})