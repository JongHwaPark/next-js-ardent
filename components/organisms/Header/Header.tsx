import React, {useState} from 'react'
import type { NextPage } from 'next'
import classNames from 'classnames/bind';
import { PageTitle } from '../../atoms';
import styles from './Header.module.scss'
const cx = classNames.bind(styles);

const Header: NextPage = ({
  onToggleImageSide,
  onToggleRobotList,
}: any) => {
  return (
    <header className={cx('header-wrapper')}>
      <PageTitle className={cx('header-title')}>
        <span>
          <button onClick={onToggleImageSide}>OPEN1</button>
        </span>
        <div>
          Dash Board
        </div>
        <span>
          <button onClick={onToggleRobotList}>OPEN2</button>
        </span>
      </PageTitle>
    </header>
  );
};

export default Header;
