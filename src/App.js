import React, { useState } from 'react';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"

function App() {
  const [query, setQuery] = useState("");

  function handleSearch (event) {
    event.preventDefault();
    setQuery(event.target.value.trim());
  }

  function clearSearchBar (event) {
    if (event.currentTarget.parentElement.search) {
      event.currentTarget.parentElement.search.value = "";
      setQuery("");
    }
  }
  console.log(query)
  return (
    <Wrapper>
      <Header handleSearch={handleSearch}
      clearSearchBar={clearSearchBar}/>
    </Wrapper>
  );
}

export default App;
