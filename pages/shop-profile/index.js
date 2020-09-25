import fetch from 'isomorphic-unfetch'
import ShopProfile from './shop-profile';

const Index = (props) => (
    <ShopProfile />

)

Index.getInitialProps = async function () {
    // const res = await fetch('https://my-json-server.typicode.com/mood-board/demo/products');
    // const data = await res.json();
    // console.log("data : ", data)
    let data = [];
    return {
        products: data
    };
};
export default Index