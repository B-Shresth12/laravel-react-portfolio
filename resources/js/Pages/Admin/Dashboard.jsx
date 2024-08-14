import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ auth }) {
    const { data, post } = useForm({});
    const submit = (e) => {
        post(route("logout"));
    };
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <h1>Dashboard</h1>
            <form onSubmit={submit}>
                <button className="mx-4 btn btn-success">Logout</button>
            </form>
        </AuthenticatedLayout>
    );
}
