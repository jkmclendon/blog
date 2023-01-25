export default function PageNav({ page, numOfPosts, setPage }) {

  let numOfPages = Math.ceil(numOfPosts / 5);
  let pageNumbers = [...Array(numOfPages + 1).keys()]
  pageNumbers.shift();

  return (
    <div className="btn-group">
      {pageNumbers.map(num => {
        return (
          <button key={num} className={num === page ? 'btn btn-neutral' : 'btn btn-secondary'}>{num}</button>
        )
      })}
    </div>
  )
}