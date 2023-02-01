import { useState } from "react";

function useExchangeRate() {
  const [state, setState] = useState(0);

  const calculate = (from, to, amount) => {
    const params = new URLSearchParams({
      from,
      to,
      amount,
    });

    fetch(`https://api.exchangerate.host/convert?${params}`)
      .then((res) => res.json())
      .then((rst) => {
        setState(rst.result);
      });
  };

  return [state, calculate];
}

export default useExchangeRate;
