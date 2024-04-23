import React, { useEffect, useState } from "react";
import classes from "./useEffect.module.css";
const UseEffectHook = () => {
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("https://ziptasticapi.com/01094");

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      <div className={classes.useEffect}>
        <h1>UseEffect</h1>
        <p>The details fetched from api </p>
        <p>https://ziptasticapi.com/01094</p>
        <p>COUNTRY:{apiData.country}</p>
        <p>STATE:{apiData.state}</p>
        <p>CITY:{apiData.city}</p>
      </div>
    </>
  );
};
export default UseEffectHook;
