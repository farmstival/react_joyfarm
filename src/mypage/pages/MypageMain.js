import React, { useState } from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import Styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const MypageMain = () => {
  const navigate = useNavigate();

  // 초기 상태에 사용자 정보 (프로필 이미지, 이름, 이메일 등) 추가
  const [user, setUser] = useState({
    profileImage: 'https://via.placeholder.com/100', // 기본 프로필 이미지
    name: '오혜원',
    email: 'user@example.com',
    
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // 개인정보 수정 모달 상태
  const [editedUser, setEditedUser] = useState(user); // 수정된 사용자 정보

  // 탈퇴 기능 핸들러
  const handleDeleteAccount = () => {
    // API 호출 예시
    if (window.confirm('정말로 탈퇴하시겠습니까?')) {
      // 여기에 탈퇴 API 호출 코드 추가
      // 성공 시 홈으로 이동
      alert('회원 탈퇴가 완료되었습니다.');
      navigate('/'); // 탈퇴 후 홈으로 이동
    }
  };

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // 개인정보 수정 저장 핸들러
  const handleSaveProfile = () => {
    // 여기에 API 호출 코드로 개인정보를 업데이트
    setUser(editedUser); // 로컬 상태에 사용자 정보 업데이트
    closeEditModal(); // 모달 닫기
    alert('회원정보가 수정되었습니다.');
  };

  return (
    <MemberOnlyContainer>
      <Container>
        <ContentSection>
          <ProfileSection>
            <img src={user.profileImage} alt="프로필 이미지" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </ProfileSection>
          <ButtonContainer>
            <LinkButton to="/">홈</LinkButton>
            <LinkButton to="/likes">좋아요 한 목록</LinkButton>
            <button onClick={openEditModal}>수정</button>
            <button onClick={handleDeleteAccount}>탈퇴</button>
          </ButtonContainer>
        </ContentSection>

        {/* 개인정보 수정 모달 */}
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          contentLabel="회원정보 수정"
          style={customStyles}
        >
          <h2>회원정보 수정</h2>
          <form>
            <FormLabel>
              이름:
              <InputField
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            </FormLabel>

            <FormLabel>
              생년월일:
              <InputField
                type="text"
                name="birth"
                value={editedUser.birth}
                onChange={handleInputChange}
              />
            </FormLabel>

            <FormLabel>
              이메일:
              <InputField
                type="text"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </FormLabel>

            <FormLabel>
              비밀번호:
              <InputField
                type="text"
                name="password"
                value={editedUser.password}
                onChange={handleInputChange}
              />
            </FormLabel>

            <FormLabel>
              휴대전화:
              <InputField
                type="text"
                name="phone"
                value={editedUser.phone}
                onChange={handleInputChange}
              />
            </FormLabel>

            <FormLabel>
              주소:
              <InputField
                type="text"
                name="address"
                value={editedUser.address}
                onChange={handleInputChange}
              />
            </FormLabel>

            <button type="button" onClick={handleSaveProfile}>
              저장
            </button>
            <button type="button" onClick={closeEditModal}>
              취소
            </button>
          </form>
        </Modal>
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

const ContentSection = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ProfileSection = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  h2 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 5px 0;
    color: gray;
  }
`;

const ButtonContainer = Styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;

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

const LinkButton = Styled(Link)`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormLabel = Styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const InputField = Styled.input`
  padding: 10px;
  font-size: 16px;
  margin-top: 5px;  // 위의 텍스트와의 간격 조정
`;

const SmallText = Styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: gray;
`;

const customStyles = {
  content: {
    top: 'calc(50% - 200px)',
    left: 'calc(50% - 150px)',
    width: '400px',
    height: '450px',
    padding: '20px',
  },
};
