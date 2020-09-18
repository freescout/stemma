import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import AddIndividualMain from './add-individual.component';
import Events from './Events';
import Contact from './Contact';

export default class AddIndividual extends Component {
  constructor(props) {
    super(props);
    
    this.getIndividualId = this.getIndividualId.bind(this);

    this.state = {
      id:"'",
    }
  }

  getIndividualId = (id) => {
    this.setState({
      id
    })
  }
  render() {
    return(
      <div>
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
          <Tab eventKey="basic" title="Basic">
            <AddIndividualMain individualId={this.getIndividualId}/>
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