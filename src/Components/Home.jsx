import React from "react";
import  { Link } from "react-router-dom";

export default function Home(){

  return(
    <>

        <div className="container text-black text-3xl">
            <h1>Welcome to the home page!</h1>
             <button  class="btn btn-primary" type="submit"><Link to = "/">Logout</Link></button> 
        </div>
    </>
  );

}