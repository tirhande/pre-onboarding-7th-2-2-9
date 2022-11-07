import { DiffTypeValue } from 'utils/mainUtils';
import { ReactComponent as ArrowFillUp } from 'assets/ArrowFillUp.svg';
import { ReactComponent as ArrowFillDown } from 'assets/ArrowFillDown.svg';
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
    variance === '0' ? <></> : variance.includes('-') ? <ArrowFillDown /> : <ArrowFillUp />;

  return (
    <CardArticle>
      <span>{title}</span>
      <div>
        <h3>
          {value} {suffix}
        </h3>
        <div>
          <span className="triangle_icon">{TriangleIcon}</span>
          <span>
            {variance.replace('-', '')} {suffix}
          </span>
        </div>
      </div>
    </CardArticle>
  );
};

export default Card;
