import React from 'react';
export function CustomTextarea(props) {
    return <div  style={{
        margin: "16px"
    }}>
        <h1>Custom  Textarea Component</h1>
        <p style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "red"
        }} dangerouslySetInnerHTML={{ __html: props.data.html }} />
    </div>;
}
