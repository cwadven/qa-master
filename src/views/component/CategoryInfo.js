import './../../assets/scss/component/CategoryInfo.scss';
import CardSlider from './CardSlider';

const CategoryInfo = ({title}) => {
    const array_example = [
        {
            "title": "비문학",
            "body": "비문학은 어쩌고 내용입니다",
        },
        {
            "title": "문학",
            "body": "문학은 어쩌고 내용입니다",
        },
    ]
    return (
        <>
            <div className="CategoryInfo">
                {title}
            </div>
            <div>
                <CardSlider array={array_example}/>
            </div>
        </>
    );
}

export default CategoryInfo;