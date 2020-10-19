import React from 'react'

function Form() {
    return (
        <div>
            <form className="search-form">
                <input type="text" className="search-bar" />
                <button className="search-button" type="Submit">Search</button>
            </form>
        </div>
    )
}

export default Form;