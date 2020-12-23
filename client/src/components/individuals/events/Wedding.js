import React, { useState, useEffect } from 'react';

const Wedding = (props) => {
  const initialWeddingDetails = {
    date: '',
    partner: '',
    place: ''
  }

  const [weddingDetails, setWeddingDetails] = useState(initialWeddingDetails);

  useEffect(() => {
    props.onAddWeddingDetails(weddingDetails)
  }, [weddingDetails]) //add the state in dependency array and this useEffect will run whenever state changes//

  const handleInputChange = event => {
    const { name, value } = event.target;
    setWeddingDetails({ ...weddingDetails, [name]: value }
    )
  };

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Wedding</h5>
          <div class="col">
            <input type="text" value={weddingDetails.partner} id="partner" placeholder="Partner" onChange={handleInputChange} />
          </div>
          <div class="col">
            <input type="date" value={weddingDetails.date} id="date" placeholder="Date" onChange={handleInputChange} />
          </div>
          <div class="col">
            <input type="text" id="place" value={weddingDetails.place} placeholder="Place" onChange={handleInputChange} name='place' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wedding;