import dayjs from 'dayjs';
import { ChartArticle } from 'pages/Main/styles';
import { ChartFormatter } from 'utils/adUtils';
import { IFilterData } from 'utils/mainUtils';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';

interface IToolTipItem {
  name: string;
  suffix: string;
}
interface IToolTip {
  [key: string]: IToolTipItem;
  roas: IToolTipItem;
  cost: IToolTipItem;
  imp: IToolTipItem;
  click: IToolTipItem;
  conv: IToolTipItem;
  convValue: IToolTipItem;
}

const TrendChart = ({ data }: { data: IFilterData }) => {
  const selectOption = {
    roas: {
      name: 'ROAS',
      suffix: '%',
    },
    cost: {
      name: '광고비',
      suffix: '원',
    },
    imp: {
      name: '노출 수',
      suffix: '회',
    },
    click: {
      name: '클릭 수',
      suffix: '회',
    },
    conv: {
      name: '전환 수',
      suffix: '회',
    },
    convValue: {
      name: '매출',
      suffix: '원',
    },
  } as IToolTip;
  const xOffsets = [10, 960];
  const colors = ['#4fadf7', '#85da47'];

  const maxima = Object.keys(data).map(obj => Math.max(...data[obj].map(d => Number(d.y))));
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
        }}
        width={960}
        domain={{ y: [0, 1] }}
        domainPadding={{ x: 50, y: [50, 20] }}
        padding={{ top: 10, left: 10, bottom: 35, right: 0 }}
        containerComponent={<VictoryVoronoiContainer />}
      >
        {/* 가로 Axis */}
        <VictoryAxis tickFormat={t => `${dayjs(t).format('M월 D일')}`} />
        {/* 세로 Axis */}
        {Object.keys(data).map((obj, i) => (
          <VictoryAxis
            dependentAxis
            key={i}
            style={{
              tickLabels: { fill: colors[i] },
              axis: { stroke: 'none' },
              grid: {
                fill: 'none',
                stroke: '#edeff1',
              },
            }}
            label={selectOption[obj].suffix}
            axisLabelComponent={<VictoryLabel dx={i * 55} angle={-360} />}
            tickValues={[0.25, 0.5, 0.75, 1]}
            tickFormat={t =>
              `${
                obj === 'roas' ? Math.floor((t * maxima[i]) / 100) : ChartFormatter(t * maxima[i])
              }`
            }
            offsetX={xOffsets[i]}
          />
        ))}
        {Object.keys(data).map((obj, i) => (
          <VictoryLine
            key={i}
            style={{ data: { stroke: colors[i] } }}
            data={data[obj]}
            y={datum => datum.y / maxima[i]}
            labels={({ datum }) =>
              `${selectOption[obj].name}: ${
                obj === 'roas' ? Math.floor(datum.y / 100) : ChartFormatter(datum.y)
              }${selectOption[obj].suffix}`
            }
            labelComponent={
              <VictoryTooltip
                flyoutPadding={{ left: 20, right: 20, bottom: 5, top: 5 }}
                style={{ fontSize: 14 }}
              />
            }
          />
        ))}
      </VictoryChart>
    </ChartArticle>
  );
};

export default TrendChart;
