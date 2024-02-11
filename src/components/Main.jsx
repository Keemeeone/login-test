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
    return (
        <>
            {children}
        </>
    );
};

export default Main;