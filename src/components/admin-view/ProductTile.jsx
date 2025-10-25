import { Button } from "../ui/Button";
import { Card, CardContent, CardFooter } from "../ui/Card";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  // Debugging Logs
  console.log("Product Data:", product);
  console.log("Sale Price:", product?.salePrice);

  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg bg-white">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-2xl font-serif font-semibold mb-2 mt-2 text-gray-800">
            {product?.title}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice && product?.salePrice !== product?.price
                  ? "line-through text-gray-500"
                  : ""
              } text-lg font-medium`}
            >
              ${product?.price}
            </span>
            {product?.salePrice && product?.salePrice !== product?.price ? (
              <span className="text-lg font-semibold text-black">
                ${product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;