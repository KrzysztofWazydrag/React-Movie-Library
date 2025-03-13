import styled from 'styled-components'

export const StyledMovieTab = ({ video }) => {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  )
}

const Thumbnail = styled.div`
background-color: grey;
justify-content: center;
color: red;
`

const LikeButton = styled.button`
background-color: blue;
color: white;
justify-content: center;
`