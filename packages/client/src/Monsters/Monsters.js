import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { requestPromise } from "../utils/requestPromise";
import { LANGUAGES } from "../App";
import {RoutePaths} from "../routes/RoutePaths";

export const Monsters = ({ locale }) => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO separate  url base into an env file
    const url = `https://www.dnd5eapi.co/api/spells/?name=${search}`;
    const method = "get";

    // TODO prettier without `()` when have one only param
    requestPromise({ url, method }).then((data) => {
      const body = JSON.parse(data.body);
      setList(body.results);
    });
    // TODO create rule to block commit with logs
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

      {!!list.length && (
        <div>
          <ul>
            {list.map(({ name, index, url: path }) => (
              <label key={index} style={{ display: "flex" }}>
                <li style={{ marginRight: 8 }}>{name}</li>{" "}
                <button
                  onClick={() => {
                    history.push({
                      pathname: `/${RoutePaths.DETAILS}`,
                      state: { path },
                    });
                  }}
                >
                  Ver mais
                </button>
              </label>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
