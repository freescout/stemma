import React, { Component } from 'react';


export default class Wedding extends Component {
  constructor(props) {
    super(props)

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePartner = this.onChangePartner.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);
    this.sendWeddingDetails = this.sendWeddingDetails.bind(this);
    this.state = {
      date: "",
      partner: "",
      placeWedding: ""
    }
  }

  onChangeDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  onChangePartner = (e) => {
    this.setState({
      partner: e.target.value
    })
  }

  onChangePlace = (e) => {
    this.setState({
      placeWedding: e.target.value
    })
  }

  sendWeddingDetails = (e) => {
    this.props.weddingDetails(this.state);
  }

  render() {
    return(
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Wedding</h5>
            <div class="col">
              <input type="text"  value={this.state.partner} id="partner" placeholder="Partner" onChange={this.onChangePartner} />
            </div>
            <div class="col">
              <input  type="date" value={this.state.date} id="date" placeholder="Date" onChange={this.onChangeDate} />
            </div>
            <div class="col">
              <input type="text" id="place" placeholder="Place" value={this.state.placeWedding} onChange={this.onChangePlace} name='place' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}