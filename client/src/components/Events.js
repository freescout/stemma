import React, { Component } from 'react';

import Birth from './events/Birth';
import Death from './events/Death';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.getBirthDetails = this.getBirthDetails.bind(this);
    this.getDeathDetails = this.getDeathDetails.bind(this);
    this.sendEventDetails = this.sendEventDetails.bind(this);

    this.state = {

      dateOfBirth: "",
      father: "",
      mother: "",
      placeOfBirth: "",
      dateOfDeath: "",
      placeOfDeath: ""
    }
  }

  sendEventDetails = () => {
    //this.props.eventDetails(this.state.dateOfBirth, this.state.father, this.state.mother, this.state.placeOfBirth, this.state.dateOfDeath, this.state.placeOfDeath)
    //console.log(this.state);
    this.props.eventDetails(this.state);
  }
  getBirthDetails = (dob, father, mother, pob) => {
    this.setState({
      dateOfBirth: dob,
      father: father,
      mother: mother,
      placeOfBirth: pob
    },
      this.sendEventDetails
    );
    //console.log("Birth details at Add Member ", this.state.dateOfBirth, this.state.father, this.state.mother, this.state.placeOfBirth )
    //this.sendEventDetails();
  }

  getDeathDetails = (dod, pod) => {
    this.setState({
      dateOfDeath: dod,
      placeOfDeath: pod
    },
      this.sendEventDetails
    );
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