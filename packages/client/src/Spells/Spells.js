import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { requestPromise } from "../utils/requestPromise";
import { Search } from "../Search/Search";
import { RoutePaths } from "../routes/RoutePaths";

export const Spells = ({ locale }) => {
  const [list, setList] = useState([]);
  const history = useHistory();

  const onSubmit = (value) => {
    // TODO separate  url base into an env file
    const url = `https://www.dnd5eapi.co/api/spells/?name=${value}`;
    const method = "get";

    // TODO prettier without `()` when have one only param
    requestPromise({ url, method }).then((data) => {
      const body = JSON.parse(data.body);
      setList(body.results);
    });
    // TODO create rule to block commit with logs
  };

  return (
    <Search
      locale={locale}
      onSubmit={onSubmit}
      component={() => {
        return (
          !!list.length && (
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
          )
        );
      }}
    />
  );
};
