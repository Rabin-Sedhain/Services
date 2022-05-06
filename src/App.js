/**
 * @description      :
 * @author           : prith
 * @group            :
 * @created          : 05/05/2022 - 22:19:29
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/05/2022
 * - Author          : prith
 * - Modification    :
 **/

import React, { useEffect, useState } from "react";

import Category from "./Components/Category";
import Header from "./Components/Header";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://admin.naxa.com.np/api/services"
    );
    const datas = await res.json();
    setData(datas);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
    <Header data={data}/>
      <Category data={data} />
    
    </div>
  );
};
export default App;
