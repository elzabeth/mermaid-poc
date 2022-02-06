import React from 'react';

export default function Me(props)
{
    return <div>
        <h1>React Mermaid</h1>
        <div className="mermaid">{props.chart}</div>
    </div>
}