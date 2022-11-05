import styles from './defaultLayout.module.scss';
import Header from '~/Layout/components/Header';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function defaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

defaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default defaultLayout;
