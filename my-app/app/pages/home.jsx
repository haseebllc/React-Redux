import React from "react";
import { useDispatch, useSelector } from "react-redux";

// slice/reducer fetch asyncthunkfunction
import { fetchData } from "../../reducers/KidsProductsSlice";

const Kids = () => {
  // dispatch
  const dispatch = useDispatch();

  // fetch api from slice to update state
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // get state from redux slice
  const { loading, data } = useSelector((state) => state.KidsProductsSliceKey);

  if (loading) return <p>loading...</p>;
  return (
    <>
      {data.map((elem) => (
        <p>{data.something}</p>
      ))}
    </>
  );
};

export default Kids;
