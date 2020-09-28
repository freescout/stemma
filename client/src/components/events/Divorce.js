import React, { Component } from 'react';


export default class Wedding extends Component {
  constructor(props) {
    super(props)

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePartner = this.onChangePartner.bind(this);
    this.state = {
      date: "",
      partner: "",
    }
  }

  onChangeDate = (e) => {
    this.setState({
      date: e.target.value
    },
      this.sendDivorceDetails
    );
  }

  onChangePartner = (e) => {
    this.setState({
      partner: e.target.value
    },
      this.sendDivorceDetails
    );
  }

  sendDivorceDetails = (e) => {
    this.props.divorceDetails(this.state);
  }


  render() {
    return(
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Divorce</h5>
            <div class="col">
              <input type="text"  value={this.state.partner} id="partner" placeholder="Partner" onChange={this.onChangePartner} />
            </div>
            <div class="col">
              <input  type="date" value={this.state.date} id="date" placeholder="Date" onChange={this.onChangeDate} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}