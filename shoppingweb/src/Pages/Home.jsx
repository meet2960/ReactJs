import React, {useEffect} from "react";
import {Container} from "reactstrap";
import {useDispatch} from "react-redux";
import {getProductList} from "../Redux/product/action";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);
    return (
        <React.Fragment>
            <Container>
                This is home page, all the products will appear here
            </Container>
        </React.Fragment>
    );
};

export default Home;