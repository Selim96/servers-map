import s from './People.module.scss';

function People({continent}) {
    const onClickPeople = (e) => {
        console.dir(e.target.id);
        console.log('continent:', continent)
        console.log('=============================')
    }

    return (
        <div className={s.main_box}>
            <span className={s.first_man} onClick={onClickPeople} id={'first'}>
                <span className={s.second_man} id={'second'}>
                    <span className={s.third_man} id={'third'}></span>
                </span>
            </span>
            
            
        </div>
    )
};

export default People;