import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;
    
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo}
    console.log(newCoffee);

     fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'hurrah! user added successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    }) 

  }
  return (
    <div className="bg-gray-100 p-10 md:p-24">
      <h2 className="text-3xl font-extrabold text-center mb-4">Add New Coffee</h2>
      <p className="text-center text-gray-600 mb-8">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
      </p>
      <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="label text-gray-700 font-medium">Coffee name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter coffee name"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Available quantity</label>
            <input
              type="text"
              name="quantity"
              className="input input-bordered w-full"
              placeholder="Available quantity"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Supplier name</label>
            <input
              type="text"
              name="supplier"
              className="input input-bordered w-full"
              placeholder="Supplier name"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Taste</label>
            <input
              type="text"
              name="taste"
              className="input input-bordered w-full"
              placeholder="Taste"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Category</label>
            <input
              type="text"
              name="category"
              className="input input-bordered w-full"
              placeholder="Coffee category"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Details</label>
            <input
              type="text"
              name="details"
              className="input input-bordered w-full"
              placeholder="Details"
            />
          </div>
          <div className="md:col-span-2">
            <label className="label text-gray-700 font-medium">Photo</label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Enter photo URL"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn btn-block bg-[#D2B48C] text-white hover:bg-[#ff782f]">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
