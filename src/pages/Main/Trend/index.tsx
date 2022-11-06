import Status from './Status';
import Chart from './Chart';
import { Contents, SubHeader, SubSection } from '../styles';

const Trend = () => {
  return (
    <SubSection>
      <SubHeader>
        <h2>통합 광고 현황</h2>
      </SubHeader>
      <Contents>
        <Status />
        <Chart />
      </Contents>
    </SubSection>
  );
};

export default Trend;
