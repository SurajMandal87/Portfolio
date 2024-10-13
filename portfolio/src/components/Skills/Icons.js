import React from "react";

function Icons({ data }) {
  return (
    <div className="skillset_icon">
      <div className="skillset_icon_img">
        <img src={data.src} alt={data.name} /> 
      </div>
      <span className="skillset_icon_name"> {data.name} </span>
    </div>
  );
}

export default Icons;
