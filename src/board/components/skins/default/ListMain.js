import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ListMain = (props) => {
    const navigate = useNavigate();
    const { bid } = useParams();

    const handleButtonClick = () => {
        navigate(`/board/write/${bid}`);
    };

    return (
        <>
            {/* <VisitorInfo/> */}
            <button onClick={handleButtonClick}>글쓰기 페이지로 이동</button>
        </>
    );
};

export default React.memo(ListMain);
