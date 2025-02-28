import {useState} from "react";
function State1() {
    const [data,setData]=useState(0)
    function heyimstateclickme()
    {
        setData(data+1);
    }
     console.warn("__________")
  return (
    <div className="State1">
      <h5>{data}</h5>
      <button onClick={heyimstateclickme}>Hey Click Me I'm in State I Will Increase</button>
    </div>
  );
}
export default State1;