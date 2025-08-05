export const SearchBox = () => {

  return(
        <div className="container my-2">
            <input style={{
                width: "80%",
                padding:"8.5px",
                background:"#e8e5e480",
                border: "2px solid #e8e5e480"
            }} placeholder="Type the domain you want"></input>
            <button 
            style={
                {background:"#09757A",
                 padding: "10px 18px",
                 color:"#ffffff",
                 border : "none",
                 
                }}>
                Search Domain
                </button>
                 
                
        </div>
       
    )
}