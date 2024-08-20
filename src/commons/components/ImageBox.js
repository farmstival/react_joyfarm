import React from 'react';
import styled from 'styled-components';

export const ImageBgBox = styled.div`

  background:url('${({url}) => url}') no-repeat center center;
  background-size: cover;
  width: ${({width}) => width ?? '200px'};
  height: ${({height}) => height ?? '200px'};
=======
  background: url('${({ url }) => url}') no-repeat center center;
  background-size: 100% 100%;
  width: ${({ width }) => width ?? '200px'};
  height: ${({ height }) => height ?? '200px'};
  object-fit: cover;
>>>>>>> 96ef247906a89db50c0e68d34a647557fff194b1
`;