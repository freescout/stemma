import React, { Component } from 'react';


export default class Birth extends Component {
  constructor(props) {
    super(props);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeMother = this.onChangeMother.bind(this);
    this.onChangeFather = this.onChangeFather.bind(this);
    this.onChangePlaceOfBirth = this.onChangePlaceOfBirth.bind(this);

    this.state = {
      father: "",
      mother: "",
      placeOfBirth: "",
      dateOfBirth: ""
    }
  }

  sendBirthDetails = () => {
    this.props.birthDetails(this.state.dateOfBirth, this.state.father, this.state.mother, this.state.placeOfBirth);
  }

  onChangeDateOfBirth(e) {
    this.setState({
      dateOfBirth: e.target.value
    })
    console.log("Birthdate", this.state.dateOfBirth);
  }

  onChangeFather(e) {
    this.setState({
      father: e.target.value
    });
  }

  onChangeMother(e) {
    this.setState({
      mother: e.target.value
    });
  }

  onChangePlaceOfBirth(e) {
    this.setState({
      placeOfBirth: e.target.value
    });
    this.sendBirthDetails();
  }

  render() {
    return(
      <div >
          <p class="card-text">Birth</p>
          <div class="form-group row">
            <div class="col">
              <input class="form-control" type="date" value={this.state.dateOfBirth} id="dateofBirth" placeholder="Date of Birth" onChange={this.onChangeDateOfBirth}/>
            </div>
            <div class="col">
              <input type="text" id="father" class="form-control" required placeholder="Father" value={this.state.father} onChange={this.onChangeFather} name='father' />
            </div>
            <div class="col">
              <input type="text" id="mother" class="form-control" required placeholder="Mother" value={this.state.mother} onChange={this.onChangeMother} name='mother' />
            </div>
            <div class="col">
              <input type="text" id="placeOfBirth" class="form-control" required placeholder="Place Of Birth" value={this.state.placeOfBirth} onChange={this.onChangePlaceOfBirth} name='placeOfBirth' />
            </div>
          </div>

      </div>
    )
  }
}