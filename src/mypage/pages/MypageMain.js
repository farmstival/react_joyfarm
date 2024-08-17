import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import Styled from 'styled-components';

const MypageMain = () => {
  return (
    <MemberOnlyContainer>
      <Container>
        <ContentSection>
          <h1>마이페이지</h1>
          <ButtonContainer>
            <button>홈</button>
            <button>프로필</button>
            <button>좋아요 한 목록</button>
            <button>수정</button>
            <button>탈퇴</button>
          </ButtonContainer>
        </ContentSection>
      </Container>
    </MemberOnlyContainer>
  );
};

export default React.memo(MypageMain);

const Container = Styled.div`
  display: flex;
  align-items: flex-start;
  height: 100vh;
  padding: 20px;
`;

const ProfileSection = Styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ContentSection = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ButtonContainer = Styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
