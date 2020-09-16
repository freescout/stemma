import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import AddIndividualMain from './add-individual.component';
import Events from './events/Events';
import Contact from './Contact';

export default class AddIndividual extends Component {
  render() {
    return(
      <div>
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
          <Tab eventKey="basic" title="Basic">
            <AddIndividualMain />
          </Tab>
          <Tab eventKey="events" title="Events">
            <Events/>
          </Tab>
          <Tab eventKey="contact" title="Contact" >
            <Contact />
          </Tab>
        </Tabs>
      </div>
    )
  }
}