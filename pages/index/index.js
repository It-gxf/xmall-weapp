//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sections: [{
      id: 1,
      title: "轮播图",
      type: 0, // 板块类型 轮播
      sortOrder: 1, // 板块排序
      list: [{
        id: 1,
        relateId: 0, // 关联商品或其他ID
        title: "",
        type: 0, // 关联类型 0商品 1促销板块 2分类
        picUrl: "/static/img/轮播图1.png"
      }, {
        id: 2,
        relateId: 0,
        title: "",
        type: 0,
          picUrl: "/static/img/轮播图2.png"
      }, {
        id: 3,
        relateId: 0,
        title: "",
        type: 0,
          picUrl: "/static/img/轮播图3.png"
      }]

    }, {

      id: 2,
      title: "频道图标",
      type: 1, // 板块类型 频道图标
      sortOrder: 2,
      list: [{
        id: 1,
        relateId: 0,
        title: "IPhone XS",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/5224f868cca31a8b913411ff9d69dcaf.png"
      },
      {
        id: 2,
        relateId: 0,
        title: "购买空净",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/e98cfb0a63e8b8c80e5b87ca66bda64c.png"
      },
      {
        id: 3,
        relateId: 0,
        title: "新品配件",
        type: 0,
        picUrl: "https://i.loli.net/2019/06/23/5d0f7e938c57070713.png"
      },
      {
        id: 4,
        relateId: 0,
        title: "服装",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/75892aebb63f998fa9b37e9a18984a98.png"
      },
      {
        id: 5,
        relateId: 0,
        title: "更多",
        type: 0,
        picUrl: "https://i.loli.net/2019/06/23/5d0f7e938cbee56873.png"
      }
      ]

    }, {

      id: 3,
      title: "优惠自提",
      type: 2, // 板块类型 横向商品板块
      relateId: 1, // 关联促销分类
      sortOrder: 3,
      list: [{
        id: 1,
        relateId: 0,
        title: "白娃娃有机奶",
        description: "规格： 12盒/箱",
        price: 72.00,
        type: 0,
        picUrl: "/static/img/有机奶.png"
      }
      ]
    }, {
      id: 4,
      title: "",
      type: 3, // 板块类型 两张板块
      sortOrder: 4,
      list: [{
        id: 1,
        relateId: 0,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/e/erfenzhiyiqingrenjieapp.png"
      },
      {
        id: 2,
        relateId: 0,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/s/shangchengguanggaowei.png"
      }
      ]
    }, {
      id: 5,
      title: "热门预定",
      type: 4, // 大图商品带边框板块
      relateId: 2,
      sortOrder: 5,
      list: [{
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
    }, {

      id: 6,
      title: "",
      type: 3, // 板块类型 两张板块
      sortOrder: 6,
      list: [{
        id: 1,
        relateId: 0,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/3a7c77edcd70a9d3621bc3e7d0fba1c1.png"
      },
      {
        id: 2,
        relateId: 0,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/4bf08546b25b1527cc715a9717db6327.png"
      }
      ]
    }, {

      id: 5,
      title: "全部商品",
      type: 5, // 大图商品无边框板块
      relateId: 3,
      sortOrder: 5,
        list: [{
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
    }]
  },
  onLoad: function () { },
  toSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },
  handleClick: function (e) {
    let data = e.currentTarget.dataset.value;
    if (data.type == 0) {
      // 商品
      wx.navigateTo({
        url: '/pages/product/product?id=' + data.relateId
      });
    } else if (data.type == 1) {
      // 促销
      wx.navigateTo({
        url: '/pages/promotion/promotion?id=' + data.relateId
      });
    } else if (data.type == 2) {
      // 分类
      wx.navigateTo({
        url: '/pages/product/product?id=' + data.relateId
      });
    }
  },
  clickHeader: function (e) {
    let data = e.currentTarget.dataset.value;
    wx.navigateTo({
      url: '/pages/promotion/promotion?id=' + data.relateId
    });
  }
})