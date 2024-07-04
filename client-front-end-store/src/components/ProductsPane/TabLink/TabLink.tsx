import React from "react";
import type ITabLink from "./TabLink.types";

export default function TabLink({ target, name, idx }: ITabLink) {
  return (
    <li className={`${idx === 0 ? "active" : ""}`}>
      <a data-transition-type="backSlide" href={`#${target}`} data-toggle="tab">
        {name}
      </a>
    </li>
  );
}
