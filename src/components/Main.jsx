/**
 * Main Component
 * 
 * This component represents the main content area of the application.
 * 
 * @file Main.jsx
 * @param {Object} props - Props for the Main component.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the main content area.
 * @author Heewon Kim
 */

import React from "react";

const Main = ({ children }) => {
    const circlesStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 0
    };
    const vectorStyle = {
        position: 'absolute',
        maxHeight: '100%',
        top: 0,
        right: 0,
        zIndex: 0
    };
    return (
        <>
            <img src={"./Circles.svg"} alt="circle" style={circlesStyle} />
            <img src={"./Vector.svg"} alt="circle" style={vectorStyle} />
            {children}
        </>
    );
};

export default Main;