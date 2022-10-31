import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="row">
      <h1> {title}</h1>

      <div class="row__posters">
        {movies.map((movie) => {
          console.log("movie ", movie);
          return (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
// import React, { useState, useEffect } from "react";
// import "./Row.css";
// import axios from "./axios";

// const Row = (props) => {
//   const [rowItems, setRowItems] = useState([]);

//   const base_url = "https://image.tmdb.org/t/p/original/";

//   //runs once when component is mounted
//   useEffect(() => {
//     axios.get(props.fetchURL).then((res) => {
//       setRowItems(res.data.results);
//     });
//   }, [props.fetchURL]);

//   return (
//     <div className="row">
//       <h2>{props.title}</h2>
//       <div className="row_posters">
//         {rowItems.map(
//           (item) =>
//             ((props.isLargeRow && item.poster_path) ||
//               (!props.isLargeRow && item.backdrop_path)) && (
//               <img
//                 className={`row_poster ${
//                   props.isLargeRow && "row_poster-large"
//                 }`}
//                 key={item.id}
//                 src={`${base_url}${
//                   props.isLargeRow ? item.poster_path : item.backdrop_path
//                 }`}
//                 alt={item.name || item.title}
//               />
//             )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Row;
