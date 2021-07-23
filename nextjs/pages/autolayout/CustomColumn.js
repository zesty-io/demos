import React from 'react';

export function CustomColumn(props) {
    return (
        <div
            className={"Column"}
            style={{
                display: "flex",
                flexDirection: "column",
                flex: props.data.width,
                margin: "24px"
            }}
        >
            {props.children}
        </div>
    );
}
