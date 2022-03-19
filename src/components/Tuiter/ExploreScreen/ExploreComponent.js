import React from 'react';
import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
    return(
        <>
            <div className='d-flex justify-content-between mb-2'>
                <div className='input-group align-items-center rounded-pill border border-0 py-1 px-2 bg-white'>
                    <i className='fa fa-search mx-2'></i>
                    <input type='search' className='form-control shadow-none p-0 ms-1 border-0' placeholder='Search Tuiter' aria-label='Search' />
                </div>
                <i className='fa fa-gear fa-2x text-primary ms-3'></i>
            </div>
            <ul className='nav nav-tabs mb-2'>
                <li className='nav-item'>
                    <a className='nav-link active' href='#'>For you</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Trending</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>News</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Sports</a>
                </li>
                <li className='nav-item d-none d-md-inline'>
                    <a className='nav-link' href='#'>Entertainment</a>
                </li>
            </ul>
            <div className='card position-relative mb-2'>
                <img src='/tuiter/assets/spacexstarship.jpg' alt='' />
                <h3 className='position-absolute start-0 bottom-0 text-white ms-2'><strong>SpaceX's Starship</strong></h3>
            </div>
           <PostSummaryList />
        </>
    );
}
export default ExploreComponent;