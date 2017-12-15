window.onload = function () {
    var hot = document.querySelector(".hot");
    var date = [
        {
            "img": "hot1.jpg",
            "href": "textdetails.html",
            "dt": " 科技成就闪耀 Galaxy Note8正式登陆中国",
            "dd": "2017年9月13日，三星电子在北京751 D-PARK 79罐召开了主题为“用Note8创造”的Galaxy Note8新品上市发布会。作为三星Galaxy Note系列的最新产品，Galaxy Note8一经发布便成为业界备受...",
            "time": " 2017-9-14"
        },
        {
            "img": "r1.png",
            "href": "textdetails.html",
            "dt": "谷歌Pixel 2有望搭载HTC U11的“挤一挤”功能 ",
            "dd": "据外媒PhoneArena报道，Google应用程序的最新测试版本已经被反编译，在代码中可以看到一些字样，这些线索表明，Pixel 2将使用HTC U11上的挤压手势。",
            "time": " 2017-9-14"
        },
        {
            "img": "r2.png",
            "href": "textdetails.html",
            "dt": " 索尼新旗舰XZ1国行版现身，5000元你会买吗",
            "dd": "现在，索尼中国官网已经放出Xperia XZ1的宣传页面，暗示Xperia XZ1国行版即将登场。但比较遗憾的是，我们在官网并没有看到国行版小屏旗舰Xperia XZ1 Compact。",
            "time": " 2017-9-14"
        },
        {
            "img": "r3.png",
            "href": "textdetails.html",
            "dt": " HTC Ocean Master/Lite/Harmony三款新机曝光",
            "dd": "2今天，网友陳御銘发布的最新推文曝光了Ocean Master、Ocean Lite以及Ocean Harmony三款设备，其中前两款手机有望在今年11月份发布，而后者有望在今年12月份发布。",
            "time": " 2017-9-14"
        },
        {
            "img": "r4.png",
            "href": "textdetails.html",
            "dt": " iphone：听说有人模仿我的“刘海”",
            "dd": "iPhone X长的好不好看，只能说是见仁见智了，但那个塞下一堆传感器的“刘海儿”已经成功引起了人们的注意。",
            "time": " 2017-9-14"
        },
        {
            "img": "r5.png",
            "href": "textdetails.html",
            "dt": " 难怪如此先进，苹果3D感知5年前就动工了",
            "dd": "苹果的每一项运用到 iPhone 的技术都会规划很久， 3 年前发布搭载 A8 芯片的 iPhone 6 时，苹果就已经在开发 A11 仿生芯片了。",
            "time": " 2017-9-14"
        },
        {
            "img": "r6.png",
            "href": "textdetails.html",
            "dt": " ios 11 暂不支持Apple Pay Cash等未来升级",
            "dd": "苹果今天确认，iOS 11和 watchOS 4正式版暂不支持 Apple Pay Cash 功能，这项功能会在未来以升级补丁的形式加入 iOS 11 和 watchOS 4。",
            "time": " 2017-9-14"
        },
        {
            "img": "r7.png",
            "href": "textdetails.html",
            "dt": " 不追全面屏，曝诺基亚AMOLED无边框屏幕",
            "dd": "根据诺记吧爆料，诺基亚9将很大可能采用曲面AMOLED无边框或超窄边框屏幕，背面3D玻璃设计",
            "time": " 2017-9-14"
        }
        //{
        //    "img": "r8.png",
        //    "href": "#",
        //    "dt": " 苹果公司将iPhone屏幕更换价格提高了20美元",
        //    "dd": "苹果公司还没有宣布iPhone X屏幕更换费用，但是该公司已经表示，它将为iPhone X提供AppleCare +服务，价格200美元。",
        //    "time": " 2017-9-14"
        //},
        //{
        //    "img": "r9.png",
        //    "href": "#",
        //    "dt": " 取消Home键，革自己的命：苹果公司是这样做的",
        //    "dd": "苹果今秋发布了首款没有Home键的iPhone——iPhone X，当然这不是一蹴而就的。这么多年里苹果一直在为取消Home键做准备。那么今天就让我们来看看苹果是如何一步步让Home键隐形的。",
        //    "time": " 2017-9-14"
        //},
        //{
        //    "img": "r10.png",
        //    "href": "#",
        //    "dt": " 魅蓝Note 6孔雀青来了：开售时间9月20号揭晓",
        //    "dd": "魅蓝Note 6是上个月23日发布的一款千元旗舰，该机公布之时就有四个版本：曜石黑、皓月银、香槟金、孔雀青。目前皓月银、香槟金、香槟金和曜石黑已经陆续开卖，但是呼声最高的孔雀青却迟迟未露面。",
        //    "time": " 2017-9-14"
        //},


    ];
    for (i = 0; i < date.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "item clearfix";
        newDiv.innerHTML = '<i class="img-area"><img src="img/' + date[i].img + '"></i>' +
            '<dl class="txt-area">' +
            '<dt><a href="' + date[i].href + '">' + date[i].dt + '</a></dt>' +
            '<dd><p class="des">' + date[i].dd + '</p>' +
            '<p class="info"><i class="time">' + date[i].time + '</i></p>' +
            '</dd>' +
            '</dl>';
        hot.appendChild(newDiv);

    }

};
