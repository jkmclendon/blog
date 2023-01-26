export default function PageNav({ page, numOfPosts, setPage }) {

  if (!numOfPosts || !page) {
    return null;
  }

  let numOfPages = Math.ceil(Number(numOfPosts) / 5);
  let pageNumbers = [...Array(numOfPages + 1).keys()]
  pageNumbers.shift();



  return (
    <div className="btn-group">
      {pageNumbers.map(num => {
        return (
          <button key={num} className={num === page ? 'btn btn-neutral' : 'btn btn-secondary'} onClick={(e) => {
            e.preventDefault();
            setPage(num);
            window.scrollTo(0, 0);
          }}>{num}</button>
        )
      })}
    </div>
  )
}