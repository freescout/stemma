import React, { useState } from 'react';
import IndividuaDatalService from '../services/IndividualService';

const AddIndividual = () => {
  const initialIndividualState = {
    name: "",
    gender: "other",
  };
  const [individual, setIndividual] = useState(initialIndividualState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setIndividual({...individual, [name]:value});
  };

  const saveIndividual = () => {
    var data = {
      name: individual.title,
      gender: individual.gender
    };

    IndividuaDatalService.create(data)
      .then
  }
}