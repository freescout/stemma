import React, { Component } from 'react';


export default class Death extends Component {

  constructor(props) {
    super(props);
    this.onChangeAliveHandler = this.onChangeAliveHandler.bind(this);
    this.onChangeDateOfDeath = this.onChangeDateOfDeath.bind(this);
    this.onChangePlaceOfDeath = this.onChangePlaceOfDeath.bind(this);
    this.sendDeathDetails = this.sendDeathDetails.bind(this);
    this.state = {
      dateOfDeath: '',
      placeOfDeath: '',
      isAlive: true
    }
  }
  onChangeAliveHandler(e) {
    //console.log("Is alive", e.target.value);
    const alive = this.state.isAlive;
    this.setState({
      isAlive: !alive
    });
   // this.sendGeneralDetails();
  }

  onChangeDateOfDeath(e) {
    this.setState({
      dateOfDeath: e.target.value
    },
      this.sendDeathDetails
    );
  }

  onChangePlaceOfDeath(e) {
    this.setState({
      placeOfDeath: e.target.value
    },
      this.sendDeathDetails
    );
    
  }

  sendDeathDetails = () =>  {
    this.props.deathDetails(this.state);
  }


  render() {
    return(
      <div >

          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="defaultChecked2" id="defaultChecked2" checked={this.state.isAlive} onChange={this.onChangeAliveHandler}/>
            <label class="custom-control-label" for="defaultChecked2">Alive</label>
          </div>
          {this.state.isAlive? (
            <div></div>
          ) :
          (     
            <div>
              <p class="card-text">Death</p>
              <div class="form-group row">
                <div class="col">
                  <input class="form-control" type="date" value={this.state.dateOfDeath} id="dateofDeath" placeholder="Date of Death" onChange={this.onChangeDateOfDeath} />
                </div>
                <div class="col">
                  <input type="text" id="place" class="form-control" placeholder="Place" value={this.state.placeOfDeath} onChange={this.onChangePlaceOfDeath} name='place' />
                </div>
              </div>
            </div>
          )
          }
      </div>
    )
  }
}