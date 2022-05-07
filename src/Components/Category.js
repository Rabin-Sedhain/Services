/**
 * @description      :
 * @author           : prith
 * @group            :
 * @created          : 05/05/2022 - 22:24:51
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/05/2022
 * - Author          : prith
 * - Modification    :
 **/
import React from "react"
import "./Category.css";
import iconSpeaker from "./../icon.svg"
const parse =require("html-react-parser");

const Category = ({ data }) => {
  return (
    <>
      <div className="container mt-5 mb-4">
        
          {data.map((val, i) => {
             // const [photo, id, description1, description2, icon, title]= val;
            return (

              <div className={i % 2 === 0 ? "row mt-2 d-flex" : "row mt-2 d-flex service-reverse"} > 

           
                <div id={val.id} key={i} className=" img-div col-12 col-md-12 col-lg-6 align-center justify-content-center d-flex mx-auto">
                  <img className=" img-fluid" src={val.photo} alt={val.photo} width="250px" />
                </div>
                <div className="content-div col-12 col-md-12 col-lg-6 mx-auto align-center mb-5">
                  <img className="w-40px" src= {iconSpeaker} alt="icon"/>
                  <h1> {val.title} </h1>
                  <div className="desc1 "> {parse(val.description1)} </div>
                 <div className="desc2 mt-2 p-2 " style={{ backgroundColor: "#e9ebff"}}>  {parse(val.description2)}  </div>
                </div>
            </div>
            );
          })}
        
      </div>
    </>
  );
};
export default Category;
