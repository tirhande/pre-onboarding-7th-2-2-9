import styled from 'styled-components';

const Media = () => {
  return (
    <Section>
      <SubHeader>
        <h2>매체 현황</h2>
      </SubHeader>
      <Contents></Contents>
    </Section>
  );
};

const Section = styled.section`
  height: 743px;

  padding: 20px 40px;
  // background: #c2defd;
`;

const SubHeader = styled.header`
  width: 100%;
  height: 20px;
  color: #3a474e;
  font-weight: bold;
  line-height: 20px;
  margin-bottom: 20px;
`;
const Contents = styled.article`
  height: 654px;
  padding: 40px;

  background: #fff;
  border-radius: 20px;
`;
export default Media;
