import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData(); // Use the loader's data directly

    return (
        <div className="max-w-4xl mx-auto  text-gray-900 p-8 rounded-lg shadow-lg">
            {/* Profile Section */}
            <div className="flex items-center mb-8">
                <img
                    src={data.avatar_url}
                    alt="GitHub Avatar"
                    className="rounded-full w-32 h-32 border-4 border-orange-500"
                />
                <div className="ml-6">
                    <h1 className="text-3xl font-semibold">{data.name}</h1>
                    <p className="text-xl text-gray-900">{data.bio}</p>
                    <div className="flex space-x-4 mt-4">
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-semibold py-2 px-4 rounded-lg"
                        >
                            View GitHub Profile
                        </a>
                        <a
                            href={"https://twitter.com/mustafaansaarii"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-gray-900 font-semibold py-2 px-4 rounded-lg"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-6 text-lg">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-300">Location:</span>
                    <span>{data.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-300">Blog:</span>
                    <a
                        href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-500"
                    >
                        {data.blog}
                    </a>

                </div>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-300">Followers:</span>
                    <span>{data.followers}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-300">Following:</span>
                    <span>{data.following}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-300">Public Repos:</span>
                    <span>{data.public_repos}</span>
                </div>
            </div>

            {/* Hireable Status */}
            <div className="mt-8 text-center">
                {data.hireable ? (
                    <span className="text-xl text-green-400">Currently Hireable</span>
                ) : (
                    <span className="text-xl text-red-400">Not Hireable</span>
                )}
            </div>
        </div>
    );
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mustafaansarii');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
    }
    return response.json();
};

export default Github;
