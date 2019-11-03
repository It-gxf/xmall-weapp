// pages/product/product.js
let WxParse = require("../../lib/wxParse/wxParse.js");
import Toast from '../../lib/vant-weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    couponShow: false,
    serviceShow: false,
    cartList: [],
    deliveryAddress: {
      address: "伊仕特·爱西稍门店",
      time: "23:00",
      day: "",
      diff: "明天"
    },
    product: {
      id: 0,
      picUrl: "/static/img/有机奶.png", // 默认商品图片
      promotion: 1, // 促销活动 0无 1限时购 2领劵
      gallery: [{
        picUrl: "/static/img/有机奶.png",
        sortOrder: 1
      },
        {
          picUrl: "/static/img/有机奶.png",
          sortOrder: 2
        }
      ], // 轮播图
      title: "白娃娃有机奶",
      description: "规格：12盒/箱",
      defaultPrice: 50.00, // 默认显示价格
      price: 50.00,
      originPrice: 60.00,
      detail: '<div><img src="/static/img/商品介绍.png"></div>', // 商品详情
      tags: [{
        id: 1,
        title: "新品"
      },
      {
        id: 2,
        title: "折扣"
      },
       {
          id: 2,
          title: "推荐"
        }
      ],
      serviceList: [{
        id: 1,
        title: "一天内送货上门",
        desc: "一天内送货上门"
      },
        {
          id: 1,
          title: "定时送货",
          desc: "定时送货"
        }
      ],
      comment: {
        goodCommentRate: 100, // 好评率
        count: 3986, // 评论计数
        goodComment: {
          nickname: "Exrick",
          avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
          content: "很好，值得购买。",
          rate: 5,
          time: "2019.06.18",
          spec: "1箱 原味",
          pics: [
            "/static/img/有机奶.png",
          ]
        } // 精选评论
      },
      attribute: [{
        name: "配料",
        value: ""
      },
      {
        name: "净含量",
        value: ""
      }
      ] // 商品属性
    },
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
    ],
    hot: [{
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
    ],
    sku: {
      show: false, // 显示属性规格
      noneSku: false, // 有无规格选择
      quota: 100, // 限购数量
      productId: 1, // 商品id
      picUrl: "", // 当前选择图片
      specText: "", // 所选规格属性
      specTextNoCount: "", // 所选规格属性 无数量
      tree: [
        {
          k: '口味', // skuKeyName：规格类目名称
          v: [
            {
              id: 1, // skuValueId：规格值 id
              name: '原味', // skuValueName：规格值名称
              picUrl: '/static/img/有机奶.png', // 规格类目图片，只有第一个规格类目可以定义图片
              selected: false, // 是否选择
              disabled: false // 禁用
            },
            {
              id: 2,
              name: '水果',
              picUrl: '/static/img/有机奶.png',
              selected: false,
              disabled: false
            }
          ],
          ks: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
        },
      
      ],
      // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      list: [
        {
          id: 1, // skuId，下单时后端需要
          price: 1.00, // 价格
          s1: 1, // 规格类目 ks 为 s1 的对应规格值 id
          s2: 3, // 规格类目 ks 为 s2 的对应规格值 id
          stockNum: 50 // 当前 sku 组合对应的库存
        },
        {
          id: 2,
          price: 2.00,
          s1: 1,
          s2: 4,
          stockNum: 100
        },
        {
          id: 3,
          price: 3.00,
          s1: 1,
          s2: 5,
          stockNum: 0
        },
        {
          id: 4,
          price: 4.00,
          s1: 2,
          s2: 3,
          stockNum: 100
        },
        {
          id: 5,
          price: 5.00,
          s1: 2,
          s2: 4,
          stockNum: 100
        },
        {
          id: 6,
          price: 6.00,
          s1: 2,
          s2: 5,
          stockNum: 50
        }
      ],
      // 选择的 sku 组合
      selectedSku: {
      },
      count: 1 // 选择的商品数量
    },
    couponList: [
      {
        id: '1',
        title: '60元直减劵',
        time: '2019.08.01-2019.08.30',
        description: '饮食类目专享；限时购等详情页标注不可用券的商品除外不可用券的商品除外',
        discount: 60, //折扣金额 -1代表全部
        disabled: false,
        showAll: false,
        selected: false,
        get: false,
        mode: "get",
        status: 0 // 0未使用 1已使用 2已失效
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
    // 初始化配送时间
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate() + 1;
    this.setData({
      'deliveryAddress.day': month + '月' + day + '日'
    })
    // 读取购物车
    let cartList = wx.getStorageSync("cartList");
    if (cartList) {
      this.setData({
        cartList: cartList
      })
    }
    // 加载sku后初始化selectedSku
    let tree = this.data.sku.tree;
    for (let i = 0; i < tree.length; i++) {
      let s = 'sku.selectedSku.' + tree[i].ks;
      this.setData({
        [s]: ''
      })
    }
    // 只有一种 sku 规格值时默认选中第一个
    if (tree.length == 1) {
      let k = 'sku.selectedSku.' + this.data.sku.tree[0].ks;
      this.setData({
        [`sku.tree[${0}].v[${0}].selected`]: true,
        [k]: this.data.sku.tree[0].v[0].id
      });
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
  onShow: function (e) {
    // 加载商品详情数据
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    let that = this;
    WxParse.wxParse('productDetail', 'html', this.data.product.detail, that, 0);


    // 初始判断
    this.judgeAllItem();
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
  openIndexPage: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  openCoupon: function () {
    this.setData({
      couponShow: true
    })
  },
  closeCoupon: function () {
    this.setData({
      couponShow: false
    })
  },
  openAddress: function () {
    let that = this;
    wx.chooseLocation({
      success: function (res) {
        if(!res.address){
          return;
        }
        that.setData({
          'deliveryAddress.address': res.address
        })
      },
    })
  },
  openService: function () {
    this.setData({
      serviceShow: true
    })
  },
  closeService: function () {
    this.setData({
      serviceShow: false
    })
  },
  openCartPage: function () {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  toComment: function () {
    wx.navigateTo({
      url: '/pages/comment/comment?productId' + this.data.product.id,
    })
  },
  toProduct: function (e) {
    let id = e.currentTarget.dataset.value.id;
    wx.navigateTo({
      url: '/pages/product/product?id=' + id
    })
  },
  clickTag: function (e) {
    let v = e.currentTarget.dataset.value;
    wx.navigateTo({
      url: '/pages/promotion/promotion?id=' + v.id + '&title=' + v.title
    });
  },
  previewThumb: function (e) {
    wx.previewImage({
      current: this.data.product.picUrl,
      urls: [this.data.product.picUrl]
    })
  },
  showSku: function (e) {
    this.setData({
      'sku.show': true
    })
  },
  closeSku: function (e) {
    this.setData({
      'sku.show': false
    })
  },
  selectSku: function (e) {
    let k = e.currentTarget.dataset.k;
    let v = e.currentTarget.dataset.value;
    let index = e.currentTarget.dataset.index;
    let iindex = e.currentTarget.dataset.iindex;
    if (this.data.sku.tree[index].v[iindex].disabled) {
      return;
    }
    // 勾选或反选 设置属性
    if (!this.data.sku.tree[index].v[iindex].selected) {
      // 勾选 记录
      let s = 'sku.selectedSku.' + k.ks;
      this.setData({
        [s]: v.id
      });
    } else {
      // 反选 删除值
      let s = 'sku.selectedSku.' + k.ks;
      this.setData({
        [s]: ''
      });
    }
    this.setData({
      [`sku.tree[${index}].v[${iindex}].selected`]: !this.data.sku.tree[index].v[iindex].selected
    });
    // 排除该组其他已选项
    let vList = this.data.sku.tree[index].v;
    for (let i = 0; i < vList.length; i++) {
      if (vList[i].id != v.id) {
        this.setData({
          [`sku.tree[${index}].v[${i}].selected`]: false
        })
      }
    }
    this.judgeAllItem();
    // 修改属性图片
    if (index == 0) {
      this.setData({
        'product.picUrl': this.data.sku.tree[0].v[iindex].picUrl
      })
    }
    // 修改选择商品价格信息
    if (this.isAllSelected()) {
      let skuComb = this.getSkuComb();
      this.setData({
        'product.price': skuComb.price
      })
    } else {
      // 恢复默认价格
      this.setData({
        'product.price': this.data.product.defaultPrice
      })
    }
  },
  // 循环判断所有属性是否可选
  judgeAllItem: function () {
    // 判断库存
    let tree = this.data.sku.tree;
    for (let i = 0; i < tree.length; i++) {
      let v = tree[i].v;
      for (let j = 0; j < v.length; j++) {
        if (this.isSkuChoosable(tree[i].ks, v[j].id)) {
          // 可点击
          this.setData({
            [`sku.tree[${i}].v[${j}].disabled`]: false
          })
        } else {
          // 不可点击
          this.setData({
            [`sku.tree[${i}].v[${j}].disabled`]: true
          })
        }
      }
    }
    this.getSelectedText();
  },
  isSkuChoosable: function (ks, vId) {

    let selectedSku = this.data.sku.selectedSku;
    let list = this.data.sku.list;

    // 先假设sku已选中，拼入已选中sku对象中
    let matchedSku = Object.assign({}, selectedSku, {
      [ks]: vId
    });

    // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中
    let skusToCheck = Object.keys(matchedSku).filter(
      skuKey => matchedSku[skuKey] != ''
    );

    let filteredSku = list.filter(sku => (
      skusToCheck.every(
        skuKey => String(matchedSku[skuKey]) == String(sku[skuKey])
      )
    ));

    let stock = filteredSku.reduce((total, sku) => {
      total += sku.stockNum;
      return total;
    }, 0);
    return stock > 0;
  },
  // 是否所有规格已选
  isAllSelected: function () {
    let selectedSku = this.data.sku.selectedSku;
    let selected = Object.keys(selectedSku).filter(
      skuKeyStr => selectedSku[skuKeyStr] != ""
    );
    return this.data.sku.tree.length == selected.length;
  },
  // 获得已选择的组合
  getSkuComb: function () {
    if (!this.isAllSelected()) {
      return {};
    }
    let selectedSku = this.data.sku.selectedSku;
    let list = this.data.sku.list;
    let skusToCheck = [];
    this.data.sku.tree.forEach(v => {
      skusToCheck.push(v.ks)
    })
    let filteredSku = list.filter(sku => (
      skusToCheck.every(
        skuKey => String(selectedSku[skuKey]) == String(sku[skuKey])
      )
    ));
    return filteredSku[0];
  },
  // 选择属性文字
  getSelectedText: function () {
    let selectedSku = this.data.sku.selectedSku;
    let text = "";
    Object.keys(selectedSku).forEach(
      skuKeyStr => {
        let id = selectedSku[skuKeyStr];
        let tree = this.data.sku.tree;
        for (let i = 0; i < tree.length; i++) {
          let v = tree[i].v;
          for (let j = 0; j < v.length; j++) {
            if (v[j].id == id) {
              text = text + ' ' + v[j].name
            }
          }
        }
      }
    )
    this.setData({
      'sku.specTextNoCount': text
    })
    if (this.isAllSelected()) {
      text = text + ' ×' + this.data.sku.count;
    }
    this.setData({
      'sku.specText': text
    })
  },
  changeCount: function (e) {
    this.setData({
      'sku.count': e.detail.value
    });
    this.getSelectedText();
  },
  // 未选择属性提示
  toChooseTip: function () {
    // 未选择规格属性
    if (!this.data.sku.show) {
      // 未显示选择面板则显示
      this.setData({
        'sku.show': true
      })
      return;
    }
    let selectedSku = this.data.sku.selectedSku;
    let skuNotChoose = Object.keys(selectedSku).filter(
      skuKeyStr => selectedSku[skuKeyStr] == ''
    )[0]
    this.data.sku.tree.forEach(v => {
      if (v.ks == skuNotChoose) {
        Toast("请选择：" + v.k);
      }
    })
  },
  buyNow: function () {
    if (!this.isAllSelected()) {
      // 提示
      this.toChooseTip();
    } else {
      // 下单 判断数量
      let skuComb = this.getSkuComb();
      if (this.data.sku.count > skuComb.stockNum) {
        Toast("库存不足，请减少购买数量");
        return;
      }
      // 跳转checkout页面
      wx.setStorageSync("checkoutProduct", this.data.product);
      wx.setStorageSync("checkoutProductSku", this.data.sku);
      wx.navigateTo({
        url: '/pages/checkout/checkout?from=product',
      })
    }
  },
  addToCart: function () {
    if (!this.isAllSelected()) {
      // 提示
      this.toChooseTip();
    } else {
      // 添加至购物车 判断数量
      let skuComb = this.getSkuComb();
      if (this.data.sku.count > skuComb.stockNum) {
        Toast("库存不足，请减少购买数量");
        return;
      }
      let cartList = this.data.cartList;
      cartList.push({
        id: this.data.product.id,
        checked: true,
        picUrl: this.data.product.picUrl,
        title: this.data.product.title,
        spec: this.data.sku.specTextNoCount,
        count: this.data.sku.count,
        maxNum: this.data.sku.quota,
        price: this.data.product.price
      });
      wx.setStorageSync("cartList", cartList);
      this.setData({
        cartList: cartList
      });
      Toast("加入购物车成功");
    }
  },
  toVip: function(){
    wx.navigateTo({
      url: '/pages/ucenter/vip/vip',
    })
  }
})