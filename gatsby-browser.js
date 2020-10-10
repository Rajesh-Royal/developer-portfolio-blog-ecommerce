import React from "react";
import "./src/styles/global.css";
import RootLayout from "./src/components/global/layouts/RootLayout";

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element, props }) => {
    return (
        <RootLayout>
            {element}
        </RootLayout>
    );
};