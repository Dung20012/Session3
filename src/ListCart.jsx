import Cart from "./assets/Cart";

const ListCart = () => {
  const products = [
    {
      id: 1,
      name: 'Iphone 11 pro',
      description: '256GB, Navy Blue',
      price: 900,
      quantity: 2,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
    },
    {
      id: 2,
      name: 'Samsung galaxy Note 10',
      description: '256GB, Navy Blue',
      price: 900,
      quantity: 2,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp',
    },
    {
      id: 3,
      name: 'Canon EOS M50',
      description: 'Onyx Black',
      price: 1199,
      quantity: 1,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp',
    },
    {
      id: 4,
      name: 'MacBook Pro',
      description: '1TB, Graphite',
      price: 1799,
      quantity: 1,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp',
    },
  ];

  return (
    <>
      <h5 className="mb-3">
        <a href="#!" className="text-body">
          <i className="fas fa-long-arrow-alt-left me-2" />
          Continue shopping
        </a>
      </h5>
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="mb-1">Shopping cart</p>
          <p className="mb-0">You have {products.length} items in your cart</p>
        </div>
        <div>
          <p className="mb-0">
            <span className="text-muted">Sort by:</span>{" "}
            <a href="#!" className="text-body">
              price <i className="fas fa-angle-down mt-1" />
            </a>
          </p>
        </div>
      </div>

      {products.map((product) => (
        <Cart key={product.id} product={product} />
      ))}
    </>
  );
};

export default ListCart;
