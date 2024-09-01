import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_API } from "../Utils/constants";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(SEARCH_API + query);
      const data = await response.json();
      setResults(data[1] || []);
    };
    fetchResults();
  }, [query]);

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
