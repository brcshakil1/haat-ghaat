import { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";

const Main = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCategories(data.categories))
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <Categories categories={categories}/>        
        </div>
    );
};

export default Main;