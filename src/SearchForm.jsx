import { useState } from "react";
import { useGlobalContext } from "./Context";
export default function SearchForm(){
  const {setSearch} = useGlobalContext();
  const handelSubmit = (e)=>{
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearch(searchValue);
  }
  return <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handelSubmit}>
        <input type="text" className="form-input search-input" name="search" placeholder="cat"/>
        <button className="btn" type="submit">search</button>
      </form>
  </section>
}