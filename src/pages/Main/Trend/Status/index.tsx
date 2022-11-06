import useStatusData from 'hooks/useStatusData';
import { StatusSection } from 'pages/Main/styles';
import Card from './Card';

const Status = () => {
  const { roas, cost, imp, click, conv, convValue } = useStatusData();
  return (
    <>
      <StatusSection>
        <Card title="ROAS" data={roas} />
        <Card title="광고비" data={cost} />
        <Card title="노출 수" data={imp} />
        <Card title="클릭 수" data={click} />
        <Card title="전환 수" data={conv} />
        <Card title="매출" data={convValue} />
      </StatusSection>
    </>
  );
};

export default Status;
