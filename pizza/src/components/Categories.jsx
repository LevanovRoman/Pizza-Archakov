import {useState} from "react";

export default function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onClickCategory = (index) => {
        setActiveIndex(index);
    } // можно сократить как в PizzaBlock
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, index) => (
                        <li key={index} onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>
                            {value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
