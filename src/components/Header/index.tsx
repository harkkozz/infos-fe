import React, { useState } from 'react';

import HomeIcon from '@iconscout/react-unicons/icons/uil-home';
import { Avatar, Button, Layout } from 'antd';
import { ReactComponent as Logo } from 'assets/icons/vite.svg';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { isExpired } from 'react-jwt';
import { NavLink, useNavigate } from 'react-router-dom';
import { getNameInitials } from 'utils/helpers';

import { useUserStorage } from 'store/user';

import styles from './Header.module.scss';

interface Props {
  handleOnLoginClick: () => void;
  handleOnSignupClick: () => void;
}

const Header: React.FC<Props> = ({ handleOnLoginClick, handleOnSignupClick }) => {
  const { t } = useTranslation();

  const { token, user, setUser } = useUserStorage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onAvatarClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleOnLogoClick = () => {
    navigate('/');
  };

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.homeLogo} onClick={handleOnLogoClick}>
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
                  <NavLink
                    to={`/`}
                    className={({ isActive }) => {
                      return classnames(styles.menuItem, {
                        [styles.isActive]: isActive
                      });
                    }}
                  >
                    <HomeIcon /> {t('home')}
                  </NavLink>
                  <NavLink
                    to={`/user/${user.slug}`}
                    className={({ isActive }) => {
                      return classnames(styles.menuItem, {
                        [styles.isActive]: isActive
                      });
                    }}
                  >
                    {user.name}
                  </NavLink>
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
