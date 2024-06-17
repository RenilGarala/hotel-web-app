import React, { useEffect, useState } from "react";
import "./Roomselection.css";
import { FaSearch } from "react-icons/fa";
import Card from "../card/Card";

const Roomselection = () => {
  const [input, setInput] = useState("");

  const [data, setData] = useState([]);

  const [temp, setTemp] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://65d3828b522627d501090b34.mockapi.io/search"
      );
      const json = await response.json();
      setData(json);
      setTemp(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const handleChange = (value) => {
    setInput(value);
    const res = data.filter((hotel) => {
      return hotel.name.toLowerCase().includes(value.toLowerCase());
    });
    setTemp(res);
  };

  return (
    <div className="search">
      <div className="bodyheader">
        <div className="search-wrapper">
          <FaSearch id="search-icon" />
          <input
            className="search-box"
            placeholder="type to search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className="Filter-card">
            <button className="filter-btn" onClick={()=>{
                const filterList = temp.filter(
                    (htlFilter)=>htlFilter.rating>4
                );
                setTemp(filterList);

            }}>
                Top Rated Restaurant
            </button>
        </div>
      </div>
      <div className="cards">
        {data.length == 0 ? (
          <div>Loading</div>
        ) : temp.length == 0 ? (
          <div className="hotelNotFoundMsg">
            <h3>No Hotel Found</h3>
          </div>
        ) : (
          temp.map((hotel) => {
            return <Card data={hotel} />;
          })
        )}
      </div>
    </div>
  );
};
export default Roomselection;
