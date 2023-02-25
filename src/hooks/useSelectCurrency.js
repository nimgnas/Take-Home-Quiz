import {useState} from "react";

function useSelectCurrency() {
    const [selectedCurrency, setSelectedCurrency] = useState({ source: "KRW", target: "USD" });

    // dropdown에서 통화를 선택하는 함수
    const selectCurrency = (e) => {
        const calledLocation = e.target.parentElement.parentElement.id;
        const currency = e.target.querySelector(".CurrencyWrapper-abbreviation").innerText.slice(0, 3);

        if (calledLocation === "source-btn") {
            setSelectedCurrency((prev) => ({ ...prev, source: currency }));
        }
        if (calledLocation === "target-btn") {
            setSelectedCurrency((prev) => ({ ...prev, target: currency }));
        }
    };

    return [selectedCurrency, selectCurrency]
}

export default useSelectCurrency