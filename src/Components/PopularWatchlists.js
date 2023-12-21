import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "./Navbar";

const PopularWatchlists = () => {
  const [watchlists, setWatchlists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists",
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
        setWatchlists(data.finance.result[0].portfolios);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 1; // Set the number of items you want to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedWatchlists = watchlists.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <Navbar />

      <h1 className="text-center">Popular - Watchlists</h1>
      <ReactPaginate
        previousLabel={<button className="btn btn-secondary mx-2">Prev</button>}
        nextLabel={<button className="btn btn-secondary mx-2">Next</button>}
        // breakLabel={'...'}

        pageCount={Math.ceil(watchlists.length / itemsPerPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      <div>
        {paginatedWatchlists.map((watchlist, index) => (
          <div className="card">
            <div
              key={watchlist.PopularWatchlists}
              className="card-body px-4 py-2"
            >
            <div class="container mt-3">
            <p class="mb-1"><b>User ID:</b> {watchlist.userId}</p>
            <p class="mb-1"><b>Portfolio ID:</b> {watchlist.pfId}</p>
            <p class="mb-1"><b>Slug:</b> {watchlist.slug}</p>
            <p class="mb-1"><b>Name:</b> {watchlist.name}</p>
            <p class="mb-1">
              <b>Description:</b>
              <div class="mt-2" dangerouslySetInnerHTML={{ __html: watchlist.description }} />
            </p>
            <p class="mb-1"><b>Short Description:</b> {watchlist.shortDescription}</p>
            <p class="mb-1"><b>Symbol Count:</b> {watchlist.symbolCount}</p>
            <p class="mb-1"><b>Follower Count:</b> {watchlist.followerCount}</p>
          
            <table class="table table-bordered table-hover mt-3">
              <thead class="table-dark">
                <tr>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Brand</b></td>
                  <td>{watchlist.brand.name}</td>
                </tr>
                <tr>
                  <td><b>Display Name</b></td>
                  <td>{watchlist.brand.displayName}</td>
                </tr>
                <tr>
                  <td><b>URL</b></td>
                  <td>{watchlist.brand.url}</td>
                </tr>
                <tr>
                  <td><b>Slug</b></td>
                  <td>{watchlist.brand.slug}</td>
                </tr>
                <tr>
                  <td><b>Logo URL</b></td>
                  <td>{watchlist.brand.logoUrl}</td>
                </tr>
              </tbody>
            </table>
          
            <p class="mb-1"><b>Created At:</b> {watchlist.createdAt}</p>
            <p class="mb-1"><b>Updated At:</b> {watchlist.updatedAt}</p>
            <p class="mb-1"><b>Original Image URL:</b> {watchlist.originalImageURL}</p>
            <p class="mb-1"><b>Daily Percent Gain:</b> {watchlist.dailyPercentGain}</p>
          </div>
          
              <section className="imgs ">
                <img
                  style={{
                    width: watchlist.backgroundImage["ios:size=small"].width,
                    height: watchlist.backgroundImage["ios:size=small"].height,
                  }}
                  src={watchlist.backgroundImage["ios:size=small"].url}
                  alt="img"
                />

                <img
                  style={{
                    width:
                      watchlist.backgroundImage["ios:size=card_small_fixed"]
                        .width,
                    height:
                      watchlist.backgroundImage["ios:size=card_small_fixed"]
                        .height,
                  }}
                  src={
                    watchlist.backgroundImage["ios:size=card_small_fixed"].url
                  }
                  alt="img"
                />

                <img
                  style={{
                    width:
                      watchlist.backgroundImage["ios:size=extra_large"].width,
                    height:
                      watchlist.backgroundImage["ios:size=extra_large"].height,
                  }}
                  src={watchlist.backgroundImage["ios:size=extra_large"].url}
                  alt="img"
                />

                <img
                  style={{
                    width:
                      watchlist.backgroundImage["ios:size=ipad_portrait_retina"]
                        .width,
                    height:
                      watchlist.backgroundImage["ios:size=ipad_portrait_retina"]
                        .height,
                  }}
                  src={
                    watchlist.backgroundImage["ios:size=ipad_portrait_retina"]
                      .url
                  }
                  alt="img"
                />

                <img
                  style={{
                    width:
                      watchlist.backgroundImage["ios:size=ipad_portrait"].width,
                    height:
                      watchlist.backgroundImage["ios:size=ipad_portrait"]
                        .height,
                  }}
                  src={watchlist.backgroundImage["ios:size=ipad_portrait"].url}
                  alt="img"
                />

                <img
                  style={{
                    width:
                      watchlist.backgroundImage["ios:size=square_large"].width,
                    height:
                      watchlist.backgroundImage["ios:size=square_large"].height,
                  }}
                  src={watchlist.backgroundImage["ios:size=square_large"].url}
                  alt="img"
                />

                <img
                  style={{
                    width: watchlist.backgroundImage["ios:size=medium"].width,
                    height: watchlist.backgroundImage["ios:size=medium"].height,
                  }}
                  src={watchlist.backgroundImage["ios:size=medium"].url}
                  alt="img"
                />

                <img
                  style={{
                    width:
                      watchlist.backgroundImage["ios:size=large_new_fixed"]
                        .width,
                    height:
                      watchlist.backgroundImage["ios:size=large_new_fixed"]
                        .height,
                  }}
                  src={
                    watchlist.backgroundImage["ios:size=large_new_fixed"].url
                  }
                  alt="img"
                />

                <img
                  style={{
                    width:
                      watchlist.backgroundImage["ios:size=card_large_fixed"]
                        .width,
                    height:
                      watchlist.backgroundImage["ios:size=card_large_fixed"]
                        .height,
                  }}
                  src={
                    watchlist.backgroundImage["ios:size=card_large_fixed"].url
                  }
                  alt="img"
                />
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularWatchlists;
