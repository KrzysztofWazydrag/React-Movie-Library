import styled from 'styled-components'

export const MovieTab = ({ video }) => {
  const handleClick = () => alert('Kliknieto w film!');

  return (
    <StyledMovieTab onClick={handleClick}>
      <a href={video.url}>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <p>{video.url}</p>
      </a>
    </StyledMovieTab>
  )
}


const StyledMovieTab = styled.div`
  padding: 20px;
  background-color: rgb(241, 241, 241);
  color: black;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
`;