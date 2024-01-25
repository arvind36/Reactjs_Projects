import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* accordion component */}
      {/* <Accordion /> */}
      {/* random color component */}
      {/* <RandomColor /> */}
      {/* star rating component */}
      {/* <StarRating noOfStars={10} /> */}
      {/* image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* qr code generator */}
      {/* <QRGenerator /> */}
      {/* <LoadMoreData /> */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
