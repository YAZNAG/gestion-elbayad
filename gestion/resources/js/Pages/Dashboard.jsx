import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
                    <nav className="mt-4">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/projects" className="text-blue-500 hover:underline">Projets</a>
                            </li>
                            <li>
                                <a href="/employees" className="text-blue-500 hover:underline">Employés</a>
                            </li>
                            <li>
                                <a href="/charges" className="text-blue-500 hover:underline">Charges</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
