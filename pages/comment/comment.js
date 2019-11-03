// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: "all",
    count: {
      pic: 2,
      add: 1,
      good: 3,
      mid: 0,
      bad: 0
    },
    goodCommentRate: 100,
    rate: 5,
    comment: [],
    commentList: [
      {
        nickname: "Exrick",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
        content: "很好,值得购买。",
        rate: 5,
        time: '2019.08.18',
        spec: "原味",
        pics: [
          "/static/img/有机奶.png"
        ]
      },
      {
        nickname: "Exrick",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
        content: "很好,值得购买。",
        rate: 5,
        time: '2019.08.18',
        spec: "原味",
        pics: [
          "/static/img/有机奶.png"
        ]
      },
      {
        nickname: "Exrick",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
        content: "很好,值得购买。",
        rate: 5,
        time: '2019.08.18',
        spec: "原味",
        pics: [
          "/static/img/有机奶.png"
        ],
        addComment: {
          time: "2019.06.19",
          content: "好！",
          pics: [
            "/static/img/有机奶.png"
          ]
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      comment: this.data.commentList
    })
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
  changeTag: function (e) {
    let tag = e.currentTarget.dataset.value;
    this.setData({
      active: tag
    });
    let data = this.data.commentList;
    if (tag == "new") {
      data.sort(function (a, b) {
        if (b.time > a.time) {
          return 1;
        }
        if (b.time < a.time) {
          return -1;
        }
        return 0;
      });
    } else if (tag == "pic") {
      data = data.filter(v => {
        return v.pics.length > 0;
      });
    } else if (tag == "add") {
      data = data.filter(v => {
        return v.addComment;
      })
    } else if (tag == "good") {
      data = data.filter(v => {
        return v.rate >= 4;
      })
    } else if (tag == "mid") {
      data = data.filter(v => {
        return v.rate == 4 || v.rate == 3;
      })
    } else if (tag == "bad") {
      data = data.filter(v => {
        return v.rate <= 2;
      })
    }
    this.setData({
      comment: data
    })
  }
})