import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function TrendingTickers() {
  const [trendingTickers, setTrendingTickers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US",
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
        setTrendingTickers(data.finance.result[0].quotes);
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
        <h1 className="text-center">Trending - Tickers</h1>
        <div className="container-fluid mt-4 m-0 table-responsive">
          <table className="table table-bordered table-striped table-hover ">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Custom Price Alert Confidence</th>
                <th>Esg Populated</th>
                <th>Exchange</th>
                <th>Exchange Data Delayed By</th>
                <th>Exchange Timezone Name</th>
                <th>ExchangeTimezone Short Name</th>
                <th>First Trade Date Milliseconds</th>
                <th>Full Exchange Name</th>
                <th>Gmt OffSet Milliseconds</th>
                <th>Language</th>
                <th>Long Name</th>
                <th>Market</th>
                <th>Market State</th>
                <th>Price Hint</th>
                <th>Quote Source Name</th>
                <th>Quote Type</th>
                <th>Region</th>
                <th>Regular Market Change</th>
                <th>Regular Market Change Percent</th>
                <th>Regular Market Previous Close</th>
                <th>Regular Market Price</th>
                <th>Regular Market Time</th>
                <th>Short Name</th>
                <th>Source Interval</th>
                <th>Symbol</th>
                <th>Tradeable</th>
                <th>Trending Score</th>
                <th>Triggerable</th>
                <th>Type Disp</th>
              </tr>
            </thead>
            <tbody>
              {trendingTickers.map((ticker, index) => (
                <tr key={ticker.symbol}>
                  <td>{index + 1}</td>
                  <td>{ticker.customPriceAlertConfidence}</td>
                  <td>{ticker.esgPopulated}</td>
                  <td>{ticker.exchange}</td>
                  <td>{ticker.exchangeDataDelayedBy}</td>
                  <td>{ticker.exchangeTimezoneName}</td>
                  <td>{ticker.exchangeTimezoneShortName}</td>
                  <td>{ticker.firstTradeDateMilliseconds}</td>
                  <td>{ticker.fullExchangeName}</td>
                  <td>{ticker.gmtOffSetMilliseconds}</td>
                  <td>{ticker.language}</td>
                  <td>{ticker.longName}</td>
                  <td>{ticker.market}</td>
                  <td>{ticker.marketState}</td>
                  <td>{ticker.priceHint}</td>
                  <td>{ticker.quoteSourceName}</td>
                  <td>{ticker.quoteType}</td>
                  <td>{ticker.region}</td>
                  <td>{ticker.regularMarketChange}</td>
                  <td>{ticker.regularMarketChangePercent}</td>
                  <td>{ticker.regularMarketPreviousClose}</td>
                  <td>{ticker.regularMarketPrice}</td>
                  <td>{ticker.regularMarketTime}</td>
                  <td>{ticker.shortName}</td>
                  <td>{ticker.sourceInterval}</td>
                  <td>{ticker.symbol}</td>
                  <td>{ticker.tradeable}</td>
                  <td>{ticker.trendingScore}</td>
                  <td>{ticker.triggerable}</td>
                  <td>{ticker.typeDisp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TrendingTickers;
