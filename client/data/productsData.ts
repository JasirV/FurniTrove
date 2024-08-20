const image1 = require('../../assets/sc1.png').default;
const image2 = require('../../assets/sc2.png').default;
const image3 = require('../../assets/sc3.png').default;
const image4 = require('../../assets/cs4.png').default;
const image5 = require('../../assets/cs5.png').default;
const image6 = require('../../assets/cs6.png').default;
type Product={
    index:number,
    img:String
}
const Products:Product[]=[
    {index:1,img:image1},
    {index:3,img:image3},
    {index:4,img:image4},
    {index:5,img:image5},
    {index:6,img:image6},
]


export default Products;