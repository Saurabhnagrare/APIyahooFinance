import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
const ListByTicker = () => {
  const [listByTicker, setListByTicker] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apidojo-yahoo-finance-v1.p.rapidapi.com/screeners/list-by-ticker?ticker=AMRN",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "38d5b0ab56msh602e1a632e8a8afp158ebfjsnca060e0a022b",
              "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setListByTicker(data.finance.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
        <h1 className="text-center">List - By - Ticker</h1>
        <div className="container-fluid mt-4 m-0 table-responsive">
          <table className="table table-bordered table-striped table-hover ">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>CanonicalName</th>
                <th>IsPremiumScreener</th>
                <th>IconUrl</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {listByTicker.map((ticker, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{ticker.name}</td>
                  <td>{ticker.canonicalName}</td>
                  <td>{ticker.isPremiumScreener}</td>
                  <td> {ticker.iconUrl}</td>
                  <td>{ticker.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListByTicker;
