/**
 * Wrapper Component
 * 
 * Wrapper component containing the Main component and Login component.
 * 
 * @file Wrapper.jsx
 * @author Heewon Kim
 */

import React from "react";
import Main from "./Main";
import Login from "./Login/Login";

const Wrapper = () => {
    const wrapperStyle = {
        backgroundColor: '#244BC5',
        position: 'relative',
    };

    return (
        <div style={wrapperStyle}>
            <Main>
                <Login />
            </Main>
        </div>
    );
};

export default Wrapper;
