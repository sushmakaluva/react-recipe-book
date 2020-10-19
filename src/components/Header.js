import React from 'react';

function Header() {

    const headerStyle = {
        color: "white",
        backgroundColor: "Black",
        padding: "10px",
        fontFamily: "Arial",
        marginBottom: "20px",
        width:"100%",
        textAlign:"center"

    };

    return (
        <div>
            <header style={headerStyle}>
                <h1> Recipe Book</h1>
            </header>
        </div>

    )
}

export default Header;