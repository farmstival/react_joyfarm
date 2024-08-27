import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const BoardListTitle = () => {
  const { t } = useTranslation();
  return (
    <BoardListTitles>
      <li className="board-list">
        <div className="seq">{t('글_번호')}</div>
        <div className="title">{t('제목')}</div>
        <div className="post-info">
          <div className="poster">{t('작성자')}</div>
          <div className="view">{t('조회수')}</div>
          <div className="datetime">{t('작성일')}</div>
        </div>
      </li>
    </BoardListTitles>
  );
};

const BoardListTitles = styled.div`
  border-bottom: 1px solid #ccc;
  border-top: 3px solid #ccc;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
  width: 100%;

  .board-list {
    display: flex;
    width: 100%;

    .seq {
      background: red;
      width: 7%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .title {
      background: yellow;
      width: 57%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .post-info {
    background: blue;
    width: 38%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 20px;

    .poster{
    display: flex;
    
    }
  }
`;

export default React.memo(BoardListTitle);
