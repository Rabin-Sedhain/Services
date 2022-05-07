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

  return (
    <>
      {/* Use of prop/s / */}
      <Header data={data} />
      {/* Use of redux */}
      <Category />
    </>
  );
};
export default App;
