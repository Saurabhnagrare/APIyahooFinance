import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol=INTC",
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
            setRecommendations(data.finance.result[0].quotes);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
    

  return (
    <div className="App">
    <Navbar/>
        <div>
            <h1 className="text-center">Recommendations</h1>
            <div className="container-fluid mt-4 m-0 table-responsive">
            <table className="table table-bordered table-striped table-hover ">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Language</th>
                  <th>Region</th>
                  <th>Quote Type</th>
                  <th>Type Disp</th>
                  <th>Quote Source Name</th>
                  <th>Triggerable</th>
                  <th>Custom Price Alert Confidence</th>
                  <th>First Trade Date Milliseconds</th>
                  <th>Price Hint</th>
                  <th>Pre Market Change</th>
                  <th>Pre Market Change Percent</th>
                  <th>Pre Market Time</th>
                  <th>Pre Market Price</th>
                  <th>Regular Market Change</th>
                  <th>Regular Market Change Percent</th>
                  <th>Regular Market Time</th>
                  <th>Regular Market Price</th>
                  <th>Regular Market Previous Close</th>
                  <th>Exchange</th>
                  <th>Market</th>
                  <th>Full Exchange Name</th>
                  <th>Short Name</th>
                  <th>Market State</th>
                  <th>Source Interval</th>
                  <th>Exchange Data Delayed By</th>
                  <th>Exchange Timezone Name</th>
                  <th>Exchange Timezone Short Name</th>
                  <th>Gmt Off Set Milliseconds</th>
                  <th>Esg Populated</th>
                  <th>Tradeable</th>
                  <th>Crypto Tradeable</th>
                  <th>Symbol</th>
                  <th>CSCO</th>
                  
                </tr>
              </thead>
              <tbody>
                {recommendations.map((recommendation, index) => (
                  <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{recommendation.language}</td>
                  <td>{recommendation.region}</td>
                  <td>{recommendation.quoteType}</td>
                  <td>{recommendation.typeDisp}</td>
                  <td>{recommendation.quoteSourceName}</td>
                  <td>{recommendation.triggerable}</td>
                  <td>{recommendation.customPriceAlertConfidence}</td>
                  <td>{recommendation.firstTradeDateMilliseconds}</td>
                  <td>{recommendation.priceHint}</td>
                  <td>{recommendation.preMarketChange}</td>
                  <td>{recommendation.preMarketChangePercent}</td>
                  <td>{recommendation.preMarketTime}</td>
                  <td>{recommendation.preMarketPrice}</td>
                  <td>{recommendation.regularMarketChange}</td>
                  <td>{recommendation.regularMarketChangePercent}</td>
                  <td>{recommendation.regularMarketTime}</td>
                  <td>{recommendation.regularMarketPrice}</td>
                  <td>{recommendation.regularMarketPreviousClose}</td>
                  <td>{recommendation.exchange}</td>
                  <td>{recommendation.market}</td>
                  <td>{recommendation.fullExchangeName}</td>
                  <td>{recommendation.shortName}</td>
                  <td>{recommendation.marketState}</td>
                  <td>{recommendation.sourceInterval}</td>
                  <td>{recommendation.exchangeDataDelayedBy}</td>
                  <td>{recommendation.exchangeTimezoneName}</td>
                  <td>{recommendation.exchangeTimezoneShortName}</td>
                  <td>{recommendation.gmtOffSetMilliseconds}</td>
                  <td>{recommendation.esgPopulated}</td>
                  <td>{recommendation.tradeable}</td>
                  <td>{recommendation.cryptoTradeable}</td>
                  <td>{recommendation.symbol}</td>
                  <td>{recommendation.CSCO}</td>
                  
                 </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Recommendations