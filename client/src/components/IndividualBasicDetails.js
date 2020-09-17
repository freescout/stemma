import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

export default class IndividualBasicDetails extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeNickName = this.onChangeNickName.bind(this);
    this.onChangeGenderHandler = this.onChangeGenderHandler.bind(this);
    this.onChangeFileHandler = this.onChangeFileHandler.bind(this);

    this.state = {
      firstName: '',
      middleName: '',
      lastName:'',
      nickName:'',
      gender: 'other'
    }
  }

  sendGeneralDetails = () => {
    console.log("General Details at General Detials", this.state.firstName, this.state.middleName, this.state.lastName, this.state.nickName, this.state.gender);
    this.props.basicDetails(this.state.firstName, this.state.middleName, this.state.lastName, this.state.nickName, this.state.gender);
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
    this.sendGeneralDetails();
  }


  onChangeGenderHandler(e) {
    
    this.setState({
      gender: e.target.value
    });
    console.log("Gender Selected at basic", this.state.gender);
    this.sendGeneralDetails();
  }

  onChangeFileHandler(e) {
    console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0],

    })
  }
  render() {
    return (
      <div>
        <div class="form-row mb-4">
          <div class="col">
            <input type="text" id="firstName" class="form-control" required placeholder="First name" value={this.state.firstName} onChange={this.onChangeFirstName} name='firstName' />
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
                checked={this.state.gender === "male"}
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
                checked={this.state.gender === "female"}
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
                checked={this.state.gender === "other"}
                onChange={this.onChangeGenderHandler}
                className="form-check-input"
              />
                  Other
                </label>
          </div>
        </div>
{/*         <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
          </div> */}
{/*           <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01" onChange={this.onChangeFileHandler} />
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
          </div> */}
          <Form>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Choose file" />
            </Form.Group>
          </Form>
        {/* </div> */}
      </div>
    )
  }
}