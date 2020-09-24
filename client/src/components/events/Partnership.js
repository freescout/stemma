import React, { Component } from 'react';
import Partner from '../Partner';

export default class Partnership extends Component {
constructor(props) {
  super(props);
  this.addPartner = this.addPartner.bind(this);
  this.sendPartnershipDetails = this.sendPartnershipDetails.bind(this);
  this.getPartnerDetails = this.getPartnerDetails.bind(this);

  this.state = {
    addPartner: false,
    partners: []
  }
}

  addPartner = () => {
    let openButton = this.state.addPartner;
    this.setState ({
      addPartner: !(openButton)
    })
  }

  getPartnerDetails = (partner) => {
    console.log("Partner at partnership", partner);
    this.setState({
      partners: [...this.state.partners, partner]
    },
      this.sendPartnershipDetails
    );
  }

  sendPartnershipDetails = () => {
    console.log("Send Partnership Detials", this.state.partners);
    this.props.partnershipDetails(this.state.partners);
  }
  render()  {
    return(
      <div>
        <button type="button" class="btn btn-light" onClick={this.addPartner}>Add Partner</button>

        { this.state.addPartner ?
          (
            <div> 
              <Partner partnerDetails={this.getPartnerDetails}/>             
            </div>
          )
          :
          (
            <div>
            </div>
          )
        }
      </div>
      


    )
  }
}