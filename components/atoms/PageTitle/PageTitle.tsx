import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTitle.module.scss';
const cx = classNames.bind(styles);

interface PageTitleProps {
  className?: String,
  children: React.ReactNode
}

const PageTitle = ({ className, children }: PageTitleProps) => (
  <h3 className={cx('page-title', className)}>{children}</h3>
);

export default React.memo(PageTitle);
