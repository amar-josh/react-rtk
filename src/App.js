import "./App.css";
//import City from "./Component/City/City";
import GetProductList from "./Component/Product/GetProductList";
import PostProductList from "./Component/Product/PostProductList";
console.log(process.env.API_BASE_URL, "base url");
function App() {
  return (
    <div className="main-div">
      {/* <City />
        <hr /> */}
      <GetProductList />
      <hr className="vertical-line" />
      <PostProductList />
    </div>
  );
}

export default App;
