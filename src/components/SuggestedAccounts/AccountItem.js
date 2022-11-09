import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('account-item')}>Account Item</div>;
}

AccountItem.propTypes = {};

export default AccountItem;
