"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    const pathSegments = pathname.split('/').filter((segment) => segment);

    function capitalizeFirstChar(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function replaceDashWithSpace(str: string) {
        return str.replace(/-/g, ' ');
    }

    return (
        <>
            <nav className="mb-4 self-start px-4">
                {pathSegments.map((segment, index) => {
                    const path = '/' + pathSegments.slice(0, index + 1).join('/');
                    const isLast = index === pathSegments.length - 1;
                    return (
                        <span key={index}>
                            {index !== 0 && <span className="mx-2">/</span>}
                            {isLast ? (
                                <span className="text-gray-500">{capitalizeFirstChar(replaceDashWithSpace(segment))}</span>
                            ) : (
                                <>
                                    <button
                                        onClick={() => router.back()}
                                        className="flex items-center px-3 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 mr-4"
                                    >
                                        <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 mr-1" /> Go Back
                                    </button>
                                    <Link className="text-blue-600 hover:underline" href={path}>{capitalizeFirstChar(segment)}</Link>
                                </>
                            )}
                        </span>
                    );
                })}
            </nav>
            {children}
        </>
    );
}
