import React, { useContext, useState } from "react";
import StyleContext from "../../Context/StyleContext";
import "./TS.css";
const ToggleSwitch = () => {
  const { isDark } = useContext(StyleContext);
  const [ischecked, setischecked] = useState(isDark);
  const styleContext = useContext(StyleContext);
  return (
    <label class="switch swicth">
      <input
        type="checkbox"
        name="checkbox"
        class="switch"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setischecked(!ischecked);
        }}
      />
      <div>
        <span></span>
      </div>
    </label>
  );
};

export default ToggleSwitch;
