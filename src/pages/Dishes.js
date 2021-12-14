import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { humanziePrice } from "../common/ultis";
import { getCategories } from "../store/category.store";
import { getDishes } from '../store/dish.store';

export default function Dishes() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishes()).unwrap();
        dispatch(getCategories()).unwrap();
    }, []);

    const { dishes } = useSelector(state => state.dishes);
    const { categories } = useSelector(state => state.categories);

    const items = dishes.map(d => ({
        ...d,
        categoryName: categories.find(c => c.id === d.category)?.name
    }));

    return (
        <div className="w-full flex flex-col justify-between mb-6 gap-8 max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8 shadow-lg my-12">
            <div className='flex justify-between'>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Món ăn</h3>
                <Link
                    to={'dishes/create/'}
                    className="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"
                >
                    Tạo mới
                </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {items.map((dish) => (
                    <div key={dish.id} className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src={dish.images ? dish.images[0] : ''}
                                alt={dish.name}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div className="flex flex-col">
                                <h3 className="text-sm text-gray-700">
                                    <Link to={`dishes/${dish.id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {dish.name}
                                    </Link>
                                </h3>
                                <h4 className="text-sm font-medium text-gray-700">{dish.categoryName}</h4>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{humanziePrice(dish.price)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
