import satData from "./satData.js"

const Buttons = ({filterByType, setSat, displaySats}) => {
  // const filterByType = props.filterByType;
  // const setSat = props.setSat;
  // const displaySats = props.displaySats;
  return(
      <div>
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