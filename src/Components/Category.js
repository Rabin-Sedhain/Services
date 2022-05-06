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
import React from "react";
import "./Category.css";

const Category = ({ data }) => {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="row">
          {data.map((val) => {
             // const [photo, id, description1, description2, icon, title]= val;
            return (
           <>
                <div className=" img-div col-12 col-md-12 col-lg-5 align-center justify-content-center d-flex mx-auto">
                  <img className=" img-fluid" src={val.photo} alt={val.photo} width="250px" />
                </div>
                <div className="content-div col-12 col-md-12 col-lg-6 mx-auto align-center mb-5">
                  <img src= {val.icon} alt={val.icon}/>
                  <h1> {val.title} </h1>
                  <p className="desc1 "> {val.description1} </p>
                 <div className="desc2 mt-2"> <p> {val.description2} </p> </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Category;
