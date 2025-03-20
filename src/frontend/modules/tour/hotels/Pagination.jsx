// import React from 'react';
// import './Pagination.css';

// const Pagination = ({ totalPosts, postsPerPage, currentPage,setCurrentPage }) => {
//     let pages = [];
//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//         pages.push(i);
//     }

//     return (
//         <div className='pagination'>
//             {pages.map((page, index) => (
//                 <button 
//                     className={page == currentPage ? 'active' : ''}
//                     key={index}
//                     onClick={() => setCurrentPage(page)}
//                 >
//                     {page}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default Pagination;



import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <BootstrapPagination>
                {pages.map((page, index) => (
                    <BootstrapPagination.Item
                        key={index}
                        active={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                        style={{
                            backgroundColor: page === currentPage ? 'goldenrod' : 'white',
                            border: '1px solid goldenrod',
                            color: page === currentPage ? 'white' : '#333',
                            padding: '10px 15px',
                            margin: '0 5px',
                            cursor: 'pointer',
                            borderRadius: '20px',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                            if (page !== currentPage) {
                                e.target.style.backgroundColor = '#ddd';
                            }
                        }}
                        onMouseOut={(e) => {
                            if (page !== currentPage) {
                                e.target.style.backgroundColor = 'white';
                            }
                        }}
                    >
                        {page}
                    </BootstrapPagination.Item>
                ))}
            </BootstrapPagination>
        </div>
    );
};

export default Pagination;