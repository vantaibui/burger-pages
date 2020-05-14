import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import Modal from "./Modal";


class BaiTapChonXeRedux extends Component {
    mangSanPham = [
        {
          maSP: "carR",
          tenSP: "Car Red",
          hinhAnh: "./images/products/red-car.jpg",
          gia: 2000,
        },
        {
          maSP: "carB",
          tenSP: "Car Black",
          hinhAnh: "./images/products/black-car.jpg",
          gia: 2000,
        },
        {
          maSP: "carSi",
          tenSP: "Car Silver",
          hinhAnh: "./images/products/silver-car.jpg",
          gia: 2000,
        },
        {
          maSP: "carSt",
          tenSP: "Car Steel",
          hinhAnh: "./images/products/steel-car.jpg",
          gia: 2000,
        },
      ];
  render() {
    return <div>
        <DanhSachSanPham mangSanPham = {this.mangSanPham}/>
        <Modal/>
    </div>;
  }
}

export default BaiTapChonXeRedux;
