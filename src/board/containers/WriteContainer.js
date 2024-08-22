import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import loadable from '@loadable/component';
import apiConfig from '../apis/apiConfig';
import Loading from '../../commons/components/Loading';

function skinRoute(skin, props) {
  const WriteMain = loadable(() =>
    import(`../components/skins/${skin}/WriteMain`),
  );

  return <WriteMain {...props} />;
}

const WriteContainer = ({ setPageTitle }) => {
  const { bid } = useParams();

  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    mode: 'write',
    notice: false,
  });
  const [notice, setNotice] = useState(false);

  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await apiConfig(bid);
        setBoard(data); // 게시판 설정 조회
        setPageTitle(data.bname); // 사이트 제목

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [bid, setPageTitle]);

  const onToggleNotice = useCallback(() => setNotice((notice) => !notice), []);

  //파일 업로드 후속처리
  const fileUploadCallback = useCallback((files, editor) => {
    if (!files || files.length === 0) return;
    const imageUrls = [];
    for (const file of files) {
      const {location, fileUrl} = file;
      if(location === 'editor') {
        imageUrls.push(fileUrl);
      }
      //에디터에 이미지 추가
      if(imageUrls.length > 0){
        
      }
    }
  }, []);

  const onSubmit = useCallback(
    (e, editor) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      for (const [k, v] of formData) {
        form[k] = v;
      }

      form.content = editor.getData();

      setForm({ ...form });

      console.log(form);
    },
    [form],
  );

  if (loading || !board) {
    return <Loading />;
  }

  const { skin } = board;

  return skinRoute(skin, {
    board,
    form,
    onSubmit,
    onToggleNotice,
    notice,
    errors,
    fileUploadCallback,
  });
};

export default React.memo(WriteContainer);
