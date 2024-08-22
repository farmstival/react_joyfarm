import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { color } from '../../../styles/color';
const { white, dark, midGreen } = color;

const Wrapper = styled.div`
`;

const TagSection = styled.div`
  
`;

const Tag = styled.div``;

const TagTitle = styled.div`
`;

const Button = styled.button`
  font-size: 1.3em;
  width: 140px;
  height: 50px;
  background-color: ${white};
  color: ${dark};
  border: 1px solid #ada493;
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
      color: ${midGreen};
      transform: scale(1.07);
  }
`;

const TagBox = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Tag>
        <TagTitle>
        <Button className='tagtitle'>
            <span>{t('인기_#테마')}</span>
          </Button>
        </TagTitle>
        <TagSection>
          <Button>
            <span>{t('#_숲체험')}</span>
          </Button>
          <Button>
            <span>{t('#_전통문화')}</span>
          </Button>
          <Button>
            <span>{t('#_텃밭체험')}</span>
          </Button>
          <Button>
            <span>{t('#_휴양')}</span>
          </Button>
          <Button>
            <span>{t('#_농촌_관광')}</span>
          </Button>
          <Button>
            <span>{t('#_힐링')}</span>
          </Button>
          <Button>
            <span>{t('#_테마파크')}</span>
          </Button>
          <Button>
            <span>{t('#_캠핑')}</span>
          </Button>
          <Button>
            <span>{t('#_여름휴가')}</span>
          </Button>
          <Button>
            <span>{t('#_건강')}</span>
          </Button>
          <Button>
            <span>{t('#_체험')}</span>
          </Button>
          <Button>
            <span>{t('#_역사탐방')}</span>
          </Button>
          <Button>
            <span>{t('#_농촌_생활문화')}</span>
          </Button>
          <Button>
            <span>{t('#_자연휴양림')}</span>
          </Button>
        </TagSection>
      </Tag>
    </Wrapper>
  );
};

export default React.memo(TagBox);
