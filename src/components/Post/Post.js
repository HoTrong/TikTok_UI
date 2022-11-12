import AccountPreview from '~/components/Accounts/AccountPreview/AccountPreview';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import ReactPlayer from 'react-player';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function Post() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview
                        nickname="Reversible Gundam"
                        name="HG-Reversible Gumdam"
                        src="https://i.ibb.co/FBqkJJs/HG-Reversible.jpg"
                    />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('post')}>
            <Tippy interactive delay={[200, 0]} offset={[130, 10]} placement="bottom" render={renderPreview}>
                <img src="https://i.ibb.co/FBqkJJs/HG-Reversible.jpg" className={cx('avatar')} alt="" />
            </Tippy>
            <div className={cx('content')}>
                <div className={cx('main-content')}>
                    <p>
                        <div className={cx('header')}>
                            <Tippy
                                interactive
                                delay={[200, 0]}
                                offset={[10, 40]}
                                placement="bottom"
                                render={renderPreview}
                            >
                                <h3 className={cx('name')}>Reversible Gundam</h3>
                            </Tippy>
                            <h4 className={cx('more-info')}>HG Reversible Gundam</h4>
                        </div>
                        <p className={cx('comment')}>
                            The High Grade Build Fighters (HGBF) CB-9696G/C/T Reversible Gundam is a 1/144 scale kit
                            released in 2017.
                        </p>
                    </p>
                    <Button className={cx('follow-btn')} outline>
                        Follow
                    </Button>
                </div>
                <div className={cx('reactions')}>
                    <ReactPlayer
                        width="85%"
                        url="https://youtu.be/EOBwyce9vrA"
                        playing={true}
                        loop={true}
                        controls={true}
                    />
                    <div className={cx('reaction-icon')}>
                        <div className={cx('icon-layout')}>
                            <div className={cx('background')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                            </div>
                            <span className={cx('amount')}>
                                <strong>112k</strong>
                            </span>
                        </div>
                        <div className={cx('icon-layout')}>
                            <div className={cx('background')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faComment} />
                            </div>
                            <span className={cx('amount')}>
                                <strong>112k</strong>
                            </span>
                        </div>
                        <div className={cx('icon-layout')}>
                            <div className={cx('background')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                            </div>
                            <span className={cx('amount')}>
                                <strong>112k</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
