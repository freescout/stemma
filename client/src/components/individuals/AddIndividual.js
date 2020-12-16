import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import IndividuaDatalService from '../../services/IndividualService';
import BasicDetails from './BasicDetails';
import Events from '../Events';
import Contact from '../Contact';

const AddIndividual = () => {
  const initialIndividualState = {
   basicDetails: '',
   eventDetails: '',
   contactDetails: ''
  };
  const [individual, setIndividual] = useState(initialIndividualState);
  const [submitted, setSubmitted] = useState(false);

  const addBasicDetailsHandler = (...props) => {
    console.log(props);
    setIndividual({
      basicDetails: props[0]
    })
  }
  const getEventDetails = (...props) => {
    setIndividual({

    })
  }
  const saveIndividual = () => {
    var data = {
      name: individual.name,
      gender: individual.gender
    };

    IndividuaDatalService.create(data)
      .then(response => {
        setIndividual({
          name: response.data.name,
          gender: response.data.gender
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newIndividual = () => {
    setIndividual(initialIndividualState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newIndividual}>
            Add
          </button>
        </div>
      ) : (
          <div>
            <div className="form-group">
              <Tabs defaultActiveKey="basic" transition={false} id="noanim-tab-example">
                <Tab eventKey="basic" title="Basic">
                  <BasicDetails onAddBasicDetails={addBasicDetailsHandler} />
                </Tab>
                <Tab eventKey="events" title="Events">
                  <Events eventDetails={getEventDetails} />
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                  <Contact />
                </Tab>
              </Tabs>
              <button onClick={saveIndividual} className="btn btn-success">
                Submit
              </button>
            </div>

          </div>
        )}
    </div>
  );
};

export default AddIndividual;