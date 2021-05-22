import React from "react";
import { useHistory } from "react-router-dom";

// TODO think about this
export const LOCALES = {
  PT_BR: "PT_BR",
  EN: "EN",
};

// TODO think about this
export const LANGUAGES = {
  [LOCALES.PT_BR]: {
    label: "Buscar",
    placeholder: "Procurar por",
  },
  [LOCALES.EN]: {
    label: "Search",
    placeholder: "Search by",
  },
};

export const App = () => {
  const history = useHistory();

  return (
    <div>
      <p>Menu</p>
      <button onClick={() => history.push("/spells")}>Spells</button>
      <button onClick={() => history.push("/classes")}>Classes</button>
      <button onClick={() => history.push("/features")}>Features</button>
      <button onClick={() => history.push("/monsters")}>Monsters</button>
      <div
        style={{
          border: "1px solid black",
          width: "100%",
          marginBottom: 16,
          marginTop: 8,
        }}
      />
    </div>
  );
};
