import React, { Component } from 'react';

import Birth from './Birth';
import Death from './Death';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.getBirthDetails = this.getBirthDetails.bind(this);
    this.getDeathDetails = this.getDeathDetails.bind(this);

    this.state = {

      dateOfBirth: "",
      father: "",
      mother: "",
      placeOfBirth: "",
    }
  }
  getBirthDetails = (dob, father, mother, pob) => {
    this.setState({
      dateOfBirth: dob,
      father: father,
      mother: mother,
      placeOfBirth: pob

    })
    //console.log("Birth details at Add Member ", this.state.dateOfBirth, this.state.father, this.state.mother, this.state.placeOfBirth )
  }

  getDeathDetails = (dod, pod) => {
    this.setState({
      dateOfDeath: dod,
      placeOfDeath: pod
    })
    console.log("Death details at Add Member ", this.state.dateOfDeath, this.state.placeOfDeath);
  }
  render(){
    return(
      <div>
        <div class='card'>
          <div class="card-body">
          <h5 class="card-title">Events</h5>
            <Birth birthDetails={this.getBirthDetails} />
            <Death deathDetails={this.getDeathDetails} />

      </div>
    </div>
      </div>
    )
  }
}