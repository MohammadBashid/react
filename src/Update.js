
function Update() {
  let data="Mohammad Shaik"
 function apple()
 {
    data="I'm Now Updated";
        alert(data);
    // alert("Update Called");
 }
 return (
    <div>
      <h4>Update Component</h4>
      {/* <button onClick={alert("Update_called")}>Click Me</button> */}
      {/* <button onClick={()=>alert("Hello Update")}>U-C</button> */}
      {/* <button onClick={()=>apple()}>Click Me</button> */}
      <button onClick={apple}>Here I'm To Update</button>
    </div>
  );
} 
export default Update;