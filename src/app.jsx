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
    this.state = {
      name: "",
      value: "",
      totalChange: "0",
      twenties: "0",
      tens: "0",
      fives: "0",
      ones: "0",
      quaters: "0",
      dimes: "0",
      nickels: "0",
      pennies: "0"
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  calculateChange(event) {
    let dueAmount = this.state["amountDue"];
    let recAmount = this.state["amountReceived"];
    let diffAmounttotal = recAmount - dueAmount;
    let diffRounded = Math.floor(diffAmounttotal).toFixed(0);
    let diffTwodecimals = diffAmounttotal.toFixed(2);
    let diffAmount = diffTwodecimals * 100;

    let twenties = Math.floor(diffAmount / 2000);
    diffAmount = diffAmount % 2000;

    let tens = Math.floor(diffAmount / 1000);
    diffAmount = diffAmount % 1000;

    let fives = Math.floor(diffAmount / 500);
    diffAmount = diffAmount % 500;

    let ones = Math.floor(diffAmount / 100);
    diffAmount = diffAmount % 100;

    let calcQuarter = Math.floor(diffAmount / 25);
    diffAmount = diffAmount % 25;

    let calcDime = Math.floor(diffAmount / 10);
    diffAmount = diffAmount % 10;

    let calcNickel = Math.floor(diffAmount / 5);
    diffAmount = diffAmount % 5;

    let calcPenny = Math.round(diffAmount / 1);

    this.setState({
      diffAmounttotal: diffAmounttotal,
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quaters: calcQuarter,
      dimes: calcDime,
      nickels: calcNickel,
      pennies: calcPenny
    });
  }

  render() {
    const totalChange = this.state.diffAmounttotal;
    const twenties = this.state.twenties;
    const tens = this.state.tens;
    const fives = this.state.fives;
    const ones = this.state.ones;
    const quaters = this.state.quaters;
    const dimes = this.state.dimes;
    const nickels = this.state.nickels;
    const pennies = this.state.pennies;

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
                  <br />
                  <input
                    type="text"
                    name="amountDue"
                    placeholder="enter amount"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label>How much was received?</label>
                  <br />
                  <input
                    type="text"
                    name="amountReceived"
                    placeholder="enter amount"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div
                className="card-footer"
                style={{ backgroundColor: "#a9a9a9" }}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this.calculateChange}
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
                  The total change due is ${totalChange}
                </div>
                <div className="alert alert-success" role="alert">
                  <div className="row row-cols-1 row-cols-md-4">
                    <div className="col mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Twenties</h5>
                          <p className="change">{twenties}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Tens</h5>
                          <p className="change">{tens}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Fives</h5>
                          <p className="change">{fives}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Ones</h5>
                          <p className="change">{ones}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row row-cols-1 row-cols-md-4">
                    <div className="col mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Quarters</h5>
                          <p className="change">{quaters}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Dimes</h5>
                          <p className="change">{dimes}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Nickels</h5>
                          <p className="change">{nickels}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Pennies</h5>
                          <p className="change">{pennies}</p>
                        </div>
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
