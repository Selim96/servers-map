import { useState } from 'react';
import s from './People.module.scss';



function People({ continent }) {
    const [isShowDevice, setIsShowDevice] = useState(null);

    const onClickPeople = (e) => {
        switch (e.target.id) {
            case 'first':
                setIsShowDevice(1);
                break;
            case 'second':
                setIsShowDevice(2);
                break;
            case 'third':
                setIsShowDevice(3);
                break;
            default:
                console.log("Invalid subscription type")
        }
    };

    return (
        <div className={`${s.main_box} ${s[continent]}`}>
            {isShowDevice === null ?
            <span className={s.first_man} onClick={onClickPeople} id={'first'}>
                <span className={s.second_man} id={'second'}>
                    <span className={s.third_man} id={'third'}></span>
                </span>
            </span> : 
            <div className={s.device_wrapper}>
                {isShowDevice >= 1 && <span className={`${s.laptop} ${s[`${continent}_D`]}`} ></span>}
                {isShowDevice >= 2 && <span className={`${s.tablet} ${s[`${continent}_D`]}`} ></span>}
                {isShowDevice === 3 && <span className={`${s.mobile} ${s[`${continent}_D`]}`} ></span>}
            </div>}
        </div>
    )
};

export default People;