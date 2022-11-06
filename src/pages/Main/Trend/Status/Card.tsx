import { DiffTypeValue } from 'utils/mainUtils';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { CardArticle } from 'pages/Main/styles';

const Card = ({ title, data: { value, variance } }: { title: string; data: DiffTypeValue }) => {
  const suffix = {
    ROAS: '%',
    광고비: '원',
    '노출 수': '회',
    '클릭 수': '회',
    '전환 수': '회',
    매출: '원',
  }[title];

  const TriangleIcon =
    variance === '0' ? (
      <></>
    ) : variance.includes('-') ? (
      <AiFillCaretDown color="#85da47" size={12} />
    ) : (
      <AiFillCaretUp color="#ff0000" />
    );

  return (
    <CardArticle>
      <span>{title}</span>
      <div>
        <h3>
          {value} {suffix}
        </h3>
        <div>
          <span>{TriangleIcon}</span>
          <span>
            {variance.replace('-', '')} {suffix}
          </span>
        </div>
      </div>
    </CardArticle>
  );
};

export default Card;
