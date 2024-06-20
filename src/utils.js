const openDefaultBrowser = function (url) {
  var exec = require('child_process').exec;
  switch (process.platform) {
    case "darwin":
      exec('open ' + url);
      break;
    case "win32":
      exec('start ' + url);
      break;
    default:
      exec('xdg-open', [url]);
  }
}

let citylist = [
	{
		"title": "辽宁",
		"dataIndex": "ln"
	},
	{
		"title": "辽宁沈阳",
		"dataIndex": "lnsy"
	},
	{
		"title": "辽宁大连",
		"dataIndex": "lndl"
	},
	{
		"title": "辽宁鞍山",
		"dataIndex": "lnas"
	},
	{
		"title": "辽宁抚顺",
		"dataIndex": "lnfs"
	},
	{
		"title": "吉林",
		"dataIndex": "jl"
	},
	{
		"title": "吉林长春",
		"dataIndex": "jlcc"
	},
	{
		"title": "吉林四平",
		"dataIndex": "jlsp"
	},
	{
		"title": "吉林辽源",
		"dataIndex": "jlly"
	},
	{
		"title": "吉林通化",
		"dataIndex": "jlth"
	},
	{
		"title": "吉林松原",
		"dataIndex": "jlsy"
	},
	{
		"title": "吉林延边",
		"dataIndex": "jlyb"
	},
	{
		"title": "黑龙江",
		"dataIndex": "hlj"
	},
	{
		"title": "黑龙江哈尔滨",
		"dataIndex": "hljheb"
	},
	{
		"title": "黑龙江鹤岗",
		"dataIndex": "hljhg"
	},
	{
		"title": "黑龙江鸡西",
		"dataIndex": "hljjx"
	},
	{
		"title": "黑龙江大庆",
		"dataIndex": "hljdq"
	},
	{
		"title": "河北",
		"dataIndex": "hb"
	},
	{
		"title": "河北石家庄",
		"dataIndex": "hbsjz"
	},
	{
		"title": "河北唐山",
		"dataIndex": "hbts"
	},
	{
		"title": "河北邯郸",
		"dataIndex": "hbhd"
	},
	{
		"title": "河北秦皇岛",
		"dataIndex": "hbqhd"
	},
	{
		"title": "河北邢台",
		"dataIndex": "hbxt"
	},
	{
		"title": "河北保定",
		"dataIndex": "hbbd"
	},
	{
		"title": "河北张家口",
		"dataIndex": "hbzjk"
	},
	{
		"title": "河北承德",
		"dataIndex": "hbcd"
	},
	{
		"title": "河北沧州",
		"dataIndex": "hbcz"
	},
	{
		"title": "河北廊坊",
		"dataIndex": "hblf"
	},
	{
		"title": "河北衡水",
		"dataIndex": "hbhs"
	},
	{
		"title": "陕西",
		"dataIndex": "sx"
	},
	{
		"title": "陕西西安",
		"dataIndex": "sxxa"
	},
	{
		"title": "陕西铜川",
		"dataIndex": "sxtc"
	},
	{
		"title": "陕西宝鸡",
		"dataIndex": "sxbj"
	},
	{
		"title": "陕西咸阳",
		"dataIndex": "sxxy"
	},
	{
		"title": "陕西渭南",
		"dataIndex": "sxwn"
	},
	{
		"title": "陕西汉中",
		"dataIndex": "sxhz"
	},
	{
		"title": "陕西榆林",
		"dataIndex": "sxyl"
	},
	{
		"title": "陕西安康",
		"dataIndex": "sxak"
	},
	{
		"title": "山西",
		"dataIndex": "sx"
	},
	{
		"title": "山西太原",
		"dataIndex": "sxty"
	},
	{
		"title": "山西大同",
		"dataIndex": "sxdt"
	},
	{
		"title": "山西阳泉",
		"dataIndex": "sxyq"
	},
	{
		"title": "山西长治",
		"dataIndex": "sxcz"
	},
	{
		"title": "山西晋城",
		"dataIndex": "sxjc"
	},
	{
		"title": "山西朔州",
		"dataIndex": "sxsz"
	},
	{
		"title": "山西运城",
		"dataIndex": "sxyc"
	},
	{
		"title": "山西朔州",
		"dataIndex": "sxsz"
	},
	{
		"title": "山西临沂",
		"dataIndex": "sxly"
	},
	{
		"title": "山西临汾",
		"dataIndex": "sxlf"
	},
	{
		"title": "山西吕梁",
		"dataIndex": "sxll"
	},
	{
		"title": "甘肃",
		"dataIndex": "gs"
	},
	{
		"title": "甘肃兰州",
		"dataIndex": "gslz"
	},
	{
		"title": "甘肃天水",
		"dataIndex": "gsts"
	},
	{
		"title": "甘肃酒泉",
		"dataIndex": "gsjq"
	},
	{
		"title": "甘肃陇南",
		"dataIndex": "gsln"
	},
	{
		"title": "青海",
		"dataIndex": "qh"
	},
	{
		"title": "青海西宁",
		"dataIndex": "qhxn"
	},
	{
		"title": "青海海东",
		"dataIndex": "qhhd"
	},
	{
		"title": "青海海北",
		"dataIndex": "qhhb"
	},
	{
		"title": "青海黄南",
		"dataIndex": "qhhn"
	},
	{
		"title": "青海海南",
		"dataIndex": "qhhn"
	},
	{
		"title": "青海玉树",
		"dataIndex": "qhys"
	},
	{
		"title": "山东",
		"dataIndex": "sd"
	},
	{
		"title": "山东济南",
		"dataIndex": "sdjn"
	},
	{
		"title": "山东淄博",
		"dataIndex": "sdzb"
	},
	{
		"title": "山东青岛",
		"dataIndex": "sdqd"
	},
	{
		"title": "山东枣庄",
		"dataIndex": "sdzz"
	},
	{
		"title": "山东潍坊",
		"dataIndex": "sdwf"
	},
	{
		"title": "山东济宁",
		"dataIndex": "sdjn"
	},
	{
		"title": "山东烟台",
		"dataIndex": "sdyt"
	},
	{
		"title": "山东泰安",
		"dataIndex": "sdta"
	},
	{
		"title": "山东济宁",
		"dataIndex": "sdjn"
	},
	{
		"title": "山东临沂",
		"dataIndex": "sdly"
	},
	{
		"title": "山东德州",
		"dataIndex": "sddz"
	},
	{
		"title": "山东聊城",
		"dataIndex": "sdlc"
	},
	{
		"title": "山东菏泽",
		"dataIndex": "sdhz"
	},
	{
		"title": "安徽",
		"dataIndex": "ah"
	},
	{
		"title": "安徽合肥",
		"dataIndex": "ahhf"
	},
	{
		"title": "安徽芜湖",
		"dataIndex": "ahwh"
	},
	{
		"title": "安徽马鞍山",
		"dataIndex": "ahmas"
	},
	{
		"title": "安徽淮北",
		"dataIndex": "ahhb"
	},
	{
		"title": "安徽滁州",
		"dataIndex": "ahcz"
	},
	{
		"title": "安徽阜阳",
		"dataIndex": "ahfy"
	},
	{
		"title": "江苏",
		"dataIndex": "js"
	},
	{
		"title": "江苏南京",
		"dataIndex": "jsnj"
	},
	{
		"title": "江苏无锡",
		"dataIndex": "jswx"
	},
	{
		"title": "江苏徐州",
		"dataIndex": "jsxz"
	},
	{
		"title": "江苏常州",
		"dataIndex": "jscz"
	},
	{
		"title": "江苏南通",
		"dataIndex": "jsnt"
	},
	{
		"title": "江苏苏州",
		"dataIndex": "jssz"
	},
	{
		"title": "江苏连云港",
		"dataIndex": "jslyg"
	},
	{
		"title": "江苏淮安",
		"dataIndex": "jsha"
	},
	{
		"title": "江苏盐城",
		"dataIndex": "jsyc"
	},
	{
		"title": "江苏镇江",
		"dataIndex": "jszj"
	},
	{
		"title": "江苏宿迁",
		"dataIndex": "jssq"
	},
	{
		"title": "浙江",
		"dataIndex": "zj"
	},
	{
		"title": "浙江杭州",
		"dataIndex": "zjhz"
	},
	{
		"title": "浙江宁波",
		"dataIndex": "zjnb"
	},
	{
		"title": "浙江温州",
		"dataIndex": "zjwz"
	},
	{
		"title": "浙江嘉兴",
		"dataIndex": "zjjx"
	},
	{
		"title": "浙江绍兴",
		"dataIndex": "zjsx"
	},
	{
		"title": "浙江金华",
		"dataIndex": "zjjh"
	},
	{
		"title": "浙江台州",
		"dataIndex": "zjtz"
	},
	{
		"title": "浙江丽水",
		"dataIndex": "zjls"
	},
	{
		"title": "河南",
		"dataIndex": "hn"
	},
	{
		"title": "河南郑州",
		"dataIndex": "hnzz"
	},
	{
		"title": "湖北",
		"dataIndex": "hb"
	},
	{
		"title": "湖北武汉",
		"dataIndex": "hbwh"
	},
	{
		"title": "湖北黄石",
		"dataIndex": "hbhs"
	},
	{
		"title": "湖北恩施",
		"dataIndex": "hbes"
	},
	{
		"title": "湖北荆州",
		"dataIndex": "hbjz"
	},
	{
		"title": "湖北黄冈",
		"dataIndex": "hbhg"
	},
	{
		"title": "湖北咸宁",
		"dataIndex": "hbxn"
	},
	{
		"title": "湖北随州",
		"dataIndex": "hbsz"
	},
	{
		"title": "湖南",
		"dataIndex": "hn"
	},
	{
		"title": "湖南长沙",
		"dataIndex": "hncs"
	},
	{
		"title": "湖南株洲",
		"dataIndex": "hnzz"
	},
	{
		"title": "湖南岳阳",
		"dataIndex": "hnyy"
	},
	{
		"title": "湖南常德",
		"dataIndex": "hncd"
	},
	{
		"title": "湖南怀化",
		"dataIndex": "hnhh"
	},
	{
		"title": "江西",
		"dataIndex": "jx"
	},
	{
		"title": "江西南昌",
		"dataIndex": "jxnc"
	},
	{
		"title": "江西景德镇",
		"dataIndex": "jxjdz"
	},
	{
		"title": "江西九江",
		"dataIndex": "jxjj"
	},
	{
		"title": "江西上饶",
		"dataIndex": "jxsr"
	},
	{
		"title": "福建",
		"dataIndex": "fj"
	},
	{
		"title": "福建厦门",
		"dataIndex": "fjsm"
	},
	{
		"title": "福建泉州",
		"dataIndex": "fjqz"
	},
	{
		"title": "福建莆田",
		"dataIndex": "fjpt"
	},
	{
		"title": "福建南平",
		"dataIndex": "fjnp"
	},
	{
		"title": "福建宁德",
		"dataIndex": "fjnd"
	},
	{
		"title": "云南",
		"dataIndex": "yn"
	},
	{
		"title": "海南",
		"dataIndex": "hn"
	},
	{
		"title": "四川",
		"dataIndex": "sc"
	},
	{
		"title": "贵州",
		"dataIndex": "gz"
	},
	{
		"title": "广东",
		"dataIndex": "gd"
	},
	{
		"title": "内蒙古",
		"dataIndex": "nmg"
	},
	{
		"title": "新疆",
		"dataIndex": "xj"
	},
	{
		"title": "广西",
		"dataIndex": "gx"
	},
	{
		"title": "宁夏",
		"dataIndex": "nx"
	},
	{
		"title": "宁夏银川",
		"dataIndex": "nxyc"
	},
	{
		"title": "宁夏固原",
		"dataIndex": "nxgy"
	},
	{
		"title": "宁夏中卫",
		"dataIndex": "nxzw"
	},
	{
		"title": "北京",
		"dataIndex": "bj"
	},
	{
		"title": "上海",
		"dataIndex": "sh"
	},
	{
		"title": "天津",
		"dataIndex": "tj"
	},
	{
		"title": "重庆",
		"dataIndex": "zq"
	}
]

module.exports = {
  openDefaultBrowser,
  citylist
}