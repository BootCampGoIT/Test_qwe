const state = {
  name: "",
  price: "",
  products: [],
};

const refs = {
  productForm: document.forms.productForm,
  //   productForm1: document.forms.productForm1,
  //   name: document.forms.productForm.name,
  //   price: document.forms.productForm.price,
};

const onHandleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  state[name] = value;
};

const onHandleSubmit = (e) => {
  const { name, price } = state;
  e.preventDefault();
  state.products = [...state.products, { name, price }];
  console.log(state);
};

refs.productForm.addEventListener("input", onHandleInput);
refs.productForm.addEventListener("submit", onHandleSubmit);

