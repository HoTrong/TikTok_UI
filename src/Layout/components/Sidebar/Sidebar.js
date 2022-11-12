import Accounts from '~/components/Accounts';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    LiveActiveIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    //const [dataValue, setDataValue] = useState([]);
    const [dataValue1, setDataValue1] = useState([]);
    const [dataValue2, setDataValue2] = useState([]);

    useEffect(() => {
        fetch('https://api.npoint.io/b14f79626b8ff52c3403')
            .then((res) => res.json())
            .then((data) => {
                setDataValue1(data.info);
            });
    }, []);

    useEffect(() => {
        fetch('https://api.npoint.io/4761a322708954dfddd4')
            .then((res) => res.json())
            .then((data) => {
                setDataValue2(data.info);
            });
    }, []);

    // useEffect(() => {
    //     fetch('https://api.npoint.io/0446e0de4bad5f8a268d')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setDataValue(data.data);
    //         });
    // }, [dataValue]);

    console.log(dataValue1);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <Accounts label="Suggested Accounts" datas={dataValue1} />
            <Accounts label="Following Accounts" datas={dataValue2} />
        </aside>
    );
}

export default Sidebar;
