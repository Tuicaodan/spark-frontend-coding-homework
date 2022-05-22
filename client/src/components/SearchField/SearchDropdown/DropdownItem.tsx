import React from "react";
import { Link } from "react-router-dom";

import { DropdownItemContainer } from "./DropdownItem.styles";

type Props = {
  title: string;
  movieId: number;
  year: string;
};

const DropdownItem = ({ movieId, title, year }: Props) => {
  return (
    <DropdownItemContainer>
      <Link to={`/movie/${movieId}`}>
        {title} ({year})
      </Link>
    </DropdownItemContainer>
  );
};

export default DropdownItem;
