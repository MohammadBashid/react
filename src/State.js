import {useState} from "react";
function State() {
    const [data,setData]=useState("I'm Not In State");
    function toUpdateState()
    {
        setData("I'm In State Now");
    }
    // let data="anil";
    // function updateData()
    //  {
    // //    data="sidhu";
    // //    alert(data);
    //  }
     console.warn("__________")
  return (
    <div className="State">
      {/* <h5>{data}</h5> */}
      <h5>{data}</h5>
      {/* <button onClick={updateData}>Updated Data</button> */}
      <button onClick={toUpdateState}>To Update State</button>
    </div>
  );
}
export default State;