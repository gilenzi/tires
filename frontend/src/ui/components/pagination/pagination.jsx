import {PaginationWrapper} from './styled-components';

export function Pagination({
  currentPage,
  setCurrentPage,
  totalItemsLength,
  displayPerPage,
}) {
  const numberOfPages = Math.ceil(totalItemsLength / displayPerPage);
  function prevPageHandler() {
    setCurrentPage((prev) => (prev == 0 ? 0 : prev - 1));
  }

  function nextPageHandler() {
    console.log(currentPage);
    setCurrentPage((prev) =>
      prev == numberOfPages - 1 ? numberOfPages : prev + 1
    );
  }

  return (
    <PaginationWrapper>
      <button disabled={currentPage === 0} onClick={prevPageHandler}>
        Prev
      </button>
      <Pages
        numberOfPages={numberOfPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <button
        disabled={currentPage === numberOfPages - 1}
        onClick={nextPageHandler}
      >
        Next
      </button>
    </PaginationWrapper>
  );
}

function Pages({numberOfPages, setCurrentPage, currentPage}) {
  const pages = [];

  const visiblePages = 3; // How many pages to show near current
  const lastPage = numberOfPages - 1;

  function addPage(i) {
    pages.push(
      <button
        key={`page-${i}`}
        style={{fontWeight: currentPage === i ? 'bold' : 'normal'}}
        onClick={() => setCurrentPage(i)}
      >
        {i + 1}
      </button>
    );
  }

  if (numberOfPages <= 7) {
    // Show all pages
    for (let i = 0; i < numberOfPages; i++) {
      addPage(i);
    }
  } else {
    // Always show first page
    addPage(0);

    // Show left ellipsis
    if (currentPage > 2) {
      pages.push(<span key="left-ellipsis">...</span>);
    }

    // Show middle pages
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(lastPage - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      addPage(i);
    }

    // Show right ellipsis
    if (currentPage < lastPage - 2) {
      pages.push(<span key="right-ellipsis">...</span>);
    }

    // Always show last page
    addPage(lastPage);
  }

  return <div>{pages}</div>;
}

// function Pages({numberOfPages, setCurrentPage, currentPage}) {
//   const pagesArr = Array.from({length: numberOfPages}, (_, i) => i);
//   const pages = pagesArr.map((page) => (
//     <button
//       style={{fontWeight: currentPage === page ? 'bold' : 'normal'}}
//       key={`page-${page}`}
//       onClick={() => setCurrentPage(page)}
//     >
//       {page + 1}
//     </button>
//   ));

//   return <div>{pages}</div>;
// }
