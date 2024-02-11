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
    };

    const circlesStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
    };
    const vectorStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 0
    };

    return (
        <div style={wrapperStyle}>
            <img src={"./Circles.svg"} alt="circle" style={circlesStyle} />
            <img src={"./Vector.svg"} alt="circle" style={vectorStyle} />
            <Main>
                <Login />
            </Main>
        </div>
    );
};

export default Wrapper;
