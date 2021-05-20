import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { requestPromise } from "./utils/requestPromise";

export const MoreInfo = () => {
  const [info, setInfo] = useState();
  const { state: { path } = {} } = useLocation();
  console.log("path: ", path);

  useEffect(() => {
    const url = `https://www.dnd5eapi.co${path}`;

    requestPromise({ url, method: "get" }).then((r) =>
      setInfo(JSON.parse(r.body))
    );
  }, []);

  if (!info) {
    return <p>Not found</p>;
  }

  // TODO we need improve this component
  return (
    <div>
      <p>Spell Name: {info.name}</p>
      <p>Description: {info.desc}</p>
      <p>Level: {info.level}</p>
      <p>Range: {info.range}</p>
      <p>Material: {info.material}</p>
      <p>Duration: {info.duration}</p>
      <p>components: {info.components?.map((c) => ` ${c}`).toString()}</p>
      <p>casting_time: {info.casting_time}</p>
      <p>classes: {info.classes?.map(({ name }) => ` ${name}`).toString()}</p>
      <p>by concentration?: {info.concentration ? "Yes" : "No"}</p>
      <p>by ritual?: {info.ritual ? "Yes" : "No"}</p>
      {info.school && <p>School: {info.school.name}</p>}
      {info.subclasses && (
        <div style={{ display: "flex", alignItems: "center" }}>
          subclasses: {info.subclasses.map(({ name }) => ` ${name}`).toString()}
          <button>Ver mais</button>
        </div>
      )}
    </div>
  );
};
