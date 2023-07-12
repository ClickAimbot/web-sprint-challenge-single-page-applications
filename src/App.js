import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Homepage';
import Pizzaform from './Components/PizzaForm';
import formSchema from './Components/Validation';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  username: "",
  size: "",
  sauce: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  special: ""
}
const initialFormErrors = {
  username: "",
  size: "",
  sauce: "",
  topping: "",
  special: ""
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const onSubmit = () => {
    console.log(formValues)
    axios.post("https://reqres.in/api/orders", formValues)
    .then(res => {
      setUsers([ res.data, ...users ])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const onChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value})
  }

  return (
      <div className='App'>
        <nav>
          <h1 className='store-header'>BloomTech Goes Delivery</h1>
          <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="Help">Help</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pizza" element={<Pizzaform values={formValues} change={onChange} errors={formErrors} submit={onSubmit} />} />
        </Routes>
      </div>
  );
};
export default App;
