import React, { Component } from "react";

// Kết nối với store
import {connect} from 'react-redux';

class Modal extends Component {
  render() {
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
    <h5 className="modal-title">{this.props.ThongTinSanPham.tenSP}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                  <img className="img-fluid" src={this.props.ThongTinSanPham.hinhAnh} alt="anh"/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Tạo 1 hàm chuyển state của redux thành props của component

const mapStateToProps = (state) => {
  // state là là rootReducer

  // Tạo ra props cho component từ state redux

  return {
    ThongTinSanPham: state.stateModalReducer.thongTinSanPham,
  };
};

export default connect(mapStateToProps, null)(Modal);
