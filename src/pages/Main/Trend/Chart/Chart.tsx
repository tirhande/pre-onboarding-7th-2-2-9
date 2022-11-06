import dayjs from 'dayjs';
import { ChartArticle } from 'pages/Main/styles';
import { ChartFormatter } from 'utils/adUtils';
import { IFilterData } from 'utils/mainUtils';
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
interface IToolTip {
  [key: string]: string;
  roas: string;
  cost: string;
  imp: string;
  click: string;
  conv: string;
  convValue: string;
}
const TrendChart = ({ data }: { data: IFilterData }) => {
  const selectOption = {
    roas: 'ROAS',
    cost: '광고비',
    imp: '노출 수',
    click: '클릭 수',
    conv: '전환 수',
    convValue: '매출',
  } as IToolTip;

  const colors = ['#4fadf7', '#85da47'];
  return (
    <ChartArticle>
      <VictoryChart
        theme={{
          // 가로 Axis
          independentAxis: {
            style: {
              tickLabels: { fill: '#94a2ad' },
              axis: { stroke: 'none' },
              grid: {
                fill: 'none',
                stroke: 'none',
              },
            },
          },
          // 세로 Axis
          dependentAxis: {
            style: {
              // tickLabels: {fontSize: 15, padding: 5}
              tickLabels: { fill: '#94a2ad' },
              axis: { stroke: 'none' },
              grid: {
                fill: 'none',
                stroke: '#edeff1',
              },
            },
          },
        }}
        width={960}
        domainPadding={{ x: 50, y: [50, 20] }}
        padding={{ top: 10, left: 10, bottom: 35, right: 0 }}
        containerComponent={<VictoryVoronoiContainer />}
      >
        {/* 가로 Axis */}
        <VictoryAxis tickFormat={t => `${dayjs(t).format('M월 D일')}`} />
        {/* 세로 Axis */}
        <VictoryAxis dependentAxis tickCount={6} tickFormat={t => `${ChartFormatter(t)}`} />
        {Object.keys(data).map((obj, index) => (
          <VictoryGroup
            key={index}
            color={colors[index]}
            labels={({ datum }) => `${selectOption[obj]}: ${ChartFormatter(datum.y)}`}
            labelComponent={
              <VictoryTooltip
                flyoutPadding={{ left: 20, right: 20, bottom: 5, top: 5 }}
                style={{ fontSize: 14 }}
              />
            }
            data={data[obj]}
          >
            <VictoryLine />
            <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
          </VictoryGroup>
        ))}
      </VictoryChart>
    </ChartArticle>
  );
};

export default TrendChart;
