import React from "react";

function SelectOption({jokeCategoryFunc, jokeTypeFunc}) {

  return (
    <>
      <div className="filters">
        <div className="category-box">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={(e) => {jokeCategoryFunc(e);}}>
            <option value="">-- Select --</option>
            <option value="misc">Misc</option>
            <option value="programming">Programming</option>
            <option value="dark">Dark</option>
            <option value="pun">Pun</option>
            <option value="spooky">Spooky</option>
            <option value="christmas">Christmas</option>
          </select>
        </div>

        <div className="type-box">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" onChange={(e) => { jokeTypeFunc(e);}}>
            <option value="">-- Select --</option>
            <option value="single">Single</option>
            <option value="two part">Two Part</option>
          </select>
        </div>

      </div>
    </>
  );
}

export default SelectOption;
