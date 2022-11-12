import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function Accounts({ label, datas }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {datas.map((data) => (
                <AccountItem key={data.key} nickname={data.nickname} name={data.name} src={data.src} />
            ))}

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

Accounts.propTypes = {
    label: PropTypes.string.isRequired,
    datas: PropTypes.array.isRequired,
};

export default Accounts;
