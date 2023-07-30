import { useState } from 'react';

const usePagination = (itemsCount: number,) => {
    const [activePage, setActivePage] = useState(1);

    const goToPage = (pageNumber: number) => {
        setActivePage(pageNumber);
    };
  
    return {
      activePage,
      goToPage,
      firstElement: (activePage - 1) * itemsCount,
      lastElement: activePage * itemsCount,
    };
  };
  
  export default usePagination;