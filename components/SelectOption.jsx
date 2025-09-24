import React from "react";

function SelectOption() {
  return (
    <>
      <div className="filters">

        <div className="category-box">
          <label htmlFor="category">Category</label>
          <select
            name="categoryy"
            id="category"
            onChange={(e) => {
              categoryFunc(e);
            }}
          >
            <option value="" name="coc">
              -- Select --
            </option>
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
          <select
            name="type"
            id="type"
            onChange={(e) => {
              typeFunc(e);
            }}
          >
            <option value="">-- Select --</option>
            <option value="single">Single</option>
            <option value="two part">Two Part</option>
          </select>
        </div>

        <div className="flags-box">
          <label htmlFor="flags">Flags</label>
          <select
            name="flags"
            id="flags"
            onChange={(e) => {
              selectFunc(e);
            }}
          >
            <option value="">-- Select --</option>
            <option value="nsfw">NSFW</option>
            <option value="religious">Religious</option>
            <option value="polatical">Polatical</option>
            <option value="racist">Racist</option>
            <option value="sexist">Sexist</option>
            <option value="explicit">Explicit</option>
          </select>
        </div>
        
      </div>
    </>
  );
}

export default SelectOption;
