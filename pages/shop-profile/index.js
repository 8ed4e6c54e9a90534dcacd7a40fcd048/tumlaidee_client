import fetch from 'isomorphic-unfetch'
import ShopProfile from '../../components/shop/ShopProfile'
import ShopModel from '../../models/ShopModel'

const shop_model = new ShopModel;

const Index = (props) => (
    <ShopProfile shop_detail={props.shop_detail} />

)


Index.getInitialProps = async function () {
    let shop_detail = await shop_model.getShopDetailBy();
    // console.log(shop_detail);
    // let data = [];
    return {
        shop_detail: shop_detail
    };
};

export default Index