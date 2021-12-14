import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { getCategories } from "../store/category.store";
import { useEffect } from "react";
import { getDishes, updateDish } from "../store/dish.store";

const DishForm = ({ dish, categories }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Tên không được để trống!"),
        desc: Yup.string()
            .required("Mô tả không được để trống!"),
        category: Yup.string()
            .required("Phân loại không được để trống!"),
        price: Yup.number()
            .positive("Giá không được âm!")
            .min(5000, "Giá không được bé hơn 5.000 VND!")
            .required("Giá không được để trống!"),
        images: Yup.string()
            .required("Hình ảnh không được để trống!"),
    });

    const onSubmit = async (formValue) => {
        const updated = {
            id: dish.id,
            name: formValue.name,
            desc: formValue.desc,
            category: formValue.category,
            price: formValue.price,
            images: formValue.images.split('\n'),
        }

        await dispatch(updateDish(updated)).unwrap();

        history.replace('../dishes');
    }

    return <Formik
        enableReinitialize
        initialValues={dish}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmit(values)}>
        <Form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Chi tiết món ăn</h3>
                    </div>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Tên món ăn
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <Field name="name" >
                                    {({
                                        field,
                                        form: { touched, errors },
                                        meta,
                                    }) => (
                                        <div>
                                            <input type="text" placeholder="Ví dụ: Cơm sườn" {...field}
                                                className={
                                                    "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md " + (meta.touched && meta.error ? 'border-2 border-red-500' : '')
                                                } />
                                            {meta.touched && meta.error && (
                                                <div className="text-sm text-red-500 mt-1">{meta.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Mô tả
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <Field name="desc" >
                                    {({
                                        field,
                                        form: { touched, errors },
                                        meta,
                                    }) => (
                                        <div>
                                            <textarea rows={3} {...field}
                                                className={
                                                    "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md " + (meta.touched && meta.error ? 'border-2 border-red-500' : '')
                                                }>

                                            </textarea>
                                            {meta.touched && meta.error && (
                                                <div className="text-sm text-red-500 mt-1">{meta.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <p className="mt-2 text-sm text-gray-500">Mô tả ngắn gọn về phân loại</p>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Giá
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <Field name="price" >
                                    {({
                                        field,
                                        form: { touched, errors },
                                        meta,
                                    }) => (
                                        <div>
                                            <input type="number" placeholder="Ví dụ: 10000" {...field}
                                                className={
                                                    "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md " + (meta.touched && meta.error ? 'border-2 border-red-500' : '')
                                                } />
                                            {meta.touched && meta.error && (
                                                <div className="text-sm text-red-500 mt-1">{meta.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Phân loại
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <Field name="category" as="select" className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                    {categories.map(c =>
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    )}

                                </Field>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Hình ảnh
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <Field name="images" >
                                    {({
                                        field,
                                        form: { touched, errors },
                                        meta,
                                    }) => (
                                        <div>
                                            <textarea rows={9} {...field}
                                                placeholder="Ví dụ: https://hinh1.png,https.hinh2.png"
                                                className={
                                                    "whitespace-pre-wrap max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md " + (meta.touched && meta.error ? 'border-2 border-red-500' : '')
                                                }>

                                            </textarea>
                                            {meta.touched && meta.error && (
                                                <div className="text-sm text-red-500 mt-1">{meta.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <p className="mt-2 text-sm text-gray-500">Vui lòng đặt các đường dẫn hình ảnh và
                                    đảm bảo rằng chúng được phân cách bởi kí tự xuống dòng (Enter)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => history.goBack()}
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Hủy bỏ
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cập nhật
                    </button>
                </div>
            </div>
        </Form>
    </Formik>
}

export default function DishDetails() {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishes()).unwrap();
        dispatch(getCategories()).unwrap();
    }, []);

    const { categories } = useSelector(state => state.categories);
    const dish = useSelector(state => {
        const { dishes } = state.dishes;
        const dish = dishes.find(d => d.id === id);
        if (dish) {
            return {
                id,
                name: dish.name,
                desc: dish.desc,
                category: dish.category,
                price: dish.price,
                images: dish.images.join('\n'),
            };
        }
        return { id, name: '', desc: '', category: '', price: 0, images: '' };

    })

    return (
        <div className="w-full flex flex-col justify-between mb-6 gap-8 max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8 shadow-lg my-12">
            <DishForm categories={categories} dish={dish} />
        </div>
    )
}
