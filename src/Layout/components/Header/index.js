import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import images from '~/assets/images';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'arabic',
                    title: 'العربية',
                },
                {
                    type: 'language',
                    code: 'india',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    type: 'language',
                    code: 'philippines',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'czech',
                    title: 'Čeština (Česká republika)',
                },
                {
                    type: 'language',
                    code: 'germany',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    code: 'greek',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    type: 'language',
                    code: 'england',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'spanish',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'finland',
                    title: 'Suomi (Suomi)',
                },
                {
                    type: 'language',
                    code: 'philippines',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'french',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'israel',
                    title: 'עברית (ישראל)',
                },
                {
                    type: 'language',
                    code: 'hindi',
                    title: 'हिंदी',
                },
                {
                    type: 'language',
                    code: 'hungary',
                    title: 'Magyar (Magyarország)',
                },
                {
                    type: 'language',
                    code: 'indonesia',
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    type: 'language',
                    code: 'italia',
                    titl: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'japan',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'indonesia',
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    type: 'language',
                    code: 'cambodia',
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    type: 'language',
                    code: 'korea',
                    title: '한국어 (대한민국)',
                },
                {
                    type: 'language',
                    code: 'malaysia',
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    type: 'language',
                    code: 'myanmar',
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    type: 'language',
                    code: 'dutch',
                    title: 'Nederlands (Nederland)',
                },
                {
                    type: 'language',
                    code: 'poland',
                    title: 'Polski (Polska)',
                },
                {
                    type: 'language',
                    code: 'brazil',
                    title: 'Português (Brasil)',
                },
                {
                    type: 'language',
                    code: 'romania',
                    title: 'Română (Romania)',
                },
                {
                    type: 'language',
                    code: 'rusia',
                    title: 'Русский (Россия)',
                },
                {
                    type: 'language',
                    code: 'sweden',
                    title: 'Svenska (Sverige)',
                },
                {
                    type: 'language',
                    code: 'thailand',
                    title: 'ไทย (ไทย)',
                },
                {
                    type: 'language',
                    code: 'turkey',
                    title: 'Türkçe (Türkiye)',
                },
                {
                    type: 'language',
                    code: 'ukraine',
                    title: 'Українська (Україна)',
                },
                {
                    type: 'language',
                    code: 'urdu',
                    title: 'اردو',
                },
                {
                    type: 'language',
                    code: 'vietnam',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'china',
                    title: '简体中文',
                },
                {
                    type: 'language',
                    code: 'china',
                    title: '繁體中文',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle language change
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Logout',
            to: '/logout',
            seperate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src="" alt="Nguyen Van A" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
