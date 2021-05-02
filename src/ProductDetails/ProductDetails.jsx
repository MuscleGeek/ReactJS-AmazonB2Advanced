import React from "react";
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) =>{
        const classArray = [classes.ProductImage]
        if(pos === props.currentPreviewImagePos){
            classArray.push(classes.SelectedProductImage);
        }
        return(
            <img className={classArray.join(' ')} key={pos} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)}/>
        )
    })
    const featureList = props.data.featureList.map((item, pos) => {
        const classArray = [classes.FeatureItem];

        if(pos === props.currentSelectedFeature){
            classArray.push(classes.SelectedFeatureItem);
        }
        return(
            <button key={pos} className={classArray.join(' ')} onClick={() => props.onFeatureItemClick(pos)}>{item}</button>

        )
    })
    //console.log(props.data)
    return(
        <div className={classes.ProductData}>
                <h1 className={classes.ProductTitle}>{props.data.title}</h1>
                <p className={classes.ProductDescription}>{props.data.description}</p>

                <h3 className={classes.SectionHeading}>Select Color</h3>
                <div>
                    {colorOptions}
                {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')}
                         src={ProductData.colorOptions[0].imageUrl} alt="Black Color"/>
                    <img className={classes.ProductImage} src={ProductData.colorOptions[1].imageUrl} alt="Red Color"/>
                    <img className={classes.ProductImage} src={ProductData.colorOptions[2].imageUrl} alt="Purple Color"/>
                    <img className={classes.ProductImage} src={ProductData.colorOptions[3].imageUrl} alt="Wine Color"/>*/}
                </div>

                <h3 className={classes.SectionHeading}>Features</h3>
                <div>
                    {featureList}
                </div>

                <button className={classes.PrimaryButton}>Buy Now</button>
            </div>
    )
}

export default ProductDetails;