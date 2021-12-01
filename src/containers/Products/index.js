import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { Col, Container, Row, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import NewModal from '../../components/UI/Modal';
import { addProduct, deleteProductById } from '../../actions';
import './index.css';
import { generatePublicUrl } from '../../urlConfig';
import linearCategories from '../../helper/linearCategories';
import {
    FcViewDetails,
    FcDeleteDatabase,
    FcEditImage
} from "react-icons/fc";


function Products() {
    const [show, setShow] = useState(false);
    const [updateShow, setUpdateShow] = useState(false);
    const [ProductDetailsModal, setProductDetailsModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [quantity, setQuantity] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [productPictures, setProductPictures] = useState([]);
    const product = useSelector(state => state.product);
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(()=>{
        setCategories( linearCategories(category.categories) );
    }, [category])

    const handleClose = () => {

        const form = new FormData();
        form.append('name', name);
        form.append('price', price);
        form.append('description', description);
        form.append('quantity', quantity);
        form.append('category', selectedCategory);
        for (let pic of productPictures) {
            form.append('productPicture', pic)
        }
        dispatch(addProduct(form));
        
        setShow(false);

        setName("");
        setPrice("");
        setDescription("");
        setQuantity("");
        setSelectedCategory("");
        setProductPictures([]);
    }
    const handleShow = () => setShow(true);

    function handleProductPicturs(event) {
        setProductPictures([
            ...productPictures,
            event.target.files[0]
        ]);
    }

    function showUpdate(productk){
        setName(productk.name);
        setPrice(productk.price);
        setDescription(productk.description);
        setQuantity(productk.quantity);
        setSelectedCategory(productk.category._id);
        setUpdateShow(true);   
    }

    function closeUpdate(){
        setUpdateShow(false);
        setName("");
        setPrice("");
        setDescription("");
        setQuantity("");
        setSelectedCategory("");
        setProductPictures([]);
    }


    function renderProducts(){
        return(
            <Table style={{ fontSize : "12px" }}  responsive="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               {
                product.products.length > 0 ?
                product.products.map( (product,index) =>
                    <tr key={product._id} >
                    <td>{index+1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.category.name}</td>
                    <td style={{minWidth : "180px"}} >
                        <button
                          onClick={() => showProductDetailsModal(product)}
                        ><FcViewDetails /> Info</button>
                         <button onClick={()=>{showUpdate(product)}} ><FcEditImage /> Edit </button>
                        <button
                         onClick={() => {
                             const payload = {
                                 productId : product._id
                             };
                             const returnBool = window.confirm(`It Will Delete ${product.name}`);
                             if(returnBool){
                                dispatch(deleteProductById(payload))
                             }
                         }}
                        >
                         <FcDeleteDatabase /> Del
                        </button>
                    </td>
                </tr>
                 ) : null
               }
            </tbody>
        </Table>
        )

    }

    function renderUpdateProductModal(){
        return(
            <NewModal
            show={updateShow}
            handleClose={closeUpdate}
            onSubmit={handleClose}
            modalTitle={'Add New Product'}
        >
            <Input
                Label="Product Name"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                Label="Price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <Input
                Label="Quantity"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <Input
                Label="Description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label className="labelHeader" >Select Category</label>
            <Input 
                type="select"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                options={categories}
                placeholder="select category"
            />
            {
                productPictures.length > 0 ?
                    productPictures.map((pic, index) => <div key={index} >{pic.name}</div>) : null
            }
            <input type="file" name="productPicture" onChange={handleProductPicturs} ></input>
        </NewModal>
        )
    }


    function renderAddProductModal(){
        return(
            <NewModal
            show={show}
            handleClose={()=> setShow(false)}
            onSubmit={handleClose}
            modalTitle={'Add New Product'}
        >
            <Input
                Label="Product Name"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                Label="Price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <Input
                Label="Quantity"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <Input
                Label="Description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label className="labelHeader" >Select Category</label>
            <Input 
                type="select"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                options={categories}
                placeholder="select category"
            />
            {
                productPictures.length > 0 ?
                    productPictures.map((pic, index) => <div key={index} >{pic.name}</div>) : null
            }
            <input type="file" name="productPicture" onChange={handleProductPicturs} ></input>
        </NewModal>
        )
    }

    function showProductDetailsModal(productk){
        setProductDetails(productk);
        setProductDetailsModal(true);
    }

    function renderProductDetailsModal(){
 
        if(!productDetails){
            return null;
        }

        return(
            <NewModal
              show = {ProductDetailsModal}
              handleClose = {()=>setProductDetailsModal(false)}
              modalTitle = {'Product Details'}
              size='lg'
              onlyShow='onlyShow' 
            >
            <Row>
               <Col md='6' >
                   <label className="key" >Name</label>
                   <p className="value" >{productDetails.name}</p>
               </Col>
               <Col md='6' >
                   <label className="key" >Price</label>
                   <p className="value" >{productDetails.price}</p>
               </Col>
            </Row>
            <Row>
               <Col md='6' >
                   <label className="key" >Quantity</label>
                   <p className="value" >{productDetails.quantity}</p>
               </Col>
               <Col md='6' >
                   <label className="key" >Category</label>
                   <p className="value" >{productDetails.category.name}</p>
               </Col>
            </Row>
            <Row>
               <Col md='12' >
                   <label className="key" >Description</label>
                   <p className="value" >{productDetails.description}</p>
               </Col>
            </Row>
            <Row>
               <Col>
                 <label className="key" >Product Pictures</label>
                 <div style={{display : 'flex'}} >
                    { productDetails.productPictures.map(picture =>
                      <div key = {picture._id} className="productImgCont" >
                         <img src={ picture.img.data != undefined ? `data:image/${picture.img.contentType};base64,${picture.img.data.toString('base64')}` : null} />
                      </div>
                    ) }
                 </div>
               </Col>
            </Row>
            <Row><Col>Created By -</Col></Row>
            <Row>
                <Col>
                    <label className="key" >Name</label>
                    <p className="value" >{`${productDetails.createdBy.firstName && productDetails.createdBy.firstName} ${productDetails.createdBy.lastName && productDetails.createdBy.lastName}`}</p>
                </Col>
                <Col>
                    <label className="key" >Email ID</label>
                    <p className="value" >{productDetails.createdBy.email && productDetails.createdBy.email}</p>
                </Col>
            </Row>
            </NewModal>
        )
    }



    return (
        <Layout sidebar >
            <Container>
                <Row>
                    <Col md={12} >
                        <div className="categoryCont" >
                            <h3>Product</h3>
                            <button onClick={handleShow} >+</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      {renderProducts()}
                    </Col>
                </Row>
            </Container>
                {renderAddProductModal()}
                {renderProductDetailsModal()}
                {renderUpdateProductModal()}
        </Layout>
    )
}

export default Products
