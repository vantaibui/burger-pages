import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class Index extends Component {
  renderBread = () => {
    let { burger } = this.props;
    let content = [];
    for (let propsBurger in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[propsBurger]; i++) {
        breadMid.push(<div key={i} className={propsBurger}></div>);
      }
      content.push(breadMid);
    }
    return content;
  };
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, -1);
              }}
              type="button"
              className="btn btn-danger mr-2"
            >
              -
            </button>
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, 1);
              }}
              type="button"
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center text-primary">Bài tập Burger</h2>
        <div className="row border border-danger p-5">
          <div className="col-sm-7 border border-warning m-0">
            <h2 className="text-center text-secondary mb-3">Cửa hàng</h2>
            <div className="breadTop"></div>
            {this.renderBread()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-sm-5 border border-warning m-0">
            <h2 className="text-secondary mb-3">Chọn thức ăn</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Giá</th>>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Tổng tiền: </td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      // const action = {
      //   type: "ADD_BREAD_MID",
      //   propsBurger,
      //   amount,
      // };
      dispatch({
        type: "ADD_BREAD_MID",
        propsBurger,
        amount,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
