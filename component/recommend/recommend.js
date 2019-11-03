// component/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    recommend: [{
      id: 1,
      relateId: 0,
      title: "鸡蛋果蔬沙拉",
      description: "鸡蛋馅、紫薯、樱桃番茄、火龙果、千岛酱（净含量230g",
      price: 1299.00,
      type: 0,
      picUrl: "/static/img/热门预定1.png",
    },
      {
        id: 2,
        relateId: 0,
        title: "鸡肉凯撒沙拉",
        description: "烟鸡胸、烤南瓜、面包丁、紫甘蓝丝、凯撒酱（净含量230g）",
        price: 99.00,
        type: 0,
        picUrl: "/static/img/热门预定2.png"
      },
      {
        id: 3,
        relateId: 0,
        title: "德式香肠沙拉",
        description: "荷美尔香肠、烤南瓜、白菜花、紫甘蓝丝、千岛酱（净含量170g)",
        price: 49.00,
        type: 0,
        picUrl: "/static/img/热门预定3.png"
      },
      {
        id: 4,
        relateId: 0,
        title: "果蔬沙拉",
        description: "黄桃、芒果、菠萝、猕猴桃(净含量320g)",
        price: 59.00,
        type: 0,
        picUrl: "/static/img/热门预定4.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick: function (e) {
      let id = e.currentTarget.dataset.value.id;
      wx.navigateTo({
        url: '/pages/product/product?id=' + id
      });
    }
  }
})
