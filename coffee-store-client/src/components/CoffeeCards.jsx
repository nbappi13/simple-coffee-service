const CoffeeCards = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
          <h2 className="card-title">Name: {name} </h2>
          <p><span className="bg-red-400">Quantity:</span> {quantity} </p>
          <p><span className="bg-lime-400">Supplier:</span> {supplier} </p>
          <p><span className="bg-teal-400">Taste:</span> {taste} </p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn bg-purple-500 text-white join-item">View</button>
            <button className="btn bg-slate-600 text-white join-item">Edit</button>
            <button className="btn join-item text-white bg-slate-900">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;
