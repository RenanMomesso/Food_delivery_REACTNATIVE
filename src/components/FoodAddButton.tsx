import React from "react";
import styled from "styled-components/native";
interface FoodAddButtonProps {
  onAdd: Function;
  onRemove: Function;
  unit: number;
}

const TouchableAdd = styled.TouchableOpacity<any>`
  background-color: ${(props) => (props.color ? props.color : "#d85656")};
  padding: 5px;
  border-radius: 15px;
  width: ${props => props.largeButton ? '45px': '35px'};
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  flex-direction:row;

 
`;

const NormalText = styled.Text<any>`
  color: #fff;
  font-weight: bold;
  font-size: ${props => props.addRow ? '15px':'18px'} !important ;
  
`;

const AddAndRemoveView = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const QtdView = styled.View``;
const QtdText = styled.Text`
  margin: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const FoodAddButton: React.FC<FoodAddButtonProps> = ({
  onAdd,
  onRemove,
  unit,
}) => {
  if (unit > 0) {
    return (
      <AddAndRemoveView>
        <TouchableAdd onPress={()=>onRemove()}>
          <NormalText>-</NormalText>
        </TouchableAdd>
        <QtdView>
    <QtdText>{unit}</QtdText>
        </QtdView>
        <TouchableAdd color={"green"} onPress={() => onAdd()}>
          <NormalText>+</NormalText>
        </TouchableAdd>
      </AddAndRemoveView>
    );
  } else {
    return (
      <AddAndRemoveView>
        <TouchableAdd onPress={()=>onAdd()} largeButton>
          <NormalText addRow>ADD</NormalText>
        </TouchableAdd>
      </AddAndRemoveView>
    );
  }
};

export default FoodAddButton;
