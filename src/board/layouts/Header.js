import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { PageNavWrap, PageTitle } from '../../commons/components/LayoutBox';

const HeaderBox = styled.header`
  /* 헤더 스타일 */
`;

const StyledLink = styled.a`
  font-size: 1.3em;
  color: #000; /* 링크 색상 설정 */
  text-decoration: none; /* 밑줄 제거 */
  &:hover {
    color: #007bff; /* 호버 시 색상 변경 */
  }
`;

const Header = () => {
    const location = useLocation();

    // 현재 페이지 URL경로
    const currentPath = location.pathname;

    let linkText = '';
    let linkHref = '#';

    if (currentPath === '/board/notice' || '/baord/write/notice') {
        linkText = '공지사항';
        linkHref = '/board/notice';
    } else if (currentPath === '/board/qna') {
        linkText = '질문과답변';
        linkHref = '/board/qna';
    } else if (currentPath === '/board/review') {
        linkText = '여행후기';
        linkHref = '/board/review';
    } else {
        linkText = 'HOME';
        linkHref = '/';
    }

    return (
        <HeaderBox>
            <PageNavWrap>
                <StyledLink href="/">HOME</StyledLink>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <StyledLink href={linkHref}>{linkText}</StyledLink>
                <PageTitle>
                  <h1>{linkText}</h1>
                </PageTitle>
            </PageNavWrap>
        </HeaderBox>
    )
}

export default React.memo(Header);
