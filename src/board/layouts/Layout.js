import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { ContentBox } from '../../commons/components/LayoutBox';


const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


const Layout = ({children}) => {
    return (
        <LayoutWrapper className='layout-width'>
            <Header />
            {children}
        </LayoutWrapper>
    )
}

export default Layout;