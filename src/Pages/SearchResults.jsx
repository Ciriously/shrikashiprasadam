import React from 'react'
import Filter from "../components/SearchResults/Filters"
import BreadCrumbs from '../components/ui/BreadCrumbs'

const SearchResults = () => {

    const crumbs = [
        { text: 'Home', href: '#' },
        { text: 'Rudraksha', href: '#' },
    ];

    return (
        <div className='bg-[#FDF7EB]'>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <BreadCrumbs crumbs={crumbs} />
            </div>

            <Filter />
        </div>
    )
}

export default SearchResults