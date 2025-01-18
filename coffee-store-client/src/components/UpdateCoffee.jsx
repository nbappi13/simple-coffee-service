import Swal from 'sweetalert2';
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const updatedName = form.name.value;
    const updatedQuantity = form.quantity.value;
    const updatedSupplier = form.supplier.value;
    const updatedTaste = form.taste.value;
    const updatedCategory = form.category.value;
    const updatedDetails = form.details.value;
    const updatedPhoto = form.photo.value;

    const updatedCoffee = {
      name: updatedName,
      quantity: updatedQuantity,
      supplier: updatedSupplier,
      taste: updatedTaste,
      category: updatedCategory,
      details: updatedDetails,
      photo: updatedPhoto,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee updated successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="bg-gray-100 p-10 md:p-24">
      <h2 className="text-3xl font-extrabold text-center mb-4">Update Coffee</h2>
      <p className="text-center text-gray-600 mb-8">
        Use this form to update the details of your coffee. Ensure the information is accurate.
      </p>
      <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">

          <div>
            <label className="label text-gray-700 font-medium">Coffee Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input input-bordered w-full"
              placeholder="Enter coffee name"
            />
          </div>
    
          <div>
            <label className="label text-gray-700 font-medium">Available Quantity</label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered w-full"
              placeholder="Available quantity"
            />
          </div>
    
          <div>
            <label className="label text-gray-700 font-medium">Supplier Name</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input input-bordered w-full"
              placeholder="Supplier name"
            />
          </div>
        
          <div>
            <label className="label text-gray-700 font-medium">Taste</label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              className="input input-bordered w-full"
              placeholder="Taste"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              className="input input-bordered w-full"
              placeholder="Coffee category"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input input-bordered w-full"
              placeholder="Details"
            />
          </div>
          <div className="md:col-span-2">
            <label className="label text-gray-700 font-medium">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input input-bordered w-full"
              placeholder="Enter photo URL"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn btn-block bg-[#D2B48C] text-white hover:bg-[#ff782f]">
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
