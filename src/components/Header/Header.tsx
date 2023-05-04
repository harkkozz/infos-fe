import React, { useState } from 'react';

import { Avatar, Button, Layout } from 'antd';
import { ReactComponent as Logo } from 'assets/icons/vite.svg';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { isExpired } from 'react-jwt';
import { getNameInitials } from 'utils/helpers';

import { useUserStorage } from 'store/user';

import styles from './Header.module.scss';

interface IProps {
  handleOnLoginClick: () => void;
  handleOnSignupClick: () => void;
}

const Header: React.FC<IProps> = ({ handleOnLoginClick, handleOnSignupClick }) => {
  const { t } = useTranslation();

  const { token, user, setUser } = useUserStorage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onAvatarClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    setUser(null);
  };

  console.log(isExpired(token));

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <Logo height={30} width={40} />
        </div>

        <div className={styles.headerActionsContainer}>
          {!token || isExpired(token) ? (
            <div className={styles.headerContentActions}>
              <Button onClick={handleOnLoginClick}>{t('login')}</Button>
              <Button onClick={handleOnSignupClick}>{t('signup')}</Button>
            </div>
          ) : (
            <>
              <Avatar
                size={'large'}
                className={classnames(styles.avatar, {
                  [styles.activeAvatar]: isMenuOpen
                })}
                onClick={onAvatarClick}
              >
                {getNameInitials(user.name)}
              </Avatar>
              {isMenuOpen && (
                <div className={styles.menu}>
                  <div className={classnames(styles.menuItem, styles.menuItemProfile)} onClick={console.log}>
                    {user.name}
                  </div>
                  <div className={styles.menuItem}>
                    <Button onClick={handleLogout}>{t('logout')}</Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
