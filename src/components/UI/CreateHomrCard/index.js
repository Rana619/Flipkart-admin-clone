import React, {useState, useEffect} from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import linearProductList from '../../../helper/linearProductList';
import linearCategoriesWithSlugValue from '../../../helper/linerCategoriesWithSlugValue';
import linearCategories from '../../../helper/linearCategories';
import Input from '../Input';

function CreateHomeCard(props) {

    const {
        posterId,
        posterSlug,
        setPosterId,
        setPosterSlug,
        title,
        header,
        subhader,
        offer,
        setHeader,
        setSubheader,
        setOffer,
        productId,
        setProductId,
        AddPoster,
        allProductIds,
        allPosterToIds,
        allPosterToSlugs,
        allHeaders,
        allOffers,
        allSubheaders,
    } = props

    function handelPosterId(e){ setPosterId(e.target.value.toString()) }
    function handelPosterSlug(e){ setPosterSlug(e.target.value) }
    function handelHeader(e){ setHeader(e.target.value) }
    function handelSubheader(e){ setSubheader(e.target.value) }
    function handelOffer(e){ setOffer(e.target.value) }
    function handelProductId(e){ setProductId(e.target.value.toString()) }


    const [categoriesBySlug, setCategoriesBySlug] = useState([]);
    const [categoriesByID, setCategoriesByID] = useState([]);
    const [productsByID, setProductsByID] = useState([]);
    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product);

    useEffect(() => {
        setCategoriesBySlug(linearCategoriesWithSlugValue(category.categories));
        setCategoriesByID(linearCategories(category.categories))
    }, [category])

    useEffect(() => {
        setProductsByID(linearProductList(product.products))
    }, [product])

    return (
        <Card
            style={{ margin: "10px 0", }}
            headerLeft={title}
        >
          {
            allProductIds && allProductIds.map((allProductId, index) =>(
                <div key={index} >
                  <label>#{index+1}</label>
                  <ul>
                    <li>{allProductId}</li>
                    <li>{allPosterToIds[index] && allPosterToIds[index]}</li>
                    <li>{allPosterToSlugs[index] && allPosterToSlugs[index]}</li>
                    <li>{allHeaders[index] && allHeaders[index]}</li>
                    <li>{allOffers[index] && allOffers[index]}</li>
                    <li>{allSubheaders[index] && allSubheaders[index]}</li>
                  </ul>
                </div>
            ))
          }
            <div style={{ margin: "30px", display: "flex", justifyContent: "space-around" }} >

                <div style={{ width: "45%", display: "flex", flexDirection: "column" }} >
                    <label style={{ marginLeft: "-10px" }} >To Show The Poster</label>
                    <Input
                        type="select"
                        value={productId}
                        onChange={(e)=>handelProductId(e)}
                        options={productsByID}
                        placeholder="Select Product"
                    />
                    <label style={{ marginLeft: "-10px", marginTop: "15px" }} >To Map The Poster</label>
                    <Input
                        type="select"
                        value={posterId}
                        onChange={(e) => handelPosterId(e)}
                        options={categoriesByID}
                        placeholder="Select category"
                    />
                    <Input
                        type="select"
                        value={posterSlug}
                        onChange={(e) => handelPosterSlug(e)}
                        options={categoriesBySlug}
                        placeholder="Confirm category"
                    />
                </div>

                <div style={{ width: "45%", display: "flex", flexDirection: "column" }} >
                    <input 
                      style={{ marginTop: "25px" }} 
                      type="text" 
                      placeholder="Header" 
                      value={header}
                      onChange={(e) => handelHeader(e)}
                    />
                    <input 
                      style={{ marginTop: "10px" }} 
                      type="text" 
                      placeholder="Offer" 
                      onChange={offer}
                      onChange={(e)=> handelOffer(e)}
                    />
                    <input 
                       style={{ marginTop: "10px" }} 
                       type="text" 
                       placeholder="Sub Header" 
                       value={subhader}
                       onChange={(e)=> handelSubheader(e)}
                    />
                </div>

            </div>
            <div style={{ marginRight: "55px", textAlign: "right", marginBottom: "20px" }} >
                <button
                    onClick={AddPoster}
                    style={{
                        border: "none",
                        background: "blue",
                        color: "white",
                        fontSize: "20px",
                        padding: "5px 15px",
                        borderRadius: "5px"
                    }} >
                    Add
                </button>
            </div>
        </Card>
    )
}

export default CreateHomeCard;
