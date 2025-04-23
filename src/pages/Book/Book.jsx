const Book = ({ singleBook }) => {
  const { bookName, author, image } = singleBook;
  return (
    <div className="card bg-base-100 shadow-lg inset-shadow-sm inset-shadow-indigo-500 p-6">
      <figure>
        <img className="w-[200px] h-[300px] object-cover rounded-xl"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>
          {author}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary ring-2 text-white ring-teal-500/50">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
