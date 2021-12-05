import React, {useState} from 'react'
import type { NextPage } from 'next'
import classNames from 'classnames/bind';
import styles from './Aside.module.scss'
const cx = classNames.bind(styles);

const AsideBar: NextPage = ({
  active
}:any) => {
  const imageList = [1,2,3,4,5];

  return (
    <div className={cx('side-bar-wrapper')}>
      <div className={cx('side-bar-content', {
        active:active
      })}>
        <ul>
          {
            imageList.map((image, index) => (
              <li>{index}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default AsideBar;
