import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createPage } from '../../actions';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import NewModal from '../../components/UI/Modal';
import linerCategoriesWithSlugValue from '../../helper/linerCategoriesWithSlugValue';
import linearCategories from '../../helper/linearCategories'
import { generatePublicUrl } from '../../urlConfig';
import { IoIosAdd } from "react-icons/io";
import "./style.css"


function Page() {

    const [createModal, setCreateModal] = useState(false);
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [categoriesID, setCategoriesID] = useState([]);

    const [categoryId, setCategoryId] = useState('');

    const [categorySlugForBanner, setCategorySlugForBanner] = useState('');
    const [categorySlugForPoster, setCategorySlugForPoster] = useState('');

    const [categoryIdForBanner, setCategoryIdForBanner] = useState('');
    const [categoryIdForPoster, setCategoryIdForPoster] = useState('');

    const [bannerPic, setBannerPic] = useState("");
    const [productPic, setProductPic] = useState("");

    const [banners, setBanners] = useState([]);
    const [products, setProducts] = useState([]);

    const [bannersCategories, setBannersCategories] = useState([]);
    const [productsCategories, setProductsCategories] = useState([]);

    const [bannersCategoryID, setBannersCategoryID] = useState([]);
    const [productsCategoryID, setProductsCategoryID] = useState([]);

    const [allPages, setAllPage] = useState([]);


    const [desc, setDesc] = useState('');

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);




    useEffect(() => {
        setCategories(linerCategoriesWithSlugValue(category.categories));
        setCategoriesID(linearCategories(category.categories))
    }, [category])



    useEffect(() => {
        if (!page.loading) {
            setCreateModal(false);
            setTitle('');
            setCategoryId('');
            setDesc('');
            setProducts([]);
            setBanners([]);
        }
        setAllPage(page.pages);
    }, [page])

    function onCategoryChange(e) {
        setCategoryId(e.target.value);
    }

    function onCategoryChangeForPoster(e) {
        setCategorySlugForPoster(e.target.value);
    }

    function onCategoryChangeForBanner(e) {
        setCategorySlugForBanner(e.target.value);
    }

    function onCategoryChangeForBannerID(e) {
        setCategoryIdForBanner(e.target.value);
    }

    function onCategoryChangeForPosterID(e) {
        setCategoryIdForPoster(e.target.value);
    }

    function handleProductsImages(e) {
        setProductPic(e.target.files[0]);
    }

    function handleBannerImages(e) {
        setBannerPic(e.target.files[0])
    }

    function submitBanner() {
        setBanners([...banners, bannerPic]);
        setBannersCategories([...bannersCategories, categorySlugForBanner]);
        setBannersCategoryID([...bannersCategoryID, categoryIdForBanner]);

        setBannerPic("");
        setCategorySlugForBanner("");
        setCategoryIdForBanner("");

    }

    function submitPoster() {
        setProducts([...products, productPic]);
        setProductsCategories([...productsCategories, categorySlugForPoster]);
        setProductsCategoryID([...productsCategoryID, categoryIdForPoster])

        setProductPic("");
        setCategoryIdForPoster("");
        setCategorySlugForPoster("");
    }
    function submitPageForm(e) {

        if (title === "") {
            alert('Title is required');
            setCreateModal(false);
            return;
        }
        const form = new FormData();
        form.append('title', title);
        form.append('description', desc);
        form.append('category', categoryId);

        banners.forEach((banner, index) => {
            form.append('banners', banner);
        });
        products.forEach((product, index) => {
            form.append('products', product);
        });

        bannersCategories.forEach((bannerCat, index) => {
            form.append('bannersCat', bannerCat);
        });
        productsCategories.forEach((productCat, index) => {
            form.append('productsCat', productCat);
        });

        bannersCategoryID.forEach((bannerCatID, index) => {
            form.append('bannersCatID', bannerCatID);
        });
        productsCategoryID.forEach((productCatID, index) => {
            form.append('productsCatID', productCatID);
        });

        dispatch(createPage(form));
        setCreateModal(false)
    }


    const renderCreatePageModal = () => {
        return (

            <NewModal
                show={createModal}
                modalTitle={'Create New Page'}
                handleClose={() => setCreateModal(false)}
                onSubmit={submitPageForm}
            >
                <Container>
                    <Row>
                        <Col>
                            <Input
                                type="select"
                                value={categoryId}
                                onChange={onCategoryChange}
                                options={categoriesID}
                                placeholder="select category"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder={'Page Title'}
                                className="form-control-sm"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                placeholder={'Page Description'}
                                className="form-control-sm"
                            />
                        </Col>
                    </Row>
                    <label>Create Banner</label>
                    {
                        banners.length > 0 ?
                            banners.map((banner, index) =>
                                <Row key={index} >
                                    <ul>
                                        <li>{banner && banner.name}</li>
                                        <li>{bannersCategories[index] && bannersCategories[index]}</li>
                                    </ul>
                                </Row>
                            ) : null
                    }
                    <Row>
                        <Col>
                            <Input
                                type="file"
                                name="banners"
                                onChange={(e) => handleBannerImages(e)}
                                className="form-control-sm"
                            />
                        </Col>
                        <Col>
                            <Input
                                type="select"
                                value={categorySlugForBanner}
                                onChange={onCategoryChangeForBanner}
                                options={categories}
                                placeholder="select category"
                            />
                        </Col>
                    </Row>


                    <Row>
                        <Input
                            type="select"
                            value={categoryIdForBanner}
                            onChange={onCategoryChangeForBannerID}
                            options={categoriesID}
                            placeholder="Confirm category"
                        />
                    </Row>



                    <Row>
                        <button
                            style={{
                                border: "none",
                                background: "blue",
                                width: "100%",
                                padding: "4px 0px",
                                marginTop: "10px",
                                marginBottom: "10px",
                                color: "white"
                            }}
                            onClick={submitBanner}
                        >Create Banner</button>
                    </Row>
                    <label>Create Poster</label>
                    {
                        products.length > 0 ?
                            products.map((product, index) =>
                                <Row key={index} >
                                    <ul>
                                        <li>{product && product.name}</li>
                                        <li>{productsCategories[index] && productsCategories[index]}</li>
                                    </ul>
                                </Row>
                            ) : null
                    }


                    <Row>
                        <Col>
                            <Input
                                type="file"
                                name="products"
                                onChange={(e) => handleProductsImages(e)}
                                className="form-control-sm"
                            />
                        </Col>
                        <Col>
                            <Input
                                type="select"
                                value={categorySlugForPoster}
                                onChange={onCategoryChangeForPoster}
                                options={categories}
                                placeholder="select category"
                            />
                        </Col>
                    </Row>


                    <Row>
                        <Input
                            type="select"
                            value={categoryIdForPoster}
                            onChange={onCategoryChangeForPosterID}
                            options={categoriesID}
                            placeholder="Confirm category"
                        />
                    </Row>

                    <Row>
                        <button
                            style={{
                                border: "none",
                                background: "blue",
                                width: "100%",
                                padding: "4px 0px",
                                marginTop: "10px",
                                marginBottom: "10px",
                                color: "white"
                            }}
                            onClick={submitPoster}
                        >Create Poster</button>
                    </Row>
                </Container>
            </NewModal>
        )
    }

    return (
        <Layout sidebar >
            <div className="mainPageCont" >
                {renderCreatePageModal()}
                <div className="categoryCont" >
                    <h3>Product Page</h3>
                    <button onClick={() => setCreateModal(true)} ><IoIosAdd /></button>
                </div>
                {
                    allPages.length > 0 && allPages.map((page, index) => (
                        <div key={index} className="pageCont" >
                            <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "500" }} >{page.title}</div>
                            <div style={{ textAlign: "center", fontSize: "10px" }} >{page.description}</div>
                            <label>Banners</label>
                            <div className="bannersCont" >
                                {
                                    page.banners.map((banner, indexb) => (
                                        <div className="bannerCont" key={indexb} >
                                            <img src={ banner.img.data != undefined ? `data:image/${banner.img.contentType};base64,${banner.img.data.toString('base64')}` : null} />
                                            <a href={`https://flipkart-clone-cefea.web.app${banner.navigateTo}`} className="links" >
                                                Link{indexb + 1}
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>

                            <label>Posters</label>
                            <div className="bannersCont" >
                                {
                                    page.products.map((product, indexp) => (
                                        <div className="bannerCont" key={indexp} >
                                            <img src={product.img.data != undefined ? `data:image/${product.img.contentType};base64,${product.img.data.toString('base64')}` : null} />
                                            <a href={`https://flipkart-clone-cefea.web.app${product.navigateTo}`} className="links" >
                                                Link{indexp + 1}
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>

                            <div
                                style={{
                                    display: "flex"
                                }}
                            >
                                <div
                                    style={{
                                        margin: "15px"
                                    }}
                                >
                                    <div
                                        style={{
                                            opacity: "0.8"
                                        }}
                                    >Category</div>
                                    <div

                                    >{page.category.name}</div>
                                </div>
                                <div
                                    style={{
                                        margin: "15px"
                                    }}
                                >
                                    <div
                                        style={{
                                            opacity: "0.8"
                                        }}
                                    >Created By</div>
                                    <div>{`${page.createdBy.firstName} ${page.createdBy.lastName}`}</div>
                                    <div style={{ fontSize: "12px" }} >{page.createdBy.email}</div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export default Page
