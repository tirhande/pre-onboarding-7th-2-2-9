import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  padding: 25px 40px;
  line-height: 30px;
  margin-bottom: 20px;

  span {
    font-size: 26px;
    font-weight: bold;
    color: #3a474e;
  }
`;

// DatePicker
export const DateDiv = styled.div`
  position: relative;

  input {
    width: 275px;
    padding-right: 25px;
    text-align: right;
    font-size: 14px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: -4px;
    right: 5px;
  }
`;

// Trend / Media
export const SubSection = styled.section`
  height: 743px;
  padding: 20px 40px;
`;

export const SubHeader = styled.header`
  width: 100%;
  height: 20px;
  color: #3a474e;
  font-weight: bold;
  line-height: 20px;
  margin-bottom: 20px;
`;
export const Contents = styled.article`
  height: 654px;
  background: #fff;
  border-radius: 20px;

  padding: 40px;
`;

// Status
export const StatusSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;

  height: 178px;

  margin-bottom: 40px;
  box-sizing: content-box;
`;
// Status Card
export const CardArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 32%;
  height: 79px;

  padding: 18px 40px;
  border: 1px solid #edeff1;
  border-radius: 10px;

  span {
    font-size: 12px;
    color: #94a2ad;
  }
  span.triangle_icon {
    margin-right: 5px;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #3a474e;
  }
  > div {
    display: flex;
    justify-content: space-between;

    span {
      vertical-align: middle;
    }
    span:first-child {
      margin-right: 2px;
    }
  }
`;

// Chart
export const ChartSection = styled.section`
  height: 356px;
`;
// Chart Filter
export const FilterArticle = styled.article`
  height: 40px;

  margin-bottom: 40px;

  div {
    position: relative;
    display: inline-block;

    select {
      padding-left: 40px;
    }
  }
  div:first-child select {
    margin-right: 10px;
  }

  .week_select {
    float: right;

    select {
      width: 60px;
      border: none;
      padding-left: 0;
      padding-right: 10px;
      margin-right: 5px;
      color: #3a474e;
    }
  }
`;

export const IconSpan = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 15px;
  left: 15px;

  border-radius: 50%;

  background: ${({ color }) => color};
`;

export const ChartArticle = styled.article`
  height: 276px;
`;
