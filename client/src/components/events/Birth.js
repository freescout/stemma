import React, { Component } from 'react';
import IndividualDataService from "../../services/individual.service";
import Members from "../Members";


export default class Birth extends Component {
  constructor(props) {
    super(props);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeMother = this.onChangeMother.bind(this);
    this.onChangeFather = this.onChangeFather.bind(this);
    this.onChangePlaceOfBirth = this.onChangePlaceOfBirth.bind(this);
    this.getMemberId = this.getMemberId.bind(this);
    this.searchName = this.searchName.bind(this);
    

    this.state = {
      father: "",
      mother: "",
      placeOfBirth: "",
      dateOfBirth: "",
      members:[]
    }
  }


 
  searchName = (name) => {
    console.log("Membres", this.state.members.length);
      console.log("Searchname calling", name, "");
    IndividualDataService.findByName(name, "")
        .then(response => {
          this.setState({
            members: response.data
          });
          console.log("Printing response searchName");
          console.log(response.data);
          console.log("Members", this.state.members);

        })
        .catch(e => {
          console.log(e);
        })
    }

  sendBirthDetails = () => {
    this.props.birthDetails(this.state.dateOfBirth, this.state.father, this.state.mother, this.state.placeOfBirth);
  }

  onChangeDateOfBirth(e) {
    this.setState({
      dateOfBirth: e.target.value
    },
      this.sendBirthDetails
    );
  }

  onChangeFather(e) {
    this.searchName(e.target.value);

    this.setState({
      father: e.target.value
    },
      this.sendBirthDetails
    );
    
  }

  onChangeMother(e) {
    //this.searchName(e.target.value);
    this.setState({
      mother: e.target.value
    },
      this.sendBirthDetails
    );
  }

  onChangePlaceOfBirth(e) {
    this.setState({
      placeOfBirth: e.target.value
    },
      this.sendBirthDetails
    );
  }

  getMemberId = (id) => {
    this.setState ({
      father: id
    })
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

{/*           {this.state.members ? (
            <Members getMember={this.getMemberId} members={this.state.members} open={true}/>
          ) : null}
 */}
      </div>
    )
  }
}