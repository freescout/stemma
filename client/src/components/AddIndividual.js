import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import MemberDataService from '../services/member.service';
import BasicDetails from './IndividualBasicDetails';
import Events from './Events';
import Contact from './Contact';


const idConfig = require("../config/id.config");

export default class AddMember extends Component {
  constructor(props) {
    super(props);
    this.newMember = this.newMember.bind(this);
    this.getBasicDetails = this.getBasicDetails.bind(this);

    this.saveMember = this.saveMember.bind(this);


    this.state = {
      id:"",
      firstName:"",
      middleName:"",
      lastName:"",
      nickName:"",
      selectedGender: 'other',

      placeOfBirth:"",
      dateOfBirth:"",
      father:"",
      mother: "",


      selectedFile: null,
      submitted: false,

    };
  }

  

  newMember() {
    this.setState({
      id: "",
      firstName: '',
      middleName: '',
      lastName:'',
      nickName:'',
      selectedGender:'other',
      selectedFile: null,
      dateOfBirth: '',
      father: '',
      mother: '',
      placeOfBirth: '',
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

  getEventDetails = (...props) => {
    this.setState({
      dateOfBirth: props[0].dateOfBirth,
      placeOfBirth: props[0].placeOfBirth,
      father: props[0].father,
      mother: props[0].mother,

    })

  }

  saveMember() {
    var fileData = null;
    console.log("reached save member")
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
      dateOfBirth: this.state.dateOfBirth,
      father: this.state.father,
      mother: this.state.mother,
      placeOfBirth: this.state.placeOfBirth
    };
   console.log("Data at Add Indiv", data);
    MemberDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data._id,
          firstName: response.data.firstName,

          submitted: true
        })
        //console.log("Printing id ", response.data._id);
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
                  <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                    <Tab eventKey="basic" title="Basic">
                      <BasicDetails basicDetails={this.getBasicDetails} />
                    </Tab>
                    <Tab eventKey="events" title="Events">
                      <Events eventDetails={this.getEventDetails} />
                    </Tab>
                    <Tab eventKey="contact" title="Contact" >
                      <Contact />
                    </Tab>
                  </Tabs>
 
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