import React, { useState } from 'react';
import './Form.css';

const Pizzaform = (props) => {
    const { submit, change } = props;
    const { name, topping } = props.values
    
    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div className="container" id="pizza-form">
            <form onSubmit={onSubmit}>
                <label id="name-input"> Name
                    <input 
                        placeholder="Input Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </label>
                <label id="size-dropdown" for='size-select'>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                    <select name='size' id='size-select'>
                        <option value="">--Please Choose an Option--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <label> 
                    <h3>Choice of Sauce</h3>
                    <input type="radio" name="Sauce" value="Red Sauce" />
                    <label>Red Sauce</label>
                    <input type="radio" name="Sauce" value="Pesto Sauce" />
                    <label>Pesto Sauce</label>
                    <input type="radio" name="Sauce" value="Garlic Red Sauce" />
                    <label>Garlic Red Sauce</label>
                </label>
                <label>
                    <h3>Toppings</h3>
                    <input type="checkbox" id="1" name='topping' value='Pepperoni' checked={topping} />
                    <label>Pepperoni</label> 
                    <input type="checkbox" id="2" name='topping' value='Chicken' checked={topping} />
                    <label>Chicken</label>
                    <input type="checkbox" id="3" name='topping' value='Bacon' checked={topping} />
                    <label>Bacon</label>
                    <input type="checkbox" id="4" name='topping' value='Onions' checked={topping} />
                    <label>Onions</label>
                    <input type="checkbox" id="5" name="topping" value='BellPeppers' checked={topping} />
                    <label>BellPeppers</label>
                </label>
                <label>
                    <h3>Choice of Substitute</h3>
                    <input 
                        type='radio'
                        name='substitute'
                    />
                </label>
                <label id="special-text"> 
                    <h3>Special Instructions</h3>
                    <input 
                        id='container-special'
                        placeholder="Anything else you'd like to add?"
                        type='text'
                        name="Special"
                    />
                </label>
                <footer>
                    <label> 
                        <h3>Ready to eat?</h3>
                        <input 
                            type="submit"
                            value="Add to order"
                            onSubmit={onSubmit}
                        />
                    </label>
                </footer>
            </form>
        </div>
    )
}

export default Pizzaform;