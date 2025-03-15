import styled from "styled-components";

export const UserCard = ({ name, age, email }) => {
    const clickhandler = () => alert(name);

    return (
        <StyledUserCard onClick={clickhandler}>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
        </StyledUserCard>
    )
}

const StyledUserCard = styled.div`
padding: 20px;
background-color: rgb(241, 241, 241);
color: black;
border-radius: 12px;`;