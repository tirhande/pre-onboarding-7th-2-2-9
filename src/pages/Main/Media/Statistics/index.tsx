import { StatisticsDiv } from 'pages/Main/styles';
import { CompnayName, ICommonData, IMergeMedia, KeyName } from 'utils/mediaUtils';

const Statistics = ({ mergeData }: { mergeData: IMergeMedia }) => {
  const mergeKey = Object.keys(mergeData);
  const nameArr = Object.keys(mergeData[mergeKey[0]]);
  const totalData = mergeKey.reduce(
    (cur, acc) => {
      nameArr.forEach(name => {
        cur[name] += Math.floor(mergeData[acc][name]);
      });
      return cur;
    },
    {
      imp: 0,
      click: 0,
      cost: 0,
      roas: 0,
      convValue: 0,
      ctr: 0,
      cvr: 0,
      cpc: 0,
      cpa: 0,
      sales: 0,
    } as ICommonData
  );

  return (
    <StatisticsDiv>
      <div className="stat_table">
        <div>
          <div></div>
          {nameArr.map((name, i) => (
            <div key={i} className="stat_title">
              {KeyName[name]}
            </div>
          ))}
        </div>
        {Object.keys(mergeData).map((company, i) => (
          <div key={i}>
            <div className="stat_company">{CompnayName[company].name}</div>
            {Object.keys(KeyName).map((key, j) => (
              <div key={j} className="stat_value">
                {Math.floor(mergeData[company][key]).toLocaleString()}
              </div>
            ))}
          </div>
        ))}
        <div className="stat_total">
          <div className="stat_company">총계</div>
          {Object.keys(KeyName).map((key, i) => {
            return <div key={i}>{totalData[key].toLocaleString()}</div>;
          })}
        </div>
      </div>
    </StatisticsDiv>
  );
};

export default Statistics;
