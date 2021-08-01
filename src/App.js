import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Album from "./components/Album";
import ImageDetail from "./components/ImageDetail";
let pageNum = 1;
const apiEndPoint = "https://picsum.photos/v2/list?page=";
function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchPages();
    console.log("effect");
  }, []);
  const fetchPages = async () => {
    let currUrl = apiEndPoint + pageNum;
    try {
      const result = await fetch(currUrl);
      const data = await result.json();
      setImages([...images, ...data]);
    } catch (e) {
      console.log("An error has occured " + e);
    }
  };
  const loadMoreImages = () => {
    pageNum++;
    fetchPages(pageNum);
  };
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Album images={images}></Album>
            <div class="btn-class">
              <button
                type="button"
                class="btn btn-light"
                onClick={loadMoreImages}
              >
                Load more
              </button>
            </div>
          </Route>

          <Route path="/:ids">
            <ImageDetail images={images}></ImageDetail>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
