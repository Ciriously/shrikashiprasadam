import React from 'react';

const BreadCrumbs = ({ crumbs }) => {
    return (
        <div>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    {crumbs.map((crumb, index) => (
                        <li key={index} className="inline-flex items-center">
                            {index !== 0 && (
                                <div className="flex items-center">
                                    <svg
                                        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                </div>
                            )}
                            <a
                                href={crumb.href}
                                className={`inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white ${index === 0 ? 'me-2.5' : ''}`}
                            >
                                {crumb.icon && (
                                    <svg
                                        className="w-3 h-3 me-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d={crumb.icon} />
                                    </svg>
                                )}
                                {crumb.text}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default BreadCrumbs;
