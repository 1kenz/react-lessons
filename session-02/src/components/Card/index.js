import {
  StyledCardWrapper,
  StyledText,
  StyledImage,
  ReleaseDate,
} from "./Card.style";
// import { Grid, Row, Col } from "react-flexbox-grid";

export const Card = ({ title, poster, releaseDate }) => {
  return (
    <StyledCardWrapper>
      {/* <StyledImage src={poster} alt="Poster" /> */}
      <StyledImage
        src="https://api.themoviedb.org/3/search/movie/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
        alt="Poster"
      />
      <StyledText>{title}</StyledText>
      <ReleaseDate>Release Date: {releaseDate}</ReleaseDate>
    </StyledCardWrapper>
  );
};
