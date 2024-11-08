import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import Axios from "axios";
let UpdatePg=()=>{
    const [pname,setpname]=useState("");
    const [paddress,setpaddress]=useState("");
    const [pfacilities,setpfacilities]=useState("");
    const [oname,setoname]=useState("");
    const [oemail,setoemail]=useState("");
    const [ocontact,setocontact]=useState("");

    const addToList=()=>{
        Axios.post("http://localhost:5000/update",
        {
            pname: pname,
            paddress: paddress,
            pfacilities: pfacilities,
            oname: oname,
            oemail: oemail,
            ocontact: ocontact,
        });
        alert("Updated your asset successfully!!")
    };

    return(
    <>
    <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
    <section className="add-pg p-3" style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "center",
            marginTop: "20px",
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
            borderRadius: "5%",
          }}>
        <div className="container">
            <div className="row">
                <div className="col" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <p className="h4 text-dark" 
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    // fontFamily: "cursive",
                    color: "#0099ff",
                    paddingTop: "20px",
                    // textDecoration: "underline",
                    marginBottom: "0px",
                  }}>Update asset</p>
                    <p className="fst-italic"></p>
                </div>
            </div>
            <div className="row" style={{
                display: "flex",
                flexDirection: "column",
                padding: "7%",
                width: "100%",
              }}>
                <div className="col md-4">
                    <form>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setpname(event.target.value);
                            }} className="form-control" placeholder=" Name"
                            style={{ padding: "10px 10px", borderRadius: "2%", border: "1px solid grey", marginBottom: "15px"}}/>
                        </div>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setpaddress(event.target.value);
                            }} className="form-control" placeholder="Driver"  style={{ padding: "10px 10px", borderRadius: "2%", border: "1px solid grey", marginBottom: "15px"}}/>
                        </div>
                        <div className="mb-2">
                            <input type="text" 
                            onChange={(event)=>{
                                setpfacilities(event.target.value);
                            }} className="form-control" placeholder="Latitude"  style={{ padding: "10px 10px", borderRadius: "2%", border: "1px solid grey", marginBottom: "15px"}}/>
                        </div>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setoname(event.target.value);
                            }} className="form-control" placeholder="Longitude"  style={{ padding: "10px 10px", borderRadius: "2%", border: "1px solid grey", marginBottom: "15px"}}/>
                        </div>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setoemail(event.target.value);
                            }} className="form-control" placeholder="Speed"  style={{ padding: "10px 10px", borderRadius: "2%", border: "1px solid grey", marginBottom: "15px"}}/>
                        </div>
                        <div className="mb-2">
                            <input type="number" onChange={(event)=>{
                                setocontact(event.target.value);
                            }} className="form-control" placeholder="Owner Contact Number"  style={{ padding: "10px 10px", borderRadius: "2%", border: "1px solid grey", marginBottom: "15px"}}/>
                        </div>
                        <div className="mb-2">
                            <input type="submit" onClick={addToList} className="btn btn-primary" value="Update" style={{
                  color: "white",
                backgroundColor: " #0099ff",
                marginLeft: "8px",
                fontWeight: "600",
                // border: "1.4px solid blue",
                marginTop: "20px",
                borderRadius: "24px",
                width: "100%",
                padding: "1vh 1vh",
                textDecoration: "none",
                fontWeight: "600",
                // marginLeft: "130px",
                fontSize: "20px",
                
                }}/>
                            <Link to={"/pg/list"} className="btn btn-dark ms-2" style={{
                  color: "white",
                backgroundColor: " #0099ff",
                fontWeight: "600",
                // border: "1.4px solid blue",
                marginTop: "20px",
                borderRadius: "24px",
                width: "100%",
                padding: "1vh 1vh",
                textDecoration: "none",
                fontWeight: "600",
                // marginLeft: "130px",
                fontSize: "20px",
                
                }}>Home</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
    </>
    )
};
export default UpdatePg;