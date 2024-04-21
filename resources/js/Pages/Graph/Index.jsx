import React from "react";
import { Head, useForm } from "@inertiajs/react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Graph = ({ dataSet, error }) => {
    const { data, setData, errors, post } = useForm({
        host: "",
        database: "",
        username: "",
        password: "",
        queryData: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("GraphResult"));
    };

    return (
        <div>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        {/* Error Message */}
                        {error && (
                            <div className="text-red-600 mb-4">{error}</div>
                        )}
                        <form name="createForm" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap">
                                <div className="w-full sm:w-1/2 p-2">
                                    <div className="mb-4">
                                        <label className="">
                                            MySQL Host{" "}
                                            <span style={{ color: "red" }}>
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Host"
                                            name="host"
                                            placeholder="127.0.0.1"
                                            value={data.host}
                                            onChange={(e) =>
                                                setData("host", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.host}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-2">
                                    <div className="mb-0">
                                        <label className="">
                                            MySQL Database{" "}
                                            <span style={{ color: "red" }}>
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Database"
                                            name="database"
                                            value={data.database}
                                            onChange={(e) =>
                                                setData(
                                                    "database",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.database}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap">
                                <div className="w-full sm:w-1/2 p-2">
                                    <div className="mb-4">
                                        <label className="">
                                            MySQL Username{" "}
                                            <span style={{ color: "red" }}>
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Username"
                                            name="username"
                                            value={data.username}
                                            onChange={(e) =>
                                                setData(
                                                    "username",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.username}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-2">
                                    <div className="mb-0">
                                        <label className="">
                                            MySQL Password
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Password"
                                            name="password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.password}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-0 flex flex-wrap p-2">
                                <label className="">
                                    MySQL Query{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <textarea
                                    type="text"
                                    className="w-full rounded"
                                    name="queryData"
                                    value={data.queryData}
                                    onChange={(e) =>
                                        setData("queryData", e.target.value)
                                    }
                                    rows={5}
                                />
                                {errors.queryData && (
                                    <span className="text-red-600">
                                        {errors.queryData}
                                    </span>
                                )}
                            </div>

                            <div className="mt-4 p-3">
                                <button
                                    type="submit"
                                    className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        {/* Graph Line Result */}
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="">
                            {dataSet && (
                                <LineChart
                                    width={800}
                                    height={300}
                                    data={dataSet}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="dataSet" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    {Object.keys(dataSet[0]).map(
                                        (key, index) =>
                                            key !== "dataSet" && (
                                                <Line
                                                    key={index}
                                                    type="monotone"
                                                    dataKey={key}
                                                    stroke={`#${Math.floor(
                                                        Math.random() * 16777215
                                                    ).toString(16)}`}
                                                />
                                            )
                                    )}
                                </LineChart>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Graph;
