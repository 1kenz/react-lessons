import {
  StyledCardWrapper,
  StyledText,
  StyledImage,
  ReleaseDate,
} from "./Card.style";
// import { Grid, Row, Col } from "react-flexbox-grid";

export const Card = ({ title, poster_path, releaseDate }) => {
  return (
    <StyledCardWrapper>
      <StyledImage src={poster_path} alt="Poster" />
      <StyledText>{title}</StyledText>
      <ReleaseDate>Release Date: {releaseDate}</ReleaseDate>
    </StyledCardWrapper>
  );
};
