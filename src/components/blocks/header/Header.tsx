import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AlarmIcon } from 'assets/Alarm.svg';
import { ReactComponent as SettingIcon } from 'assets/Settings.svg';
import { ReactComponent as UserIcon } from 'assets/User.svg';

// Header 1120 * 80
const Header = () => {
  return (
    <HeaderStyle>
      <div className="alarm_info">
        <AlarmIcon />
        <AlertBadge />
      </div>
      <div>
        <SettingIcon />
      </div>
      <div className="user_info">
        <UserIcon />
      </div>
      <div className="user_name">원티드님</div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 80px;

  padding: 20px 40px;
  border-bottom: 1px solid #edeff1;
  background-color: #f6f7f8;

  > div {
    margin-left: 30px;
  }
  .alarm_info {
    position: relative;
  }
  .user_info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    background-color: #edeff1;
    border: 1px solid #d1d8dc;
    border-radius: 50%;
  }

  .user_name {
    color: #3a474e;
    font-size: 14px;
    margin-left: 10px;
  }
`;

const AlertBadge = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  top: -5px;

  background: #ea3a4b;
  border-radius: 50%;
`;

export default Header;
