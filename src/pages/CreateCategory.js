import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createCategory } from "../store/category.store";

export default function CreateCategory() {

    const dispatch = useDispatch();
    const history = useHistory();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Tên không được để trống!"),
        desc: Yup.string()
            .required("Mô tả không được để trống!"),
    });

    const onSubmit = async (formValue) => {
        await dispatch(createCategory(formValue)).unwrap();

        history.replace('../categories');
    }


    return (
        <div className="w-full flex flex-col justify-between mb-6 gap-8 max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8 shadow-lg my-12">
            <Formik
                initialValues={{ name: '', desc: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => onSubmit(values)}>
                <Form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Tạo mới phân loại</h3>
                            </div>

                            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Tên phân loại
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <Field name="name" >
                                            {({
                                                field,
                                                form: { touched, errors },
                                                meta,
                                            }) => (
                                                <div>
                                                    <input type="text" placeholder="Ví dụ: Combo tiết kiệm" {...field}
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
                                Tạo mới
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
