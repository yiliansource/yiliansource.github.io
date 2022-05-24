/** @jsxImportSource @emotion/react */
import React, { useState, useContext, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

const BlobContext = React.createContext(null);

export const BlobProvider = ({ children }) => {
    const [blobRoot, setBlobRoot] = useState(null);

    return (
        <>
            <div
                id="__blobs"
                ref={(ref) => setBlobRoot(ref)}
                css={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, overflow: "hidden" }}
            ></div>

            <BlobContext.Provider value={blobRoot}>{children}</BlobContext.Provider>
        </>
    );
};

export const BlobScene = ({ position = [0, 0], children }) => {
    const blobRoot = useContext(BlobContext);

    const sceneRoot = (
        <div
            css={{
                position: "absolute",
                left: position[0],
                top: position[1],
            }}
        >
            <div
                css={{
                    width: 8,
                    height: 8,
                    background: "red",
                    opacity: 0.2,
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    zIndex: 100,
                }}
            ></div>

            {children}
        </div>
    );

    return blobRoot ? ReactDOM.createPortal(sceneRoot, blobRoot) : null;
};

export const BlobAnchoredScene = ({ override = {}, children }) => {
    const [anchor, setAnchor] = useState(null);
    const [position, setPosition] = useState(null);

    const updatePosition = useCallback(() => {
        const { left, top } = anchor.getBoundingClientRect();
        left += window.scrollX;
        top += window.scrollY;

        if (typeof override.left === "number") left = override.left;
        if (typeof override.top === "number") left = override.top;

        setPosition([left, top]);
    }, [anchor, override]);

    useEffect(() => {
        if (!anchor) return;

        const callback = () => updatePosition();
        window.addEventListener("resize", callback);
        updatePosition();

        return () => {
            window.removeEventListener("resize", callback);
        };
    }, [anchor, updatePosition]);

    return (
        <div ref={(ref) => setAnchor(ref)} data-blob-anchor>
            {position && <BlobScene position={position}>{children}</BlobScene>}
        </div>
    );
};

export const BlobShape = ({ shape = "", translate = [0, 0], rotate = 0, scale = 1 }) => {
    return (
        <svg
            viewBox="-500 -500 1000 1000"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            css={{
                position: "absolute",
                transform: `translate(-50%, -50%) translate(${translate.map((o) => o + "px").join(", ")})`,
            }}
        >
            <g transform={`rotate(${rotate}) scale(${scale})`}>
                <path d={shape} fill="#FBAE3C"></path>
            </g>
        </svg>
    );
};
export const BlobCircle = ({ translate = [0, 0], radius = 25 }) => {
    return (
        <svg
            viewBox="-0.5 -0.5 1 1"
            width="1"
            height="1"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            css={{
                position: "absolute",
                transform: `translate(-50%, -50%) translate(${translate.map((o) => o + "px").join(", ")})`,
            }}
        >
            <circle cx="0" cy="0" r={radius} fill="#FBAE3C" />
        </svg>
    );
};
