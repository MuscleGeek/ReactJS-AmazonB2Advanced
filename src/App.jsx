import classes from './App.module.css';
import {ProductPreview} from './ProductPreview/ProductPreview.jsx';
import ProductDetails from "./ProductDetails/ProductDetails";
import Topbar from './Topbar/Topbar.jsx';
import {Component} from "react";
import ProductData from "./Utils/ProductData";

class App extends Component {
    state = {
        productData: ProductData,
        currentPreviewImagePos: 0,
        currentSelectedFeature: 0
    }
    onColorOptionClick = (pos) => {
        //const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
        //console.log(updatedPreviewImage);
        this.setState({currentPreviewImagePos: pos})
    }
    onFeatureItemClick = (pos) => {
        this.setState({currentSelectedFeature: pos})
        //console.table(pos);
    }
    render() {
        return (
            <div className="App">
                <Topbar/>
                <div className={classes.MainContainer}>
                    <div className={classes.ProductPreview}>
                        <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
                                        currentSelectedFeature={this.state.currentSelectedFeature}
                        />
                    </div>

                    <div className={classes.ProductData}>
                        <ProductDetails data={this.state.productData}
                                        onColorOptionClick={this.onColorOptionClick}
                                        currentPreviewImagePos={this.state.currentPreviewImagePos}
                                        onFeatureItemClick={this.onFeatureItemClick}
                                        currentSelectedFeature={this.state.currentSelectedFeature}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
