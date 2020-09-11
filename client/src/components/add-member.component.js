import React, { Component } from 'react';

import MemberDataService from '../services/member.service';
import Birth from './events/Birth';

const idConfig = require("../config/id.config");

export default class AddMember extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeNickName = this.onChangeNickName.bind(this);
    this.onChangeGenderHandler = this.onChangeGenderHandler.bind(this);
    this.onChangeFileHandler = this.onChangeFileHandler.bind(this);
    this.newMember = this.newMember.bind(this);
    this.saveMember = this.saveMember.bind(this);
    this.getBirthDetails = this.getBirthDetails.bind(this);

    this.state = {
      id: "I00"+idConfig.individual,
      firstName:"",
      middleName:"",
      lastName:"",
      nickName:"",
      selectedGender: 'other',
      birthId:"eb00"+idConfig.individual,
      dateOfBirth: "",
      father: "",
      mother: "",
      placeOfBirth: "",
      selectedFile: null,
      submitted: false,

    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeMiddleName(e) {
    this.setState({
      middleName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangeNickName(e) {
    this.setState({
      nickName: e.target.value
    });
  }


  onChangeId(e) {
    this.setState({
      id:e.target.value
    });
  }

  onChangeGenderHandler(e) {
    console.log("Gender Selected ", e.target.value);
    this.setState({
      selectedGender: e.target.value
    });
    console.log("Selected Option ", this.state.selectedGender);
  }

  onChangeFileHandler(e) {
    console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0],

    })
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
      dateOfBirth:"",
      father:"",
      mother:"",
      placeOfBirth:"",

      submitted: false
    })
  }

  getBirthDetails = (dob, father, mother, pob) => {
    this.setState({
      dateOfBirth: dob,
      father: father,
      mother: mother,
      placeOfBirth: pob

    })
    console.log("Birth details at Add Member ", this.state.dateOfBirth, this.state.father, this.state.mother, this.state.placeOfBirth )
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
      birthId:this.state.birthId,
      dateOfBirth: this.state.dateOfBirth,
      father: this.state.father,
      mother: this.state.mother,
      placeOfBirth:  this.state.placeOfBirth
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
              <input
                  type='text'
                  readOnly
                  className='form-control'
                  required
                  placeholder='ID'
                  id='id'
                  required
                  value={this.state.id}
                  onChange={this.onChangeId}
                  name='id'
                />
            <div class="form-row mb-4">
              <div class="col">
                <input type="text" id="firstName" class="form-control" required placeholder="First name" value={this.state.firstName} onChange={this.onChangeFirstName} name='firstName'/>
              </div>
                <div class="col">
                  <input type="text" id="middleName" class="form-control" placeholder="Middle Name" value={this.state.middleName} onChange={this.onChangeMiddleName} name='middleName' />
                </div>
              <div class="col">
                <input type="text" id="lastName" class="form-control" required placeholder="Last Name" value={this.state.lastName} onChange={this.onChangeLastName} name='lastName' />
              </div>
              <div class="col">
                <input type="text" id="nickName" class="form-control" placeholder="Nick Name" value={this.state.nickName} onChange={this.onChangeNickName} name='nickName' />            
              </div>
            </div>
            <div>
              <div class="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="male"
                    checked={this.state.selectedGender === "male"}
                    onChange={this.onChangeGenderHandler}
                    className="form-check-input"
                  />
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="female"
                    checked={this.state.selectedGender === "female"}
                    onChange={this.onChangeGenderHandler}
                    className="form-check-input"
                  />
                  Female
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="other"
                    checked={this.state.selectedGender === "other"}
                    onChange={this.onChangeGenderHandler}
                    className="form-check-input"
                  />
                  Other
                </label>
               </div>
            </div> 
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
              </div>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01" onChange={this.onChangeFileHandler}/>
                  <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>
            </div>
            <Birth birthDetails = {this.getBirthDetails}/>
            <button onClick={this.saveMember} className='btn btn-success'>
              Submit
            </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}