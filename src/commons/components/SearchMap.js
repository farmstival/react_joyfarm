import React, { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import map from '../../images/map/map.png';
import kangwon from '../../images/map/kangwon.png';
import seoul from '../../images/map/seoul.png';
import gyeonggi from '../../images/map/gyeonggi.png';
import choongnam from '../../images/map/choongnam.png';
import choongbuk from '../../images/map/choongbuk.png';
import gyeongnam from '../../images/map/gyeongnam.png';
import gyeongbuk from '../../images/map/gyeongbuk.png';
import jeollabuk from '../../images/map/jeollabuk.png';
import jeollanam from '../../images/map/jeollanam.png';
import jeju from '../../images/map/jeju.png';
import styled from 'styled-components';
const Wrapper = styled.div``;

function getImage(location) {
  switch (location) {
    case '강원':
      return kangwon;
    case '서울':
      return seoul;
    case '경기':
      return gyeonggi;
    case '충남':
      return choongnam;
    case '충북':
      return choongbuk;
    case '경남':
      return gyeongnam;
    case '경북':
      return gyeongbuk;
    case '전남':
      return jeollanam;
    case '전북':
      return jeollabuk;
    case '제주':
      return jeju;
    default:
      return map;
  }
}

const SearchMap = () => {
  const [searchParams] = useSearchParams();
  const sido = searchParams.get('sido');

  const [image, setImage] = useState(() => getImage(sido));
  const onChange = useCallback((location) => {
    setImage(() => getImage(location));
  }, []);
  return (
    <>
      <Wrapper>
        <img src={image} alt="지도" width="500" useMap="#imgmap" />
      </Wrapper>
      <map id="imgmap" name="imgmap">
        <area
          onMouseOver={() => onChange('강원')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="강원도"
          coords="326,4,346,44,365,86,379,111,405,147,425,166,427,181,433,189,437,200,443,207,448,218,456,222,457,229,466,245,466,258,463,267,450,280,439,273,422,278,407,275,402,278,391,267,386,270,385,282,379,287,373,279,361,274,349,267,338,267,331,261,321,264,318,259,325,250,315,253,308,246,301,247,293,249,284,257,275,245,269,248,265,260,245,265,237,249,244,227,250,211,243,199,252,189,236,186,226,174,211,175,210,165,205,160,210,140,222,127,212,117,197,106,195,92,186,89,181,93,171,87,174,81,164,85,157,79,155,90,146,86,136,69,149,56,168,53,192,50,204,59,210,53,249,55,263,52,284,56,318,31,320,6"
          href="/recommend/festival?sido=강원"
        />
        <area
          onMouseOver={() => onChange('서울')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="서울"
          coords="101,184,118,181,137,165,147,170,147,182,150,188,158,198,148,207,137,207,128,205,124,210,114,204"
          href="/recommend/festival?sido=서울"
        />
        <area
          onMouseOver={() => onChange('경기')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="경기,인천"
          coords="225,175,207,177,210,161,203,160,208,150,205,142,219,127,209,120,207,112,195,109,193,96,185,95,179,99,172,95,171,85,163,88,158,83,153,95,133,72,127,79,118,93,111,112,90,122,88,132,91,141,85,144,85,152,65,153,50,143,39,151,38,164,44,174,39,178,48,190,46,201,40,207,45,215,54,214,66,203,80,220,112,207,100,186,104,179,116,182,133,165,142,162,148,168,146,187,159,189,156,200,243,198,252,187,236,188"
          href="/recommend/festival?sido=경기"
        />
        <area
          onMouseOver={() => onChange('경기')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="경기,인천"
          coords="85,220,113,206,125,209,132,205,142,211,159,200,242,198,246,212,238,223,238,240,236,249,229,261,221,256,218,267,211,274,203,276,193,283,183,296,169,303,153,293,130,298,114,298,108,287,96,279,98,270,104,259,88,267,77,249,65,250,71,235"
          href="/recommend/festival?sido=경기"
        />
        <area
          onMouseOver={() => onChange('충남')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="충청남도"
          coords="153,294,158,301,169,303,174,315,186,322,189,329,180,330,171,340,171,351,176,365,181,368,179,371,187,380,194,381,200,392,207,390,204,397,200,411,208,417,211,425,217,432,216,442,224,454,200,464,180,449,176,436,162,445,150,442,145,432,130,434,119,432,111,446,99,457,85,457,81,445,69,435,57,435,67,415,62,405,67,398,59,394,62,386,55,365,57,343,52,341,49,355,44,361,48,379,49,392,38,386,35,361,28,357,23,337,13,343,6,337,6,324,16,312,14,302,26,309,32,288,41,281,54,285,48,273,59,277,71,283,81,285,99,290,105,303,108,317,115,307"
          href="/recommend/festival?sido=충남"
        />
        <area
          onMouseOver={() => onChange('충북')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="충청북도"
          coords="193,331,180,316,172,305,184,295,187,288,194,287,200,280,207,279,226,268,223,262,233,263,238,252,241,264,262,261,272,246,284,254,292,250,304,248,308,254,318,251,314,262,329,266,340,271,346,269,367,276,357,279,354,288,345,296,335,301,337,313,332,319,324,322,316,312,304,313,299,318,286,321,280,328,284,338,267,336,260,341,254,350,245,356,254,363,259,375,255,393,254,407,254,414,264,411,267,417,277,419,280,424,274,427,271,435,268,445,254,459,247,456,239,456,225,451,217,437,211,417,204,411,210,391,208,382,203,387,194,380,188,380,183,370,186,362,177,363,174,345,182,334"
          href="/recommend/festival?sido=충북"
        />
        <area
          onMouseOver={() => onChange('경남')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="경남"
          coords="258,482,262,487,270,483,277,490,289,489,289,496,297,507,299,523,320,526,330,528,348,521,358,533,375,533,381,538,392,533,402,524,421,529,428,520,432,513,451,512,460,522,479,520,483,528,476,553,471,545,468,560,465,574,452,579,449,603,427,620,414,626,402,616,375,615,360,604,365,618,354,624,352,614,342,617,346,632,339,635,333,651,328,655,319,653,324,639,318,637,315,648,299,650,282,642,283,624,275,626,275,634,268,637,263,628,259,638,244,642,244,626,228,607,219,596,215,584,226,579,223,568,231,559,226,555,219,531,231,501"
          href="/recommend/festival?sido=경남"
        />
        <area
          onMouseOver={() => onChange('경북')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="경북"
          coords="465,263,476,279,475,297,483,327,482,340,474,353,481,374,471,400,471,420,475,444,471,454,480,465,498,448,497,459,490,475,487,510,478,519,458,518,452,511,432,508,427,518,421,526,408,526,401,524,391,531,382,534,368,531,358,530,347,520,336,526,327,525,318,521,303,522,302,505,293,493,284,488,272,491,269,481,264,483,257,476,262,468,257,460,270,453,276,429,285,426,278,416,271,417,263,409,255,408,259,384,262,370,248,356,259,346,265,340,272,338,285,339,282,324,292,321,302,321,312,313,322,324,337,320,338,300,355,289,356,280,374,278,380,283,386,268,394,266,400,277,416,275,435,272,451,283"
          href="/recommend/festival?sido=경북"
        />
        <area
          onMouseOver={() => onChange('전남')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="전남"
          coords="179,679,174,686,169,683,164,693,157,696,148,707,156,713,168,716,176,725,194,711,203,699,188,679,186,658,204,656,216,674,208,682,222,697,221,684,228,674,238,678,242,655,232,655,224,661,216,646,227,647,231,642,243,632,238,621,229,611,218,603,209,576,200,571,190,577,173,580,156,579,141,580,137,575,140,566,134,561,132,555,127,563,118,561,109,552,102,553,98,560,91,570,86,573,81,577,76,579,68,582,52,559,46,561,40,581,31,593,43,606,44,616,40,621,20,660,43,650,41,667,45,675,40,687,33,673,27,684,27,694,31,699,22,706,4,729,4,737,16,739,32,739,44,722,40,707,54,718,57,730,58,740,65,751,79,743,80,731,100,714,101,696,101,721,113,726,124,723,131,706,137,690,154,683,166,671,174,678"
          href="/recommend/festival?sido=전남"
        />
        <area
          onMouseOver={() => onChange('전북')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="전북"
          coords="67,466,89,465,111,452,121,433,141,438,151,445,164,445,176,443,179,450,193,463,205,463,229,454,242,461,254,460,258,470,256,476,253,484,225,500,226,508,216,526,216,534,220,545,224,559,220,565,221,574,213,580,203,569,188,576,182,576,158,578,145,578,143,567,136,563,135,553,128,554,124,559,106,548,97,552,90,568,79,576,74,572,66,580,61,565,53,555,63,542,83,533,56,531,52,523,80,505,86,495,97,500,89,483,104,476,80,481"
          href="/recommend/festival?sido=전북"
        />
        <area
          onMouseOver={() => onChange('제주')}
          onMouseOut={() => onChange(map)}
          shape="poly"
          alt="제주"
          coords="83,808,108,789,139,778,182,771,190,781,194,795,180,814,156,820,146,826,127,827,106,827,98,831,87,819"
          href="/recommend/festival?sido=제주"
        />
      </map>
    </>
  );
};

export default React.memo(SearchMap);
