import { MouseEventHandler } from 'react';
import styled from 'styled-components';

const StyledButton = ({
  text,
  width,
  border,
  background,
  onClick,
}: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  width: number;
  border: string;
  background: string;
}) => {
  return (
    <Button onClick={onClick} width={width} border={border} background={background}>
      {text}
    </Button>
  );
};

interface IStyle {
  width: number;
  border: string;
  background: string;
}

const Button = styled.button<IStyle>`
  width: ${({ width }) => width + 'px'};
  height: 40px;

  font-size: 14px;
  font-weight: bold;
  color: ${({ background }) => (background === '#fff' ? '#000' : '#fff')};
  background-color: ${({ background }) => background};
  border: ${({ border }) => (border === 'none' ? border : '1px solid ' + border)};
  border-radius: 10px;

  cursor: pointer;
`;

export default StyledButton;
