import React, {useCallback} from 'react'
import type { NextPage } from 'next'
import classNames from 'classnames/bind';
import { Button } from '../../atoms';
import styles from './Aside.module.scss'
const cx = classNames.bind(styles);

const AsideButton = ({
  children,
  onClickImageList,
  active,
  image,
  index,
}: any) => {
  const handleClickBtn = useCallback(() => {
    console.log(image, index);
    onClickImageList(image, index);
  }, []);

  return <Button onClick={handleClickBtn} active={active}>{children}</Button>
};

const AsideBar: NextPage = ({
  active,
  imageList,
  onClickImageList,
  activeIndex,
}:any) => {
  return (
    <div className={cx('side-bar-wrapper')}>
      <div className={cx('side-bar-content', {
        active:active
      })}>
        <ul>
          {
            imageList.map(( image , index) => (
              <li 
                key={index}
              >
                <AsideButton
                  key={index}
                  onClickImageList={onClickImageList}
                  image={image}
                  index={index}
                  active={index === activeIndex}
                >
                  {index + 1}
                </AsideButton>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default React.memo(AsideBar);
