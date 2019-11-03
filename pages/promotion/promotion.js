// pages/promotion/promotion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filters: [
      {
        type: 'text',
        label: '综合',
        value: 'default',
        checked: true,
        groups: ['001'],
      },
      {
        type: 'sort',
        label: '价格',
        value: 'price',
        groups: ['002'],
      }
    ],
    product: [{
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.title){
      wx.setNavigationBarTitle({
        title: options.title,
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  },
  handleClick: function (e) {
    let id = e.currentTarget.dataset.value.id;
    wx.navigateTo({
      url: '/pages/product/product?id=' + id
    });
  },
  onFilterChange: function (e) {
    let price = e.detail.checkedValues[1];
    if (price == 1) {
      let data = this.data.product;
      data.sort(function (a, b) {
        return a.price - b.price
      });
      this.setData({
        product: data
      })
    } else if (price == -1) {
      let data = this.data.product;
      data.sort(function (a, b) {
        return b.price - a.price
      });
      this.setData({
        product: data
      })
    } else {
      let data = this.data.product;
      data.sort(function (a, b) {
        return a.id - b.id
      });
      this.setData({
        product: data
      })
    }
  },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  }
})