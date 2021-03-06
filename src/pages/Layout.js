import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    ClockIcon,
    CreditCardIcon,
    HomeIcon,
    MenuAlt1Icon,
    ScaleIcon,

    XIcon,
} from '@heroicons/react/outline'
import {
    ChevronDownIcon,
} from '@heroicons/react/solid'
import { Route, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from '../store/auth.store';

import { classNames } from '../common/class-names';

const navigation = [
    { name: 'Tổng quan', href: '/', icon: HomeIcon },
    { name: 'Đơn hàng', href: '/orders', icon: ClockIcon },
    { name: 'Món ăn', href: '/dishes', icon: ScaleIcon, },
    { name: 'Phân loại', href: '/categories', icon: CreditCardIcon },
]

export default function Layout({ children, ...rest }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            <div className="min-h-full">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-yellow-700">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <img
                                        className="h-6 w-auto"
                                        src="https://tailwindui.com/img/logos/easywire-logo-yellow-300-mark-white-text.svg"
                                        alt="Daisy logo"
                                    />
                                </div>
                                <nav
                                    className="mt-5 flex-shrink-0 h-full divide-y divide-yellow-800 overflow-y-auto"
                                    aria-label="Sidebar"
                                >
                                    <div className="px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                exact
                                                className={classNames(
                                                    'text-yellow-100 hover:text-white hover:bg-yellow-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                )}
                                                activeClassName='bg-yellow-800 text-white'
                                            >
                                                <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-yellow-200" aria-hidden="true" />
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>

                                </nav>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14" aria-hidden="true">
                        </div>
                    </Dialog>
                </Transition.Root>

                <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
                    <div className="flex flex-col flex-grow bg-yellow-400 pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <img
                                className="h-60 w-auto"
                                src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/264677970_656200175546138_2646451019225234887_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=e4tkzDVSSAMAX_bH9Zi&tn=A7DG3hnwRj6zUZE1&_nc_ht=scontent.fsgn3-1.fna&oh=03_AVIUGVMO3fHYKqM-pLNtnSSwnwzPPhSNUNfvogllqtjeGQ&oe=61E3BF62"
                                alt="Daisy logo"
                            />
                        </div>
                        <nav className="mt-5 flex-1 flex flex-col divide-y divide-yellow-800 overflow-y-auto" aria-label="Sidebar">
                            <div className="px-2 space-y-1">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        exact
                                        className={classNames('text-yellow-100 hover:text-white hover:bg-yellow-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                                        )}
                                        activeClassName='bg-yellow-800 text-white'
                                    >
                                        <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-yellow-200" aria-hidden="true" />
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-64 flex flex-col flex-1">
                    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 lg:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex flex-row px-4 justify-end w-full sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                            <div className="ml-4 flex items-center md:ml-6">
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                                                <span className="sr-only">Open user menu for </span>ADMIN
                                            </span>
                                            <ChevronDownIcon
                                                className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => dispatch(logout())}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'text-left w-full block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Đăng xuất
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1 pb-8">
                        <Route
                            {...rest}
                            render={({ location }) =>
                                children
                            }
                        />
                    </main>
                </div>
            </div>
        </>
    )
}
