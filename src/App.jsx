import "./App.css";

const ProductList = ({ products }) => {
  const productListing = products.map((product) => (
    <div key={product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  ));

  return (
    <>
      <h2>Products</h2>
      {productListing}
    </>
  );
};

const RestaurantsList = ({ restaurants }) => {
  const restaurantListing = restaurants.map((restaurant) => (
    <div key={restaurant.id}>
      <h3>Name: {restaurant.name}</h3>
      <p>Cuisine: {restaurant.cuisine}</p>
    </div>
  ));
  return (
    <>
      <h2>Restaurants</h2>
      {restaurantListing}
    </>
  );
};

const Videos = ({ videos }) => {
  const videoListing = videos.map((video) => (
    <div key={video.id}>
      <h3>Title: {video.title}</h3>
      <p>Views: {video.views}</p>
    </div>
  ));

  return (
    <>
      <h2>Videos</h2>
      {videoListing}
    </>
  );
};
export default function App() {
  const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 14.49 },
  ];

  const restaurants = [
    { id: 1, name: "Restaurant A", cuisine: "Italian" },
    { id: 2, name: "Restaurant B", cuisine: "Mexican" },
    { id: 3, name: "Restaurant C", cuisine: "Japanese" },
  ];

  const videos = [
    { id: 1, title: "Video 1", views: 1000 },
    { id: 2, title: "Video 2", views: 500 },
    { id: 3, title: "Video 3", views: 2000 },
  ];

  return (
    <main>
      <ProductList products={products} />
      <hr />
      <RestaurantsList restaurants={restaurants} />
      <hr />
      <Videos videos={videos} />
    </main>
  );
}
