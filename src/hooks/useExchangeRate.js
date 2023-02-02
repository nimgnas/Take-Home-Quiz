import { useState } from "react";

function useExchangeRate() {
  const [state, setState] = useState(1);

  const calculate = (from, to) => {
    const params = new URLSearchParams({
      from,
      to,
    });

    fetch(`https://api.exchangerate.host/convert?${params}`)
      .then((res) => res.json())
      .then((rst) => {
        setState(rst.info.rate);
      });
  };

  return [state, calculate];
}

export default useExchangeRate;
