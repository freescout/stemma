import React, { Component } from 'react';

import Birth from './events/Birth';
import Death from './events/Death';
import Partnership from './events/Partnership';

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
      placeOfDeath: "",
      partners: [],
    }
  }

  sendEventDetails = () => {
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
  }

  getDeathDetails = (...props) => {
    this.setState({
      dateOfDeath: props[0].dateOfDeath,
      placeOfDeath: props[0].placeOfDeath
    },
      this.sendEventDetails
    );
  }

  getPartnershipDetails = (partners) => {
    console.log("Reached getpartner at Events", partners);
    this.setState({
      partners: [...this.state.partners, partners]
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
            <Partnership partnershipDetails={this.getPartnershipDetails} />
          </div>
        </div>
      </div>
    )
  }
}