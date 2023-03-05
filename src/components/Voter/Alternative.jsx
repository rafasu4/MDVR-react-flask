import styled from "styled-components";
import MenuIcon from "../../assets/icons/MenuIcon";

const Alternative = (props) => {
    const { onDragStartHandler, onDragEnterHandler, onDragEndHandler, value } = props;
    return (
        <AlterWrapper draggable onDragStart={onDragStartHandler} onDragEnter={onDragEnterHandler} onDragEnd={onDragEndHandler}>
            <MenuIcon />
            <AlterContainer>{value}</AlterContainer>
        </AlterWrapper>
    )
}

const AlterWrapper = styled.div`
    display: flex;
    gap: 5px;
    cursor: pointer;
`;
const AlterContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    font-weight: bolder;
`

export default Alternative;