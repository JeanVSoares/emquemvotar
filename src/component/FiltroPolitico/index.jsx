import React from "react";

const PoliticoFilterForm = ({ onFilter }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const filters = Object.fromEntries(formData.entries());
        onFilter(filters);
    };

    return (
        <form>
            <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-1">


                <div className="gap-x-2 sm:col-span-2">
                    <label htmlFor="first-name" className="text-sm/6 font-medium text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="w-full rounded-md bg-white px-4 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="gap-x-6 sm:col-span-2">
                    <label htmlFor="last-name" className=" text-sm/6 font-medium text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="family-name"
                            className=" w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PoliticoFilterForm;