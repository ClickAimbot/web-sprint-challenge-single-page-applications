import React from 'react';

const Form = (props) => {
    const { submit } = props
    // const { name, size, topping } = props.value

    const onChange = (e) => {

    }

    const onSubmit = (e) => {
        
    }

    return (
        <div id="pizza-form">
            <form>
                <label id="name-input"> Name
                    <input 
                        type="text"
                        name="name"
                        value=''
                        onChange={onChange}
                    />
                </label>
                <label id="size-dropdown"> Choice of Size
                    <h4>Required</h4>
                    <input 
                        type=""
                        name="size"
                        value=''
                        onChange={onchange}
                    />
                </label>
                <label> Choice of Sauce
                    <input 
                        type="radio"
                        name="sauce"
                        value=""
                        onChange={onChange}
                    />
                </label>
                <label> Add Toppings
                    <input 
                        type="checkbox"
                        name="toppings"
                        checked=''
                        onChange={onChange}
                    />
                </label>
                <label> Choice of Substitute
                    <input 
                        type="text"
                        name='substitute'
                    />
                </label>
                <label id="special-text"> Special Instructions
                    <input />
                </label>
                <footer>
                    <label> Add to order
                        <input 
                            type="submit"
                            onSubmit={onSubmit}
                        />
                    </label>
                </footer>
            </form>
        </div>
    )
}

export default Form;