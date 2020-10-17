import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      Find contacts by name or number
      <input
        type="text"
        value={value}
        // onChange={(e) => onChangeFilter(e.target.value)}
        onChange={({target}) => onChangeFilter(target.value)}
      ></input>
    </div>
  );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
  };

export default Filter;
