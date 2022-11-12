import Post from '~/components/Post';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Home;
