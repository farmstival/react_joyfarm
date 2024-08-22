import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { color } from '../../../styles/color';

const { white, dark, midGreen } = color;

const Wrapper = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
`;

const TagSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px 20px;
  align-items: center;
`;

const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 5px 30px 5px 20px;
`;

const TagTitle = styled.div`
  .tagtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100%;
    font-size: 1.3em;
    font-weight: bold;
    background-color: ${midGreen};
    color: #fff;
    font-size: 28px;
    border: none;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    border-radius: 3px 40px 0 60px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const Button = styled.button`
  font-size: 1.3em;
  width: 150px;
  height: 60px;
  background-color: ${white};
  color: ${dark};
  border: 1px solid ${midGreen};
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    color: ${white};
    font-weight: bold;
    transform: scale(1.07);
    border: none;
  }

  .one&:hover {
    background-color: #fbbd20;
  }

  .two&:hover {
    background-color: #87c9f7;
  }

  .three&:hover {
    background-color: #9ce89a;
  }

  .four&:hover {
    background-color: #ffbc80;
  }

  .five&:hover {
    background-color: #feacb6;
  }

  .six&:hover {
    background-color: #dbbbff;
  }
`;

const TagBox = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Tag>
        <TagTitle>
          <div className="tagtitle">{t('인기_테마')}</div>
        </TagTitle>
        <TagSection>
          <Button className="one">
            <span>{t('숲체험')}</span>
          </Button>
          <Button className="two">
            <span>{t('전통문화')}</span>
          </Button>
          <Button className="three">
            <span>{t('텃밭체험')}</span>
          </Button>
          <Button className="four">
            <span>{t('휴양')}</span>
          </Button>
          <Button className="five">
            <span>{t('농촌_관광')}</span>
          </Button>
          <Button className="six">
            <span>{t('힐링')}</span>
          </Button>
          <Button className="six">
            <span>{t('테마파크')}</span>
          </Button>
          <Button className="five">
            <span>{t('캠핑')}</span>
          </Button>
          <Button className="four">
            <span>{t('여름휴가')}</span>
          </Button>
          <Button className="three">
            <span>{t('건강')}</span>
          </Button>
          <Button className="two">
            <span>{t('체험')}</span>
          </Button>
          <Button className="one">
            <span>{t('자연휴양림')}</span>
          </Button>
        </TagSection>
      </Tag>
    </Wrapper>
  );
};

export default React.memo(TagBox);
