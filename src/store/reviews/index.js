import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state: {
    reviews: [],
    detailReview: [],
    fakeClientReview: [
      {
        id: 1,
        name: "Hoàng Bảo",
        company: "Giám đốc công ty xây dựng Thăng Long",
        comment:
          "Công ty chúng tôi đã hợp tác và làm việc với Troc Studio trong một thời gian dài. Họ làm rất tốt, chu đáo và mang tính thẩm mĩ. Chúng tôi đánh giá 5 sao.",
      },
      {
        id: 2,
        name: "Thanh Sơn",
        company: "CEO công ty thiết kế thời trang",
        comment:
          "Tôi đã hợp tác và làm việc với Troc Studio trong khoảng 2 tháng trở lại đây. Họ làm việc rất tốt.",
      },
      {
        id: 3,
        name: "Quang Lập",
        company: "Chủ tiệm gara xe máy",
        comment:
          "Tôi đã hợp tác và làm việc với Troc Studio trong khoảng 3 tháng trở lại đây. Xưởng của tôi do họ thiết kế rất đẹp mắt.",
      },
      {
        id: 4,
        name: "Đình Hân",
        company: "Nhân viên BĐS miền Trung",
        comment:
          "Troc Studio đã thiết kế cho tôi một ngôi nhà biệt thự tuyệt đẹp, sang trọng với giá cả hợp lý. Tôi sẽ đánh giá họ 5 sao.",
      },
      {
        id: 5,
        name: "Trung Nghĩa",
        company: "CEO khách sạn Monalisa",
        comment:
          "Tôi đã hợp tác và làm việc với Troc Studio trong khoảng 10 tháng trở lại đây. Khách sạn chúng tôi đã được họ làm lại rất sang trọng, đẹp mắt.",
      },
      {
        id: 6,
        name: "Lương Lâm",
        company: "Giám đốc công ty xây dựng Mường Thanh",
        comment:
          "Công ty chúng tôi đã hợp tác và làm việc với Troc Studio trong một thời gian dài. Họ làm rất tốt, chu đáo và mang tính thẩm mĩ. Chúng tôi đánh giá 5 sao.",
      },
      {
        id: 7,
        name: "Thanh Thuỷ",
        company: "CEO VinHomes",
        comment:
          "Tôi đã hợp tác và làm việc với Troc Studio trong khoảng 2 năm trở lại đây. Họ làm việc rất tốt và chúng tôi sẽ hợp tác lâu dài",
      },
      {
        id: 8,
        name: "Thế Sơn",
        company: "Chủ nhà máy cao su",
        comment:
          "Tôi đã hợp tác và làm việc với Troc Studio trong khoảng 5 tháng trở lại đây. Xưởng của tôi do họ thiết kế rất đẹp mắt.",
      },
      {
        id: 9,
        name: "Công Hưng",
        company: "Nhân viên kinh doanh tự do",
        comment:
          "Troc Studio đã thiết kế cho tôi một ngôi nhà biệt thự tuyệt đẹp, sang trọng với giá cả hợp lý. Tôi sẽ đánh giá họ 5 sao.",
      },
      {
        id: 10,
        name: "Quang Minh",
        company: "CEO khách sạn Kiwi",
        comment:
          "Tôi đã hợp tác và làm việc với Troc Studio trong khoảng 10 tháng trở lại đây. Khách sạn chúng tôi đã được họ làm lại rất sang trọng, đẹp mắt.",
      },
    ],
  },
  mutations,
  actions,
  getters,
};
