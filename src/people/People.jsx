import s from './People.module.scss';

function People() {
    return (
        <div className={s.main_box}>
            people
            <span className={s.first_man}></span>
            <span className={s.second_man}></span>
            <span className={s.third_man}></span>
        </div>
    )
};

export default People;