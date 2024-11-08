import React, { useEffect ,useState} from "react";
import Axios from "axios";

let locList=[],setLocList;

function Records(props){

    [locList,setLocList]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:5000/getLocation?key="+props.id).then((response)=>{
            setLocList(response.data);
        });
    }
    )
    return(
    <table class="fixed_header">
        <thead>
        <tr>
            <th>id</th>
            <th>latitude</th>
            <th>longitude</th>
        </tr>
        </thead>
        <tbody>
            {locList.map((val)=>{
               
                return(
                    <tr>
                        <td>{val.key}</td>
                        <td>{val.lati}</td>
                        <td>{val.long}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}

export default Records;