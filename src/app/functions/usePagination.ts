import { useState } from 'react';

const usePagination = (totalItems: number, itemsPerPage: number) => {
    const [activePage, setActivePage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const goToPage = (pageNumber: number) => {
      setActivePage(pageNumber);
    };
  
    return {
      goToPage,
      activePage,
      totalPages,
      firstElement: (activePage - 1) * itemsPerPage,
      lastElement: activePage * itemsPerPage,
    };
  };
  
  export default usePagination;