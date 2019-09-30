import React from "react";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";

export default function Proposals({ match }: any) {
  return (
    <div>
      <h2>Proposals</h2>

      <p>
        <StyledLink to={`${match.url}/1`} label={"Project 1"} />
      </p>
      <p>
        <StyledLink to={`${match.url}/2`} label={"Project 2"} />
      </p>
    </div>
  );
}