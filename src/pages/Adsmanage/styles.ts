import styled from 'styled-components';

export const Header = styled.header`
  height: 80px;
  padding: 25px 40px;
  line-height: 30px;
  margin-bottom: 30px;

  h1 {
    font-size: 26px;
    font-weight: bold;
    color: #3a474e;
  }
`;

// Admanage
export const Contents = styled.div`
  background: #fff;
  border-radius: 20px;
  margin: 40px;
  padding: 40px;
`;
export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// AdItem
export const ItemArticle = styled.article`
  width: 305px;
  height: 420px;

  border: 1px solid #d1d8dc;
  border-radius: 10px;
  padding: 40px 20px 20px 20px;
  margin-bottom: 20px;

  button {
    margin-right: 10px;
  }
`;
export const TableHeader = styled.header`
  width: 100%;

  margin-bottom: 20px;
  color: #3a474e;
  font-size: 16px;
  font-weight: bold;
`;
export const Table = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px 0;
`;
export const TableRow = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-top: 1px solid #edeff1;

  &:last-child {
    border-bottom: 1px solid #edeff1;
  }
`;
export const AdTitle = styled.div`
  width: 40%;
  font-size: 12px;
  color: #94a2ad;
`;
export const AdContents = styled.div`
  width: 60%;
  font-size: 12px;
  font-weight: bold;
  color: #3a474e;
`;

// AdHeader
export const SubHeader = styled.header`
  display: flex;
  justify-content: space-between;

  height: 40px;
  margin-bottom: 40px;

  select {
    font-size: 14px;
  }
`;
