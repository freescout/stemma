import React, { useState } from 'react';

import IndividualDataService from '../../services/IndividualService';

const SearchIndividual = (props) => {

  const initialSearchDetails = {
    firstName: '',
    middleName: '',
    lastName: '',
    nickName: '',
  };
  const [searchDetails, setSearchDetails] = useState(initialSearchDetails);
  const [individuals, setIndividuals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSearchDetails({ ...searchDetails, [name]: value }
    )
  };
  const searchName = () => {
    console.log("Searchname calling", searchDetails.firstName + searchDetails.lastName);
    IndividualDataService.findByName(searchDetails.firstName, searchDetails.lastName)
      .then(response => {
        setIndividuals({
        individuals: response.data
      });
      console.log("Printing response searchName");
      console.log(response.data);
      console.log("indiv", individuals);

    })
    .catch(e => {
      console.log(e);
    }) 

  }
  return (
    <div>
      <div>{props.name}</div>
      <div class="form-row mb-4">
        <div class="col">
          <input type="text" id="firstName" class="form-control" required placeholder="First name" value={searchDetails.firstName} onChange={handleInputChange} name='firstName' />
        </div>
        <div class="col">
          <input type="text" id="middleName" class="form-control" placeholder="Middle Name" value={searchDetails.middleName} onChange={handleInputChange} name='middleName' />
        </div>
        <div class="col">
          <input type="text" id="lastName" class="form-control" required placeholder="Last Name" value={searchDetails.lastName} onChange={handleInputChange} name='lastName' />
        </div>
        <div class="col">
          <input type="text" id="nickName" class="form-control" placeholder="Nick Name" value={searchDetails.nickName} onChange={handleInputChange} name='nickName' />
        </div>
      </div>`
      <div className="input-group-append">
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={searchName}
      >
        Search
      </button>
</div>
      <h4>Select Partner from the  List</h4>
      <ul className="list-group">
        {individuals &&
          individuals.map((individual, index) => (

            <li
              className={"list-group-item" + (index === currentIndex ? "active" : "")}
              onClick={() => this.setActiveindividual(individual, index)}
              key={index}
            >
              {individual.name.firstName} {" "} {individual.name.lastName}
            </li>
          ))}
      </ul> 
    </div>
  )
  console.log("Searchname calling", props.name);

}

export default SearchIndividual;