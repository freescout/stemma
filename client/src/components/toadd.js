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
              <BasicDetails basicDetails={this.getBasicDetails}/>
              <div class='card'>
                <div class="card-body">
                  <h5 class="card-title">Events</h5>
                  <Birth birthDetails = {this.getBirthDetails}/>
                  <Death deathDetails={this.getDeathDetails}/>
                  
                </div>
              </div>
              <button onClick={this.saveMember} className='btn btn-success'>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>