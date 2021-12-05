import type { NextPage } from 'next'
import classNames from 'classnames/bind';
import Image from 'next/image'
import { HeaderContainer, AsideContainer, ScheduleListContainer } from '../../../containers';
import styles from './Layout.module.scss'
const cx = classNames.bind(styles);

const Layout: NextPage = ({
  children
}) => {
  return (
    <div className={cx('layout-wrapper')}>
      <HeaderContainer />
      <main className={cx('main-wrapper')}>
        <AsideContainer />
        <div className={cx('content-wrapper')}>
          {children}
        </div>
        <ScheduleListContainer />
      </main>
    </div>
  )
}

export default Layout
