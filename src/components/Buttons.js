import satData from "./satData.js";
import "./styling.css";


const Buttons = ({filterByType, setSat, displaySats}) => {
  return(
      <div className="flex-container">
      {displaySats.map((sat, id) => {
        return (
          <div>
            <button onClick={() => filterByType(sat)} key={id}>
              {sat} Orbit
            </button>
    
          </div>
        );
      })}
    
        <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  )
 


};

export default Buttons;