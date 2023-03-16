import styled from '@emotion/styled';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export const TextareaAutosizeStyled = styled(TextareaAutosize)`
  border-radius: 4px;
  padding: 16.5px 14px;
  border-color: lightgrey;
  &:hover {
    border-color: black;
  }
  &:focus {
    outline-color: #556cd6;
  }
`;
