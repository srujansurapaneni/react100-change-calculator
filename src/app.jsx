import React, { Component } from "react";
// import styles from './mystyle.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const hStyle = {
  color: "white",
  textAlign: "left",
  margin: "20px"
};

const hRow = {
  color: "#ffffff",
  backgroundColor: "#ffffff",
  height: 0.25,
  borderColor: "#ffffff"
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2 style={hStyle}>Change Calculator</h2>
          <hr style={hRow} />
        </header>

        <div className="row">
          <div className="col-4">
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#a9a9a9" }}
              >
                Enter Information
              </div>
              <div className="card-body">
                <div>
                  <label>How much is due?</label>
                  <p>
                    <input
                      type="text"
                      name="amountDue"
                      placeholder="enter amount"
                    />
                  </p>
                </div>

                <div>
                  <label>How much was received?</label>
                  <p>
                    <input
                      type="text"
                      name="amountReceived"
                      placeholder="enter amount"
                    />
                  </p>
                </div>
              </div>
              <div
                className="card-footer"
                style={{ backgroundColor: "#a9a9a9" }}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <div className="alert alert-success" role="alert">
                  The total change due is 100
                </div>

                <div className="row row-cols-1 row-cols-md-4">
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Head</h5>
                        <p className="card-text">Number1.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Head</h5>
                        <p className="card-text">Number2.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Head</h5>
                        <p className="card-text">Number3.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Head</h5>
                        <p className="card-text">Number4.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-md-4">
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Head</h5>
                        <p className="card-text">Number5.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Head</h5>
                        <p className="card-text">Number6.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Head</h5>
                        <p className="card-text">Number7.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Head</h5>
                        <p className="card-text">Number8.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
