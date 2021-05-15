import React, { useState } from "react";
import { requestPromise } from "./utils/requestPromise";

// TODO think about this
export const LOCALES = {
  PT_BR: "PT_BR",
  EN: "EN",
};

// TODO think about this
const LANGUAGES = {
  [LOCALES.PT_BR]: {
    label: "Buscar",
    placeholder: "Procurar por",
  },
  [LOCALES.EN]: {
    label: "Search",
    placeholder: "Search by",
  },
};

export const App = ({ locale }) => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO separate  url base into an env file
    const url = `https://www.dnd5eapi.co/api/spells/?name=${search}`;
    const method = "get";

    // TODO prettier without `()` when have one only param
    requestPromise({ url, method }).then((data) => {
      const body = JSON.parse(data.body);
      console.log("body: ", body);
      alert("Success request");
    });
    // TODO call action to search something
    // TODO create rule to block commit with logs
    console.log("search: ", search);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={search}
          placeholder={LANGUAGES[locale].placeholder}
          onChange={({ target: { value } }) => setSearch(value)}
        />

        <button type="submit">{LANGUAGES[locale].label}</button>
      </form>
    </div>
  );
};
