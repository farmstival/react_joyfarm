import React from 'react';
import styled from 'styled-components';

export const ImageBgBox = styled.div`

  background:url('${({url}) => url}') no-repeat center center;
  background-size: cover;
  width: ${({width}) => width ?? '200px'};
  height: ${({height}) => height ?? '200px'};
=======
  background: url('${({ url }) => url}') no-repeat center center;
  background-size: cover;
  width: ${({ width }) => width ?? '200px'};
  height: ${({ height }) => height ?? '200px'};
>>>>>>> 030266eebe7a7d6507b79a325259157b7642729e
`;