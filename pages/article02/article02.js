// pages/article02/article02.js
const app = getApp();
Page({
  data: {
    article: {
      title: "工业旅游",
      imgUrl: "../article/sakura.png",
      content: "工业文化旅游是伴随着产业转型优化以及人们对于旅游定义的不断更新而诞生并且成长的一种新型旅游模式。现代工业旅游起源于20世纪50年代的法国，国外提及较多的是德国工业遗迹鲁尔本工业旅游区[1]。在发达国家，较早便开始发展工业文化旅游。汽车是如何生产出来的、巧克力有哪些制作过程、啤酒是怎样酿造的……为了满足游客的好奇心和求知欲，欧美发达国家一些规模较大的企业积极发展工业旅游项目，通过开放生产车间、生产线和厂区，建造展览馆、博物馆，让游客增强对企业、科技或文创的感性认识，从而促进企业形象提升和产品销售。中国工业旅游的发展是以1990年山西杏花村汾酒集团收取参观门票作为开端[2]，并由此不断得到创新和发展。张裕是最早开启工业旅游的企业之一，每年博物馆都会迎来约30万游客，葡萄酒主题的旅游线路，一方面展示张裕葡萄酒的历史，另一方面提供具有互动性的项目和品酒等活动。工业文化旅游由此在中国开端并蓬勃发展，但是在创新的路途中还是遇到了很多阻碍。"
    },
    likeList: app.globalData.likeList
  }
})