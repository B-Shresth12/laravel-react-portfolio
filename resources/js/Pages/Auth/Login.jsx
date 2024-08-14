import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import LoginLayout from "@/Layouts/LoginLayout";
import CheckBox from "@/Components/CheckBox";
import UngroupedInput from "@/Components/UngroupedInput";
import Button from "@/Components/Button";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    return (
        <LoginLayout>
            <Head title="Log in" />
            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <Link
                                        href="/"
                                        className="text-nowrap logo-img text-center d-block mb-5 w-100"
                                    >
                                        <img
                                            src="../../assets/images/logos/dark-logo.svg"
                                            width="180"
                                            alt=""
                                        />
                                    </Link>
                                    {errors.email ? (
                                        <div
                                            class="alert alert-danger"
                                            role="alert"
                                        >
                                            {errors.email}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <form onSubmit={submit}>
                                        <div className="mb-3">
                                            <UngroupedInput
                                                type="email"
                                                label="Email"
                                                name="email"
                                                value={data.email}
                                                placeholder="Enter your email"
                                                requiredStatus={true}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <UngroupedInput
                                                type="password"
                                                label="Password"
                                                name="password"
                                                requiredStatus={true}
                                                value={data.password}
                                                placeholder="Enter your password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <CheckBox
                                            label="Remember this Device"
                                            name="remember"
                                            value={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Button className="btn btn-primary w-100 py-8 mb-4 rounded-2">
                                            Log In
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoginLayout>
    );
}
