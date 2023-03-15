// pages/home/home.js
import {
  getMyAddress,
  getMyLocation,
  lglt2xyz
} from '../../request/request'
const app = getApp()
Page({
  data: {
    navBarHeight:app.globalData.navBarHeight,
    icons: [
      {
        // name: "预约功能",
        txt:"实践",
        icon:"/pages/home/icon/shijian.png",
        fillColor:"#FD8A2E",
        ontap:"gotoPlace"
        // imgUrl: "../images/icon/calendar.png"
      },

      {
        // name: "阵地地图",
        txt:"景点",
        icon:"/pages/home/icon/jingdian.png",
        fillColor:"#F25E8F",
        ontap:"gotoUp"
        // imgUrl: "../images/icon/drink.png"
      },
    
      {
        // name: "景区攻略",
        txt:"工艺",
        icon:"/pages/home/icon/gongyi.png",
        fillColor:"#F7CA4E",
        ontap:"gotoMap"
        // imgUrl: "../images/icon/map.png"
      },
      {
        // name: "掌上VR",
        txt:"VR",
        icon:"/pages/home/icon/vr.png",
        fillColor:"#D079ED",
        ontap:"onEnterARGame"
        // imgUrl: "../images/icon/diary.png"
      }
    ],
    navs: [{
			name: '扫一扫',
			src: 'https://cdn.nlark.com/yuque/0/2019/png/280373/1568102197856-assets/web-upload/0a3840c5-1699-4507-b1d8-dfbbe0683fd0.png',
			url: '../other/other'
		},
		{
			name: '酷图',
			src: 'https://cdn.nlark.com/yuque/0/2019/png/280373/1568102202109-assets/web-upload/93b53007-e782-47a2-ac84-c9ae854ed65d.png',
			url: '../other/other'
		},
		{
			name: '应用集',
			src: 'https://cdn.nlark.com/yuque/0/2019/png/280373/1568102206687-assets/web-upload/6c417267-6d87-4337-be29-7299382d0251.png',
			url: '../other/other'
		},
		{
			name: '动态',
			src: 'https://cdn.nlark.com/yuque/0/2019/png/280373/1568102210411-assets/web-upload/0dfed72c-fbe9-46d7-8ad2-15a8cab37aa9.png',
			url: '../other/other'
		}],
    article: [
      {
        title: "工业旅游简介",
        imgUrl: "../article/intro.jpg",
        link: "../article02/article02",
        content: "  工业文化旅游是伴随着产业转型优化以及人们对于旅游定义的不断更新而诞生并且成长的一种新型旅游模式。现代工业旅游起源于20世纪50年代的法国，国外提及较多的是德国工业遗迹鲁尔本工业旅游区[1]。在发达国家，较早便开始发展工业文化旅游。汽车是如何生产出来的、巧克力有哪些制作过程、啤酒是怎样酿造的……为了满足游客的好奇心和求知欲，欧美发达国家一些规模较大的企业积极发展工业旅游项目，通过开放生产车间、生产线和厂区，建造展览馆、博物馆，让游客增强对企业、科技或文创的感性认识，从而促进企业形象提升和产品销售。中国工业旅游的发展是以1990年山西杏花村汾酒集团收取参观门票作为开端[2]，并由此不断得到创新和发展。张裕是最早开启工业旅游的企业之一，每年博物馆都会迎来约30万游客，葡萄酒主题的旅游线路，一方面展示张裕葡萄酒的历史，另一方面提供具有互动性的项目和品酒等活动。工业文化旅游由此在中国开端并蓬勃发展，但是在创新的路途中还是遇到了很多阻碍。"
      },
      {
        title: "元气森林工旅基地",
        imgUrl: "../article/sample1.jpg",
        link: "../article01/article01",
        content: "  前往苏州市隆力奇养生小镇、镇江醋文化博物馆等地进行调研，调查对象是景区工作人员、景区游客、消费者、企业负责人、政府机关工作人员，计划采用问卷调查法、访谈法等，重点调查景区的营业情况、运营模式、人流量和发展策略，以及游客对景区的满意度和期望情况，企业与当地人文特色，企业落地之间异同、优劣势，景区对于“互联网+”的运用，景区“社群运营”化的可行性分析，“社群运营”灵活使用的方法探析。主要着重于苏州地区的工文旅发展，辅以江苏其他地区有代表性的优秀工文旅实地案例调研，例如南京市的南钢文化工业旅游区、太古可口可乐、羊乳文化工业旅游区等；镇江市的醋文化博物馆、镇江丹阳堂皇睡眠、江苏容酒等。"
      },
      {
        title: "镇江醋文化博物馆",
        imgUrl: "../article/zhenjOut.jpeg",
        link: "../article03/article03",
        content: "  镇江香醋以糯米为原料，是一种典型的米醋。梁代陶弘景《本草经集注》中就有关于米醋的用法记载。陶弘景，自号华阳隐居，南北朝时齐、梁丹阳秣陵（今南京）人。隐居句曲山（今茅山），梁武帝曾想礼聘为相不从，但愿意担任朝廷咨询，古人称“山中宰相”。据此，镇江香醋已有1400多年的历史，但当时米醋（镇江香醋）只是以自给自足的家庭小规模生产方式出现。\n 1840年，江苏丹徒经营铁炭行出身的朱兆怀始创“朱恒顺糟坊”，并以糯米为原料酿制“百花酒”，此酒被清地方官采为“贡品”奉献皇宫，当时有民谣赞颂：“百花酒香傲百花，万家举杯誉万家，酒香好似花上露，色泽犹如洞中春”，酒业兴盛。1850年，朱氏易牌号为“朱恒顺糟淋坊”，以酒糟加入谷壳发酵，酿制香醋，这是镇江第一家醋厂，也是今天镇江香醋的真正起源地。1909年，恒顺以醋参加南洋劝业会评赛，荣获了第一枚金牌奖。民国年间，又多次在江苏物产展览会、京沪铁道沿线评赛会、西湖博览会上获多种奖牌，镇江香醋名声日盛。1928年，恒顺以闻名海内外的风景名胜金山寺外景为产品商标图案，注册专用。\n 镇江醋是原产于江苏镇江的传统著名特产，以其口感浓郁、味道纯正、历久弥香的特点闻名于业界，又因其别具一格的味觉层次，在当地的醋品类中名列头筹。镇江醋的制作手法作为我国的一项具有传统意义的制作工艺，一直以来都备受人们关注。人们在赞叹镇江醋口感优越的同时，也在好奇镇江醋的制作流程究竟如何。"
      },
      {
        title: "常州天虹大明创意园",
        imgUrl: "../article/ChangOut.jpeg",
        link: "../article04/article04",
        content: "  前往苏州市隆力奇养生小镇、镇江醋文化博物馆等地进行调研，调查对象是景区工作人员、景区游客、消费者、企业负责人、政府机关工作人员，计划采用问卷调查法、访谈法等，重点调查景区的营业情况、运营模式、人流量和发展策略，以及游客对景区的满意度和期望情况，企业与当地人文特色，企业落地之间异同、优劣势，景区对于“互联网+”的运用，景区“社群运营”化的可行性分析，“社群运营”灵活使用的方法探析。主要着重于苏州地区的工文旅发展，辅以江苏其他地区有代表性的优秀工文旅实地案例调研，例如南京市的南钢文化工业旅游区、太古可口可乐、羊乳文化工业旅游区等；镇江市的醋文化博物馆、镇江丹阳堂皇睡眠、江苏容酒等。"
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载/pages/main/main
   */

  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})