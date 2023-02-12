import { Tooltip } from "@mui/material";
import styled from "styled-components";
import InfoIcon from "../assets/icons/InfoIcon";

const ToolTip = (props) => {
    const {info} = props;

  return (
    <Tooltip title={info} placement="top">
      <IconButton>
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
};

const IconButton = styled.button`
  background: transparent;
  border: 1px solid transparent;
`;
export default ToolTip;