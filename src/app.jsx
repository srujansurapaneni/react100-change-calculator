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
      totalChange: "",
      twenties: "",
      tens: "",
      fives: "",
      ones: "",
      quaters: "",
      dimes: "",
      nickels: "",
      pennies: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

  handleChange(event) {
    console.log("entered");
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  calculateChange(event) {
    console.log("calculated");
    let dueAmount = this.state["amountDue"];
    let recAmount = this.state["amountReceived"];
    let diffAmounttotal = recAmount - dueAmount;
    let diffRounded = Math.floor(diffAmounttotal).toFixed(0);
    let diffTwodecimals = diffAmounttotal.toFixed(2);
    let diffAmount = (diffTwodecimals - diffRounded) * 100;

    let twenties = 0;
    let tens = 0;
    let fives = 0;
    let ones = 0;

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

    console.log(diffAmounttotal);
    console.log(diffRounded);
    console.log(diffTwodecimals);
    console.log(diffAmount);
    console.log(calcQuarter);
    console.log(calcDime);
    console.log(calcNickel);
    console.log(calcPenny);
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
                  <p>
                    <input
                      type="text"
                      name="amountDue"
                      placeholder="enter amount"
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
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
                  The total change due is {totalChange}
                </div>

                <div className="row row-cols-1 row-cols-md-4">
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Twenties</h5>
                        <p className="card-text">{twenties}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Tens</h5>
                        <p className="card-text">{tens}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Fives</h5>
                        <p className="card-text">{fives}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Ones</h5>
                        <p className="card-text">{ones}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-md-4">
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Quarters</h5>
                        <p className="card-text">{quaters}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Dimes</h5>
                        <p className="card-text">{dimes}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Nickels</h5>
                        <p className="card-text">{nickels}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Pennies</h5>
                        <p className="card-text">{pennies}</p>
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
