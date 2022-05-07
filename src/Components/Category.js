import React from "react"
import "./Category.css";
import IconSpeaker from "./../icon.svg"
const parse =require("html-react-parser");

const Category = ({ data }) => {
  return (
    <>
    
      <div className="mt-5 mb-4" style={{backgroundColor: "#f4f4f4"}}>
        <div className="container-xxl">
          {data.map((val, i) => {
             // const [photo, id, description1, description2, icon, title]= val;
            return (
              
              <div key={i} className={i % 2 === 0 ? "row mt-2 d-flex" : "row mt-2 d-flex service-reverse"} > 

           
                <div id={val.id} key={i} className=" img-div col-12 col-md-12 col-lg-6 align-center justify-content-center d-flex mx-auto">
                  <img className=" img-fluid" src={val.photo} alt={val.photo} width="250px" />
                </div>

                <div className="content-div col-12 col-md-12 col-lg-6 mx-auto align-center mb-5">
                <img className="icon" src= {IconSpeaker} alt="icon"/>
                
                 
                 

                  <h1> {val.title} </h1>
                  <div className="desc1 "> {parse(val.description1)} </div>
                 <div className="desc2 mt-2 p-2 " style={{ backgroundColor: "#e9ebff"}}>  {parse(val.description2)}  </div>
                </div>
            </div>
            );
          })}
          </div>
        
      </div>
    </>
  );
};
export default Category;
