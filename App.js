
    
    const parent=React.createElement("div",{id:"parent"}
        ,React.createElement("div",{id:"child"},[React.createElement("h1",{},"parent to child"),React.createElement("h2",{},"parent to child",)]))
    
    
    
    
    
    
    
    
    
    // const heading=React.createElement("h1",{id:"heading"},"welcome from react")
    const root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)
