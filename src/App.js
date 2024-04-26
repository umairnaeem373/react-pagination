import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { getAllProducts } from "./Actions/Actions";
import Products from "./Components/Products";
import Pagination from "./Pagination";

function App() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState();

  const [PerPage, setPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setAllProducts(products.products);
    console.log(products);
  }, [products]);

  const lastIndex = currentPage * PerPage;
  const firstIndex = lastIndex - PerPage;
  const currentItems = allProducts?.slice(firstIndex, lastIndex);
  const totalPages = allProducts?.length / PerPage;

  return (
    <div className="App">
      {products.loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Products products={currentItems} />
          <Pagination
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            CurrentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
