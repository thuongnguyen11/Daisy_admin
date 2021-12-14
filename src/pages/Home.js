import { useEffect } from 'react'
import {
    DocumentTextIcon,
    CurrencyDollarIcon,
    GiftIcon,
    UserIcon,
} from '@heroicons/react/outline'

import { useDispatch, useSelector } from 'react-redux';
import { getStatistics } from '../store/dashboard.store';
import { humanziePrice } from '../common/ultis';

export default function Home() {

    const dispatch = useDispatch();

    const { statistics } = useSelector(state => state.dashboard);

    useEffect(() => {
        dispatch(getStatistics()).unwrap();
    }, [])

    return (
        <div className="w-full flex flex-col justify-between mb-6 gap-8 max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8 shadow-lg my-12">
            <div className='pl-4 pr-6 pt-4 pb-4 border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-b'>
                <h2 className="text-lg leading-6 font-medium text-gray-900">Tổng quan</h2>
            </div>
            {
                statistics
                    ? <>
                        <h4 className='text-md leading-6 font-medium text-gray-600 mb-6'>Đơn hàng</h4>
                        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <DocumentTextIcon className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">Đơn hàng hôm nay</dt>
                                                <dd>
                                                    <div className="text-lg font-medium text-gray-900">{statistics.todayOrders}</div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-200 h-8">
                                    <div className="text-sm">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className='text-md leading-6 font-medium text-gray-600 my-6'>Doanh thu</h4>
                        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">Doanh thu hôm nay</dt>
                                                <dd>
                                                    <div className="text-lg font-medium text-gray-900">{humanziePrice(statistics.todayRevenue)}</div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-5 py-3">
                                    <div className="text-sm">
                                        <a className="font-medium text-cyan-700 hover:text-cyan-900">
                                            Test
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">Tổng doanh thu</dt>
                                                <dd>
                                                    <div className="text-lg font-medium text-gray-900">{humanziePrice(statistics.totalRevenue)}</div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-5 py-3">
                                    <div className="text-sm">
                                        <a className="font-medium text-cyan-700 hover:text-cyan-900">
                                            Test
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className='text-md leading-6 font-medium text-gray-600 my-6'>Thực đơn</h4>
                        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <GiftIcon className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">Số lượng món ăn</dt>
                                                <dd>
                                                    <div className="text-lg font-medium text-gray-900">{statistics.totalDishes}</div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-5 py-3">
                                    <div className="text-sm">
                                        <a className="font-medium text-cyan-700 hover:text-cyan-900">
                                            Test
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <GiftIcon className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">Phân loại món ăn</dt>
                                                <dd>
                                                    <div className="text-lg font-medium text-gray-900">{statistics.totalCategories}</div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-5 py-3">
                                    <div className="text-sm">
                                        <a className="font-medium text-cyan-700 hover:text-cyan-900">
                                            Test
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className='text-md leading-6 font-medium text-gray-600 my-6'>Người dùng</h4>
                        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <UserIcon className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">Tổng số người dùng</dt>
                                                <dd>
                                                    <div className="text-lg font-medium text-gray-900">{statistics.totalUsers}</div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-indigo-200 h-8">
                                    <div className="text-sm">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : <div></div>
            }
        </div>
    )
}
