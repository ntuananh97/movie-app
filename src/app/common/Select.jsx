import React, { useMemo } from "react";
import { guidGenerator } from "../../ultis";
import PropTypes from "prop-types";

function Select({
  name = "",
  id,
  options = [],
  placeholder = "",
  className = "",
  value = "",
  onChange
}) {
  const idSelect = useMemo(
    () => (id ? `${id}_${guidGenerator()}` : guidGenerator()),
    [id]
  );
  return (
    <select
      className={`form-filter__select ${className}`}
      name={name}
      id={idSelect}
      onChange={e => onChange?.(e.target.value)}
      value={value}
    >
      <option value="">-- {placeholder || "Chọn"} --</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

Select.prototype = {
  name: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.any,
};

export default React.memo(Select);
