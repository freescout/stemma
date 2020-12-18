import React, { useState, useEffect } from 'react';

const Birth = (props) => {

  const initialBirthDetails = {
    father: '',
    mother: '',
    placeOfBirth: '',
    dateOfBirth: '',
    members: []
  };

  const [birthDetails, setBirthDetails] = useState(initialBirthDetails);

  useEffect(() => {
    props.onAddBirthDetails(birthDetails)
  }, [birthDetails]) //add the state in dependency array and this useEffect will run whenever state changes//

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBirthDetails({ ...birthDetails, [name]: value }
    )
  };


  return (
    <div >
      <p class="card-text">Birth</p>
      <div class="form-group row">
        <div class="col">
          <input class="form-control" type="date" value={birthDetails.dateOfBirth} id="dateofBirth" placeholder="Date of Birth" onChange={handleInputChange} />
        </div>
        <div class="col">
          <input type="text" id="father" class="form-control" required placeholder="Father" value={birthDetails.father} onChange={handleInputChange} name='father' />
        </div>
        <div class="col">
          <input type="text" id="mother" class="form-control" required placeholder="Mother" value={birthDetails.mother} onChange={handleInputChange} name='mother' />
        </div>
        <div class="col">
          <input type="text" id="placeOfBirth" class="form-control" required placeholder="Place Of Birth" value={birthDetails.placeOfBirth} onChange={handleInputChange} name='placeOfBirth' />
        </div>
      </div>

 
    </div>
  )
}

export default Birth;