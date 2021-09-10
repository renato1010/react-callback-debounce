import React, { ChangeEvent } from "react";

type FilterInputProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const FilterInput = ({ onInputChange }: FilterInputProps) => {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Coin Name
      </label>
      <div className="mt-3">
        <input
          onChange={onInputChange}
          type="text"
          name="email"
          id="email"
          className="h-16 px-2 shadow-sm border focus:ring-indigo-500 
          focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Bitcoin"
          autoComplete="off"
        />
      </div>
    </div>
  );
};
