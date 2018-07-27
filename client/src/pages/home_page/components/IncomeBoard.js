import React, { Component } from "react";
import "./IncomeBoard.css";

class IncomeBoard extends Component {
  render() {
    return (
      <div className="income-board row justify-content-center text-center col-md-12 py-4">
        <h4>Income Boards</h4>
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Cashier</h5>
            <h6 className="card-subtitle mb-2 text-muted">Costco - $21/hr</h6>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Dog Walker</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Pup Walker Service - $11/hr
            </h6>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Gift</h5>
            <h6 className="card-subtitle mb-2 text-muted">From Dad - $250</h6>
          </div>
        </div>
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Other</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Random money - $84
            </h6>
          </div>
        </div>
        <button type="button" className="btn btn-lg income-btn">
          Add Income Source
        </button>
      </div>
    );
  }
}

export default IncomeBoard;
