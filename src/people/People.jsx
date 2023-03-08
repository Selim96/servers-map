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
            {isShowDevice === null && <span className={s.first_man} onClick={onClickPeople} id={'first'}>
                <span className={s.second_man} id={'second'}>
                    <span className={s.third_man} id={'third'}></span>
                </span>
            </span>}
            <div className={s.device_wrapper}>
                <span className={`${s.laptop} ${isShowDevice >= 1 && s.device}`} ></span>
                <span className={`${s.tablet} ${isShowDevice >= 2 && s.device}`}></span>
                <span className={`${s.mobile} ${isShowDevice >= 3 && s.device}`}></span>
            </div>
            
        </div>
    )
};

export default People;