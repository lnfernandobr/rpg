import React, { useState } from 'react';
import { LANGUAGES } from '../app/App';

export const Search = ({ locale, onSubmit, component: Component }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(search);
        }}
      >
        <input
          type="text"
          value={search}
          placeholder={LANGUAGES[locale].placeholder}
          onChange={({ target: { value } }) => setSearch(value)}
        />

        <button type="submit">{LANGUAGES[locale].label}</button>
      </form>

      {Component && <Component />}
    </div>
  );
};
