import React, { useEffect } from 'react';
import Me from "./Me";
import mermaid from 'mermaid';
import "./styles.css";

mermaid.initialize({
	startOnLoad: true,
  securityLevel: 'loose'
});

function App() {

  useEffect(()=>{
    window.callbackFunction = e => alert('A callback was triggered');
    mermaid.contentLoaded();
  })

  return (
    <div className="App">
      <Me
        chart={`graph LR;
        A-->B;
        subgraph one
            a1-->a2
            subgraph two
            b1-->b2
            end
            end
        a1-->A;
        
        linkStyle 0 stroke:blue,stroke-width:4px;
        style one fill:#f7f,stroke:#200,stroke-width:4px;
        style two fill:#FF0000,stroke:#200,stroke-width:4px;
        style B fill:#FFA500,stroke:#800,stroke-width:2px,color:#c9d7e4;
        click A callbackFunction "Tooltip for a callback";`
        }
      />
    </div>
  );
}

export default App;