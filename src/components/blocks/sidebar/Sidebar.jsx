import React from 'react';
import styled from 'styled-components';
import lever_logo from 'assets/lever_logo.png';
import { NavLink } from 'react-router-dom';
import StyledSelect from 'components/common/Select';
import { ReactComponent as DashIcon } from 'assets/Dashboard.svg';
import { ReactComponent as AdIcon } from 'assets/AdManage.svg';
import { ReactComponent as LightIcon } from 'assets/Light.svg';

const Sidebar = () => {
  const onSelect = e => {
    if (e.target.value === 'addservice') {
      alert('준비중입니다.');
    }
  };

  return (
    <ASide>
      <Logo />
      <ServiceDiv>
        <SubTitle>
          <span>서비스</span>
        </SubTitle>
        <StyledSelect onChange={onSelect} defaultValue={'madup'}>
          <option value="madup">매드업</option>
          <option value="addservice">서비스 추가하기</option>
        </StyledSelect>
      </ServiceDiv>
      <SideNav>
        <SubTitle>
          <span>광고 센터</span>
        </SubTitle>
        <ul>
          <NavLink to="/main" className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>
              <span>
                <DashIcon />
              </span>
              <span>대시보드</span>
            </li>
          </NavLink>
          <NavLink to="/admanage" className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>
              <span>
                <AdIcon />
              </span>
              <span>광고관리</span>
            </li>
          </NavLink>
        </ul>
      </SideNav>
      <GuideDiv>
        <div className="guide_icon">
          <div>
            <LightIcon />
          </div>
        </div>
        <div className="guide_contents">
          <p className="guide_desc">레버 이용 가이드</p>
          <p className="guide_before">시작하기 전에 알아보기</p>
        </div>
      </GuideDiv>
      <TermsDiv>
        <p>레버는 함께 만들어갑니다.</p>
        <p onClick={() => alert('준비중입니다.')}>이용약관</p>
      </TermsDiv>
    </ASide>
  );
};
const ASide = styled.aside`
  display: flex;
  flex-direction: column;

  width: 320px;
  padding: 0 40px;

  background-color: #fff;
`;

const Logo = styled.header`
  height: 150px;
  padding: 60px 0;
  border-bottom: 1px solid #edeff1;
  background-image: url(${lever_logo});
  background-origin: content-box;
  background-repeat: no-repeat;
`;
const ServiceDiv = styled.div`
  height: 100px;
  margin: 40px 0;

  select {
    width: 100%;
    height: 60px;

    border-radius: 10px;
    border: 1px solid #d1d8dc;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bold;
  }
`;
const SideNav = styled.nav`
  ul {
    a {
      text-decoration: none;

      svg {
        fill: #3a474e;
      }
    }
    a.active {
      li {
        color: #586cf5;
        background-color: #edeff1;
        border-radius: 10px;
      }

      svg {
        fill: #586cf5;
      }
    }
  }
  li {
    padding: 20px 22px;
    color: #3a474e;
    font-weight: bold;

    span:first-child {
      vertical-align: middle;
      margin-right: 12px;
    }
  }
`;
const SubTitle = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  font-weight: bold;
  color: #94a2ad;

  span {
    padding-left: 20px;
  }
`;

const GuideDiv = styled.div`
  width: 240px;
  height: 100px;

  display: flex;
  align-items: center;

  border-radius: 10px;
  background-color: #e5f4fd;
  padding: 30px 20px;
  margin: 260px 0 40px 0;

  .guide_icon {
    margin-right: 8px;
    div {
      width: 40px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #586cf5;
    }
  }
  .guide_contents {
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .guide_desc {
      font-size: 16px;
      font-weight: bold;
      color: #3a474e;
    }
    .guide_before {
      font-size: 12px;
      color: #94a2ad;
    }
  }
`;
const TermsDiv = styled.div`
  color: #94a2ad;
  font-size: 12px;
  padding: 0 20px;

  p:last-child {
    margin-top: 10px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export default Sidebar;
