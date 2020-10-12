import fetch from 'isomorphic-unfetch';
import '../assets/fontawesome-5/css/all.css'
const ProductView = props => {
    console.log(props);
    return (
        <>
            <h1>{`${props.id}`}</h1>
        </>
    )
};
ProductView.getInitialProps = async function (context) {
    const { id } = context.query;

    return { id };
};

export default ProductView;