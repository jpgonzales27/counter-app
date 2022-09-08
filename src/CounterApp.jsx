import { useState } from "react";
import PropTypes from "prop-types";

export default function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);

  const handleEvet = (event) => console.log(event);

  const handleAdd = () => setCounter(counter + 1);

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter}</h2>

      {/* <button onClick={(e) => handleEvet(e)}> +1 </button> */}
      <button onClick={handleEvet}> show event </button>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubtract}> -1 </button>
      <button onClick={handleReset}> Reset </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
