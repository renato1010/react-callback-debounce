import React, { ChangeEvent, useMemo, useState, useRef } from "react";
import coins from "./coins.json";
import debounce from "lodash.debounce";
import { FilterInput } from "./FilterInput";

const { data } = coins;

type CoinsDataType = typeof data;

function App() {
  const [coins, setCoins] = useState<CoinsDataType>(data);
  const [coinName, setCoinName] = useState<string>("");

  const filterByName = (cryptoName: string) =>
    coins.find((coin) => coin.name.toLowerCase() === cryptoName.toLowerCase());
  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    if (!value) return;
    setCoinName(value);
    const coin = filterByName(value);
    console.log({ coin });
    if (coin) {
      setCoins([coin]);
    } else {
      if (coins.length > 1) {
        setCoins(data);
      }
    }
  };
  // first solution
  // const debouncedInputChange = useCallback(debounce(onInputChange, 400), []);

  // second solution
  const debouncedInputChange = useMemo(() => debounce(onInputChange, 400), []);

  // third solution
  // const debouncedInputChange = useRef(debounce(onInputChange, 400));

  return (
    <main className="container mx-auto flex flex-col items-center">
      <h2>Cryptocurrencies</h2>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Coin Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Symbol
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price USD
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coins.map((coin) => (
                  <tr key={coin.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{coin.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{coin.symbol}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
                          +coin.price_usd
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-20 mt-10 flex flex-col justify-center">
        <FilterInput onInputChange={debouncedInputChange} />
      </div>
    </main>
  );
}

export default App;
