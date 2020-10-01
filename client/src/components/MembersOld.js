import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Members = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const showModal = () => setIsOpen(true);
  console.log("Props at memebers", props);
/*   sendSelectedMember = () => {
    props.birthDetails(this.state.dateOfBirth, this.state.father, this.state.mother, this.state.placeOfBirth);
  }  */

  return (
    <div>
      { props.members ? 
      (
          <Modal show={isOpen} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Select Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="card" >
                <ul class="list-group list-group-flush">
                  {props.members.map((member) => {
                    console.log(member.name.firstName);
                    return (
                      <li class="list-group-item">{member.name.firstName}</li>
                    )
                  })}

                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
          </Button>
              <Button variant="primary" onClick={closeModal}>
                Save Changes
          </Button>
            </Modal.Footer>
          </Modal>
      ) :
      (<div/>)
      }
      {/* <button onClick={showModal}>Display Modal</button> */}

    </div>

/*     <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div class="card" >
          <ul class="list-group list-group-flush">
            {props.members.map((member) => {
              console.log(member.name.firstName);
              return (
                <li class="list-group-item">{member.name.firstName}</li>
              )
            })}

          </ul>
        </div> 
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Select</Button>
      </Modal.Footer>
    </Modal.Dialog> */
  )
};

export default Members;