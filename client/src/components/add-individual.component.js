import React, { Component } from 'react';


import MemberDataService from '../services/member.service';
import Events from './events/Events'

import BasicDetails from './IndividualBasicDetails';


const idConfig = require("../config/id.config");

export default class AddMember extends Component {
  constructor(props) {
    super(props);
    this.newMember = this.newMember.bind(this);
    this.getBasicDetails = this.getBasicDetails.bind(this);

    this.saveMember = this.saveMember.bind(this);


    this.state = {
      id: "I00"+idConfig.individual,
      firstName:"",
      middleName:"",
      lastName:"",
      nickName:"",
      selectedGender: 'other',


      selectedFile: null,
      submitted: false,

    };
  }

  

  newMember() {
    this.setState({
      id: "I00" + idConfig.individual,
      firstName: '',
      middleName: '',
      lastName:'',
      nickName:'',
      selectedGender:'other',
      selectedFile: null,
      submitted: false
    })
  }

  getBasicDetails = (fname, mname, lname, nname, gender) => {
    this.setState({
      firstName: fname,
      middleName: mname,
      lastName: lname,
      nickName: nname,
      gender
    })
    //console.log("General Details at Add Individual", this.state.firstName, this.state.middleName, this.state.lastName, this.state.nickName, this.state.gender);
  }

  saveMember() {
    var fileData = null;
    if (this.state.selectedFile != null) {
      fileData = new FormData();
      fileData.append('file', this.state.selectedFile);
    }
    var data = {
      id: this.state.id,
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      nickName: this.state.nickName,
      gender: this.state.selectedGender,
      photo: fileData,
    };

    MemberDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          firstName: response.data.firstName,

          submitted: true
        })
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    return(
      <div>
        <div className='submit-form'>
          {/*  Add code for events */}
          {this.state.submitted ? (
            <div>
              <h4>You Submitted successfully!</h4>
              <button className='btn btn-success' onClick={this.newMember}>
                Add
            </button>
            </div>
          ) : (
              <div>
                <div className="form-group">
                  <BasicDetails basicDetails={this.getBasicDetails} />
 
                  <button onClick={this.saveMember} className='btn btn-success'>
                    Submit
              </button>
                </div>
              </div>
            )}
        </div>
      </div>

    )
  }
}