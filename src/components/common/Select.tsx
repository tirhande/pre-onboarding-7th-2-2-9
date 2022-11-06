import { ChangeEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const StyledSelect = ({
  children,
  onChange,
  defaultValue,
  name,
}: {
  children: ReactNode;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  defaultValue: string;
  name?: string;
}) => {
  return (
    <Select onChange={onChange} defaultValue={defaultValue} name={name}>
      {children}
    </Select>
  );
};

const Select = styled.select`
  width: 123px;
  height: 40px;
  padding-left: 20px;
  border: 1px solid #d1d8dc;
  border-radius: 10px;

  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) 50%, calc(100% - 15px) 50%, calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 0 1.5em;
  background-repeat: no-repeat;

  &:focus {
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 50%, calc(100% - 20px) 50%, calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 0 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }
`;

export default StyledSelect;
