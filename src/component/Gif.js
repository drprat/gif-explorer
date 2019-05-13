import React, { Component } from "react";
export default (props) => {
  

    return (
      <div>
         <img height='100px' width='100px' alt={props.url} src={props.url}/>
      </div>
    );
  
}