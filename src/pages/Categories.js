import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getCategories } from '../store/category.store';

export default function Categories() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories()).unwrap();
    }, []);

    const { categories } = useSelector(state => state.categories);

    return (
        <div className="w-full flex flex-col justify-between mb-6 gap-8 max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8 shadow-lg my-12">
            <div className='flex justify-between'>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Phân loại món ăn</h3>
                <Link
                    to={'categories/create'}
                    className="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"
                >
                    Tạo mới
                </Link>
            </div>
            <div className="mt-5 border-t border-gray-200">
                {categories?.map(c =>
                    <dl key={c.id} className="divide-y divide-gray-200">
                        <div className="py-4 sm:grid sm:py-5 sm:grid-cols-5 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 sm:col-span-1">{c.name}</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-4">
                                <span className="flex-grow">
                                    {!!c.desc ? c.desc : "<Không có mô tả>"}
                                </span>
                                <span className="ml-4 flex-shrink-0 sm:col-span-1">
                                    <Link
                                        to={`categories/${c.id}`}
                                        type="button"
                                        className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
                                    >
                                        #{c.id}
                                    </Link>
                                </span>
                            </dd>
                        </div>
                    </dl>)}

            </div>
        </div>
    )
}
