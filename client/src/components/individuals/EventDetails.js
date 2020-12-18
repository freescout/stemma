import React, { useState, useEffect } from 'react';

import Birth from './events/Birth';
import Death from './events/Death';
import Wedding from './events/Wedding';
import Divorce from './events/Divorce';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const EventDetails = React.memo(props => {

  const [eventDetails, setEventDetails] = useState(null);
  const [selected, setSelected] = useState(null);

  const addBirthDetailsHandler = (...props) => {
    //console.log(props);
    setEventDetails({
      birthDetails: props[0]
    })

  }

  const addDeathDetailsHandler = (...props) => {
    //console.log(props);

  }

  const addWeddingDetailsHandler = (...props) => {
    //console.log(props);

  }
  
  const addDivorceDetailsHandler = (...props) => {
    //console.log(props);

  }



  const handleSelect = (e) => {
    setSelected({
      selected: e
    })
  }

  let otherEvents = null;

  if (selected === "wedding") {
    otherEvents = (
      <Wedding weddingDetails={addWeddingDetailsHandler} />
    )
  }
  else if (selected === "divorce") {
    otherEvents = (
      <Divorce divorceDetails={addDivorceDetailsHandler} />
    )
  }
  else {
    otherEvents = (
      <div></div>
    )
  }
  return (
    
    <div>
      <div class='card'>
        <div class="card-body">
          <h5 class="card-title">Events</h5>
          <Birth onAddBirthDetails={addBirthDetailsHandler} />
          <Death onAddDeathDetails={addDeathDetailsHandler} />
         
          <DropdownButton
            alignRight
            title="Other Events"
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="wedding">Wedding</Dropdown.Item>
            <Dropdown.Item eventKey="divorce">Divorce</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="other">Other</Dropdown.Item>
          </DropdownButton>
          {otherEvents}

        </div>
      </div>
    </div>
  )


})

export default EventDetails;