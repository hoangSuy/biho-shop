import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../../utils/request";
import routesConfig from "../../config/routes";
import { useDispatch } from "react-redux";
import styles from "./products.module.scss";
import cartsSlice from "../../redux/cartsSlice/cartsSlice";
import Skeleton from "@mui/material/Skeleton";
import toastr from "toastr";
import { read as readCategory } from "../../utils/category";
import { formatPrice } from "../../utils/auth_error_code";

const Products = () => {
  const dispatch = useDispatch();

  //state
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const limitedProduct = 12;

  const count = Math.ceil(items.length / limitedProduct);

  const getCategory = async () => {
    const { data } = await readCategory();
    setCategories(data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    request
      .get("/products")
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, []);

  const indexOfLastProduct = currentPage * limitedProduct;
  const indexOfFirstProduct = indexOfLastProduct - limitedProduct;

  const products = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const hanldeAddCart = (product) => {
    dispatch(cartsSlice.actions.addCart({ ...product, quantity: 1 }));
    toastr.success("Add to cart successfully!");
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <div className={styles.text}>PRODUCTS</div>
      <div className={styles.wrapper_sidebar_content}>
        <div className={styles.sidebar}>
          <div className={styles.title_category}>Category</div>
          <ul className={styles.category}>
            {categories.map((category) => (
              <li key={category.id} className={styles.category_item}>
                <Link to={`${routesConfig.category}/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isLoading ? (
          <Skeleton sx={{ minHeight: 700, minWidth: 1000 }} />
        ) : (
          <div className={styles.wrap_content}>
            <div className={styles.wrapper}>
              {products.map((item) => (
                <div key={item.id} className={styles.wrap_product}>
                  <div className={styles.container}>
                    <img
                      className={styles.img_product}
                      src={item.image}
                      width={250}
                      alt="product"
                    />
                    <div
                      className={styles.add_cart}
                      onClick={() => hanldeAddCart(item)}
                    >
                      <AddShoppingCartIcon />
                    </div>
                  </div>
                  <div className={styles.parent_avt_product}>
                    <img
                      className={styles.avt_product}
                      src={item.image}
                      alt="product"
                    />
                  </div>
                  <div>
                    <Link
                      to={routesConfig.products + "/" + item.id}
                      className={styles.name_product}
                    >
                      {item.name}{" "}
                    </Link>
                    <div className={styles.cost_product}>
                      {formatPrice.format(item.price)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Stack className={styles.pagination} spacing={2}>
              <Pagination
                count={count || 10}
                page={currentPage}
                onChange={handleChange}
              />
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
