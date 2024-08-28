import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BoardButton } from '../../../../commons/components/Buttons';
import { color } from '../../../../styles/color';
import fontSize from '../../../../styles/fontSize';

const { medium, big, extraBig } = fontSize;
const { whiteGreen, midGreen, lightGreen, whiteGray, mid_gray, dark_gray } =
  color;

// 게시글 제목 부분(제목, 작성자, ...)
const Wrapper = styled.div`
  font-size: ${medium};
  margin: 5px;
  border-bottom: 1px solid ${whiteGray};
  border-top: 2.5px solid ${whiteGray};

  .subject {
    font-size: ${extraBig};
    font-weight: bold;
    text-align: left;
    vertical-align: middle;
    padding: 18px 30px;
    background: #d2f1ca;
    border-bottom: 2px solid ${whiteGray};
    line-height: 30px;
  }

  .post-info {
    color: ${mid_gray};
    border-collapse: collapse;
    //border-bottom: 1px solid ${whiteGray};
    display: flex;
    justify-content: space-between;

    .items {
      vertical-align: middle;
      padding: 10px 15px;
    }
  }
`;

// 게시글 내용 부분
const StyledContents = styled.div`
  padding-top: 5px;

  .contents {
    padding-left: 5px;
    border: 1px solid ${whiteGray};
    min-height: 500px;
    max-height: 700px;
    overflow-y: auto;
    img {
      max-width: 750px !important;
      width: auto !important;
      height: auto !important;
    }
  }

  .downloads {
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${mid_gray};
    vertical-align: middle;
    padding: 5px 5px 5px 15px;
    border: 1px solid ${whiteGray};
    border-top: none;
  }
`;

// 버튼 그룹
const Buttons = styled.div`
  align-items: flex-end;
  padding: 10px 0;
  margin-left: auto;
  width: 430px;
  display: flex;
  justify-content: space-between;
`;

const ViewContent = ({ data, onDelete }) => {
  const { t } = useTranslation();
  const { board } = data;

  return (
    <Wrapper>
      <div className="subject">{data.subject}</div>
      <div className="post-info">
        <div className="items left">
          작성자 | {data.poster}
          {data.member && '(' + data.member.email + ')'}
        </div>
        <div className="items right">
          IP | {data.ip} &nbsp;&nbsp;&nbsp; {t('조회수')} |{' '}
          {data.viewCount.toLocaleString()} &nbsp;&nbsp;&nbsp; {t('작성일자')} |{' '}
          {data.createdAt}
        </div>
      </div>
      <StyledContents>
        <div
          className="contents"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>

        {data?.attachFiles?.length > 0 && (
          <ul className="downloads">
            {t('첨부파일_목록')}
            {data.attachFiles.map(({ fileDownloadUrl, fileName }) => (
              <li key={fileDownloadUrl}>
                <FaCloudDownloadAlt /> <a href={fileDownloadUrl}>{fileName}</a>
              </li>
            ))}
          </ul>
        )}
      </StyledContents>
      <Buttons>
        <BoardButton>
          {data.showList && (
            <Link to={'/board/list/' + board.bid}>{t('글목록')}</Link>
          )}
        </BoardButton>

        {data.showEdit && (
          <>
            <BoardButton>
              <Link to={'/board/write/' + board.bid}>{t('글쓰기')}</Link>
            </BoardButton>
            <BoardButton>
              <Link to={'/board/update/' + data.seq}>{t('글수정')}</Link>
            </BoardButton>
          </>
        )}
        {data.showDelete && (
          <BoardButton type="button" onClick={() => onDelete(data.seq)}>
            {t('글삭제')}
          </BoardButton>
        )}
      </Buttons>
    </Wrapper>
  );
};

export default React.memo(ViewContent);
