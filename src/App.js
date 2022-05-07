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

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReduceFetch } from "./Reducer";

import Category from "./Components/Category";
import Header from "./Components/Header";

const App = () => {
  const data = useSelector((state) => state.reduce.reduce);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReduceFetch());
  }, [dispatch]);
  console.log(data);

  return (
    <div>
    
      <Header data={data} />
      <Category data={data} />
    </div>
  );
};
export default App;
