import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VisitorInfo from '../../../../visitors/VisitorInfo';

const ListMain = (props) => {
    const navigate = useNavigate();
    const { bid } = useParams();

    const handleButtonClick = () => {
        navigate(`/board/write/${bid}`);
    };

    return (
        <>
            <h1>리스트메인</h1>
            {/* <VisitorInfo/> */}
            <button onClick={handleButtonClick}>글쓰기 페이지로 이동</button>
        </>
    );
};

export default React.memo(ListMain);
