
const ProductDetails = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

        <div className="bg-white w-full max-w-sm h-full max-h-sm rounded-lg overflow-hidden">

          {/* Header */}

          <div className="flex items-start justify-between border-b p-4">

            <div>

              <h1 className="text-xl sm:text-2xl font-bold">
                Product Details
              </h1>

              <p className="text-sm text-gray-500">
                SKU: PP-ABB-001
              </p>

            </div>

            <button
              onClick={onClose}
              className="text-2xl font-semibold text-gray-700 hover:text-black"
            >
              ✕
            </button>

          </div>

          {/* Body */}

          <div className="p-4 max-h-[80vh] overflow-y-auto">

            {/* Your image */}

            <img
              src="https://product.indiashoppe.com/7654.png"
              alt="Product"
              className=" w-75 h-52 sm:h-72 object-cover rounded-lg text-center mx-auto"
            />



          </div>
          <div className="space-y-4">

            {/* Row 1 */}
            <div className="flex justify-between font-semibold p-3">
              <div>
                <p>CATEGORY</p>
                <h1>Bio-Stimulants</h1>
              </div>

              <div>
                <p>MANUFACTURER</p>
                <h1>Plantpro Research Lab</h1>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex justify-between font-semibold p-3">
              <div>
                <p>PACKING UNIT</p>
                <h1>500ml HDPE Bottle</h1>
              </div>

              <div>
                <p>TAX CATEGORY</p>
                <h1>GST 12% (Agricultural)</h1>
              </div>
            </div>

          </div>
          <div>
            <h2>Inventory Breakdown</h2>
            <p>Main Warehouse </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default ProductDetails;