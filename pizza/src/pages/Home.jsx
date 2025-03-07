import Categories from "../components/Categories.jsx";
import Sort from "../components/Sort.jsx";
import Skeleton from "../components/Skeleton.jsx";
import PizzaBlock from "../components/PizzaBlock.jsx";
import {useEffect, useState} from "react";


export const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://67c947b60acf98d0708987f0.mockapi.io/items')
            .then((res) => {return res.json();})
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoading ? [... new Array(6)].map((_, index) => <Skeleton key={index}/>) :
                    items.map((obj) => <PizzaBlock key={obj.id} {... obj}
                // title={obj.title} price={obj.price} imageUrl={obj.imageUrl} sizes={obj.sizes} types={obj.types}
                    />)
                }
            </div>
        </>
    )
}