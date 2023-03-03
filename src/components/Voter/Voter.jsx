import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ToolTip from "../ToolTip";
import VoterType from "./VoterType";

const Voter = (props) => {
  const { id, voterUpdate } = props;
  const [type, setType] = useState(0);
  const [preference, setPreference] = useState(props.preference);
  const dragItemStart = useRef();
  const dragItemHover = useRef();
  const userTypeInfo = `Choose type - 0 for 'Lazy' or 1 for 'Active'`;
  
  

  const onTypeChangeHandler = (e) => {
    setType(e.target.value);
    voterUpdate(id, "type", e.target.value);
  };

  const preferenceChangeHandler = () => {
    const currentPref = [...preference];
    currentPref.splice(dragItemStart.current, 0, currentPref.splice(dragItemHover.current, 1)[0]);
    dragItemStart.current = null;
    dragItemHover.current = null;
    setPreference(currentPref);
    voterUpdate(id, "alters_pref", currentPref);
  };

  useEffect(() => {
    setPreference(props.preference)
  }, [props.preference])

  useEffect(() => {
    voterUpdate(id, "alters_pref", 'A');
  }, [])

  return (
    <VoterContainer>
      <UserTypeWrapper>
       <VoterType type={type} onTypeChangeHandler={onTypeChangeHandler} />
        <ToolTip info={userTypeInfo} />
      </UserTypeWrapper>
      {preference.map((e, i) => (
        <div key={i} draggable onDragStart={() => dragItemStart.current = i} onDragEnter={() => dragItemHover.current = i} onDragEnd={preferenceChangeHandler}>{e}</div>
      ))}
    </VoterContainer>
  );
};

const VoterContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const UserTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default Voter;