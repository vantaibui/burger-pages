import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal";

class SanPham extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={sanPham.hinhAnh} alt="product" />
        <div
          style={{ backgroundColor: "rgba(10, 15, 10, 0.8)" }}
          className="card-body text-white"
        >
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.gia}</p>
          <button
            className="btn btn-success text-center"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.xemChiTiet(sanPham);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTiet: (sanPham) => {
      let action = {
        type: "XEM_CHI_TIET", //Thuộc tính bắt buộc
        sanPham: sanPham, //Giá trị gửi lên store
      };

      // dùng hàm dispatch đưa action lên store
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
