import React from 'react';

const Star = () => {
    const rows = [];
    for (let i = 5; i >= 1; i--) {
        const stars = [];
        for (let j = 0; j < i; j++) {
            stars.push(
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.017 2L17.485 10.2277L26 11.1863L19.6246 17.1946L21.3882 26L13.9805 21.4853L6.55551 25.9693L8.35246 17.1706L2 11.1362L10.5181 10.2131L14.017 2Z" fill="#FFB400" stroke="white" stroke-opacity="0.23" />
                </svg>

            );
        }
        for (let k = 0; k < 5 - i; k++) {
            stars.push(
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.017 2L17.485 10.2277L26 11.1863L19.6246 17.1946L21.3882 26L13.9805 21.4853L6.55551 25.9693L8.35246 17.1706L2 11.1362L10.5181 10.2131L14.017 2Z" stroke="#FFB400" />
                </svg>

            );
        }
        rows.push(
            <div key={i} className="flex items-center">
                {stars}
            </div>
        );
    }

    return <div>
        <h2 className="text-lg font-inter text-[#848484] font-bold py-4">Customer Reviews</h2>
        {rows}</div>;
};

export default Star;
