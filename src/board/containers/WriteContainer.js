import React, { useEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import apiConfig from '../apis/apiConfig';
import { useParams } from 'react-router-dom'; //경로 변수 가져오기 위해 필요
import Loading from '../../commons/components/Loading';
import loadable from '@loadable/component';

function skinRoute(skin, props) {
  const WriteMain = loadable(() =>
    import(`../components/skins/${skin}/WriteMain`),
  );
  return <WriteMain {...props} />;
}

const WriteContainer = ({ setPageTitle }) => {
  const { bid } = useParams();

  const [board, setBoard] = useState(null); //게시판이 없는 경우
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    mode: 'write',
    notice: false,
  });
  const [editor, setEditor] = useState();
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      //즉시실행 함수
      try {
        setLoading(true); //로딩 시작

        const data = await apiConfig(bid);
        setBoard(data); //게시판 설정 조회
        setPageTitle(data.bName); //사이트 제목 변경

        setLoading(false); //로딩 종료
      } catch (err) {
        console.error(err);
      }
    })();
  }, [bid, setPageTitle]);

  const onToggleNotice = useCallback(() => setForm((form) => ({...form, notice: !form.notice })), [],);

  const onFormChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value.trim() }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);



  if (loading || !board) {
    //로딩 중이거나 게시판이 없는 경우
    return <Loading />;
  }
  const { skin } = board;

  return skinRoute(skin, {
    board,
    form,
    setEditor,
    onFormChange,
    onSubmit,
    onToggleNotice,
    errors,
  });
};

export default React.memo(WriteContainer);
