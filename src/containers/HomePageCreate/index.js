import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/index.js';
import Card from "../../components/UI/Card";
import Input from '../../components/UI/Input';
import linerCategoriesWithSlugValue from '../../helper/linerCategoriesWithSlugValue';
import linearCategories from '../../helper/linearCategories'
import { IoIosAdd } from "react-icons/io";
import CreateHomeCard from '../../components/UI/CreateHomrCard/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { createHomePage } from '../../actions';
import { Link } from 'react-router-dom';
import { generatePublicUrl } from '../../urlConfig.js';
import './style.css'



function HomePageCreate(props) {
    const [show, setShow] = useState(false);
    const [categoriesBySlug, setCategoriesBySlug] = useState([]);
    const [categoriesByID, setCategoriesByID] = useState([]);
    const category = useSelector(state => state.category);
    const homePage = useSelector(state => state.homePage);
    const dispatch = useDispatch();

    //Create Banner
    const [bannerToId, setBannerToId] = useState('');
    const [bannerToSlug, setBannerToSlug] = useState('');
    const [bannerPic, setBannerPic] = useState("");
    const [allBannerToId, setAllBannerToId] = useState([]);
    const [allBannerToSlug, setAllBannerToSlug] = useState([]);
    const [allBannerPic, setAllBannerPic] = useState([]);

    //Add Deals of The Day
    const [productIddod, setProductIddod] = useState('')
    const [posterToIddod, setPosterToIddod] = useState('');
    const [posterToSlugdod, setPosterToSlugdod] = useState('');
    const [headerdod, setHeaderdod] = useState('');
    const [offerdod, setOfferdod] = useState('');
    const [subheaderdod, setSubheaderdod] = useState('')
    const [allProductIddod, setAllProductIddod] = useState([])
    const [allPosterToIddod, setAllPosterToIddod] = useState([]);
    const [allPosterToSlugdod, setAllPosterToSlugdod] = useState([]);
    const [allHeaderdod, setAllHeaderdod] = useState([]);
    const [allOfferdod, setAllOfferdod] = useState([]);
    const [allSubheaderdod, setAllSubheaderdod] = useState([])

    //Add Deals on TVs and Appliances
    const [productIddta, setProductIddta] = useState('')
    const [posterToIddta, setPosterToIddta] = useState('');
    const [posterToSlugdta, setPosterToSlugdta] = useState('');
    const [headerdta, setHeaderdta] = useState('');
    const [offerdta, setOfferdta] = useState('');
    const [subheaderdta, setSubheaderdta] = useState('')
    const [allProductIddta, setAllProductIddta] = useState([])
    const [allPosterToIddta, setAllPosterToIddta] = useState([]);
    const [allPosterToSlugdta, setAllPosterToSlugdta] = useState([]);
    const [allHeaderdta, setAllHeaderdta] = useState([]);
    const [allOfferdta, setAllOfferdta] = useState([]);
    const [allSubheaderdta, setAllSubheaderdta] = useState([])

    //Add Fashion Budget Buys
    const [productIdfbb, setProductIdfbb] = useState('')
    const [posterToIdfbb, setPosterToIdfbb] = useState('');
    const [posterToSlugfbb, setPosterToSlugfbb] = useState('');
    const [headerfbb, setHeaderfbb] = useState('');
    const [offerfbb, setOfferfbb] = useState('');
    const [subheaderfbb, setSubheaderfbb] = useState('')
    const [allProductIdfbb, setAllProductIdfbb] = useState([])
    const [allPosterToIdfbb, setAllPosterToIdfbb] = useState([]);
    const [allPosterToSlugfbb, setAllPosterToSlugfbb] = useState([]);
    const [allHeaderfbb, setAllHeaderfbb] = useState([]);
    const [allOfferfbb, setAllOfferfbb] = useState([]);
    const [allSubheaderfbb, setAllSubheaderfbb] = useState([])

    //Add  Top Offers On
    const [productIdtoo, setProductIdtoo] = useState('')
    const [posterToIdtoo, setPosterToIdtoo] = useState('');
    const [posterToSlugtoo, setPosterToSlugtoo] = useState('');
    const [headertoo, setHeadertoo] = useState('');
    const [offertoo, setOffertoo] = useState('');
    const [subheadertoo, setSubheadertoo] = useState('')
    const [allProductIdtoo, setAllProductIdtoo] = useState([])
    const [allPosterToIdtoo, setAllPosterToIdtoo] = useState([]);
    const [allPosterToSlugtoo, setAllPosterToSlugtoo] = useState([]);
    const [allHeadertoo, setAllHeadertoo] = useState([]);
    const [allOffertoo, setAllOffertoo] = useState([]);
    const [allSubheadertoo, setAllSubheadertoo] = useState([]);

    //Add Furniture Best Sellers
    const [productIdfbs, setProductIdfbs] = useState('')
    const [posterToIdfbs, setPosterToIdfbs] = useState('');
    const [posterToSlugfbs, setPosterToSlugfbs] = useState('');
    const [headerfbs, setHeaderfbs] = useState('');
    const [offerfbs, setOfferfbs] = useState('');
    const [subheaderfbs, setSubheaderfbs] = useState('')
    const [allProductIdfbs, setAllProductIdfbs] = useState([])
    const [allPosterToIdfbs, setAllPosterToIdfbs] = useState([]);
    const [allPosterToSlugfbs, setAllPosterToSlugfbs] = useState([]);
    const [allHeaderfbs, setAllHeaderfbs] = useState([]);
    const [allOfferfbs, setAllOfferfbs] = useState([]);
    const [allSubheaderfbs, setAllSubheaderfbs] = useState([]);

    //Add Best Price On Fashion
    const [productIdbpf, setProductIdbpf] = useState('')
    const [posterToIdbpf, setPosterToIdbpf] = useState('');
    const [posterToSlugbpf, setPosterToSlugbpf] = useState('');
    const [headerbpf, setHeaderbpf] = useState('');
    const [offerbpf, setOfferbpf] = useState('');
    const [subheaderbpf, setSubheaderbpf] = useState('')
    const [allProductIdbpf, setAllProductIdbpf] = useState([])
    const [allPosterToIdbpf, setAllPosterToIdbpf] = useState([]);
    const [allPosterToSlugbpf, setAllPosterToSlugbpf] = useState([]);
    const [allHeaderbpf, setAllHeaderbpf] = useState([]);
    const [allOfferbpf, setAllOfferbpf] = useState([]);
    const [allSubheaderbpf, setAllSubheaderbpf] = useState([]);

    //Add Top Deals On Electronics
    const [productIddoe, setProductIddoe] = useState('')
    const [posterToIddoe, setPosterToIddoe] = useState('');
    const [posterToSlugdoe, setPosterToSlugdoe] = useState('');
    const [headerdoe, setHeaderdoe] = useState('');
    const [offerdoe, setOfferdoe] = useState('');
    const [subheaderdoe, setSubheaderdoe] = useState('')
    const [allProductIddoe, setAllProductIddoe] = useState([])
    const [allPosterToIddoe, setAllPosterToIddoe] = useState([]);
    const [allPosterToSlugdoe, setAllPosterToSlugdoe] = useState([]);
    const [allHeaderdoe, setAllHeaderdoe] = useState([]);
    const [allOfferdoe, setAllOfferdoe] = useState([]);
    const [allSubheaderdoe, setAllSubheaderdoe] = useState([]);

    //Add Ease Your Daily Chores
    const [productIdeydc, setProductIdeydc] = useState('')
    const [posterToIdeydc, setPosterToIdeydc] = useState('');
    const [posterToSlugeydc, setPosterToSlugeydc] = useState('');
    const [headereydc, setHeadereydc] = useState('');
    const [offereydc, setOffereydc] = useState('');
    const [subheadereydc, setSubheadereydc] = useState('')
    const [allProductIdeydc, setAllProductIdeydc] = useState([])
    const [allPosterToIdeydc, setAllPosterToIdeydc] = useState([]);
    const [allPosterToSlugeydc, setAllPosterToSlugeydc] = useState([]);
    const [allHeadereydc, setAllHeadereydc] = useState([]);
    const [allOffereydc, setAllOffereydc] = useState([]);
    const [allSubheadereydc, setAllSubheadereydc] = useState([]);

    //Add Home Makeover
    const [productIdhm, setProductIdhm] = useState('')
    const [posterToIdhm, setPosterToIdhm] = useState('');
    const [posterToSlughm, setPosterToSlughm] = useState('');
    const [headerhm, setHeaderhm] = useState('');
    const [offerhm, setOfferhm] = useState('');
    const [subheaderhm, setSubheaderhm] = useState('')
    const [allProductIdhm, setAllProductIdhm] = useState([])
    const [allPosterToIdhm, setAllPosterToIdhm] = useState([]);
    const [allPosterToSlughm, setAllPosterToSlughm] = useState([]);
    const [allHeaderhm, setAllHeaderhm] = useState([]);
    const [allOfferhm, setAllOfferhm] = useState([]);
    const [allSubheaderhm, setAllSubheaderhm] = useState([]);

    //Add New Launches
    const [productIdnl, setProductIdnl] = useState('')
    const [posterToIdnl, setPosterToIdnl] = useState('');
    const [posterToSlugnl, setPosterToSlugnl] = useState('');
    const [headernl, setHeadernl] = useState('');
    const [offernl, setOffernl] = useState('');
    const [subheadernl, setSubheadernl] = useState('')
    const [allProductIdnl, setAllProductIdnl] = useState([])
    const [allPosterToIdnl, setAllPosterToIdnl] = useState([]);
    const [allPosterToSlugnl, setAllPosterToSlugnl] = useState([]);
    const [allHeadernl, setAllHeadernl] = useState([]);
    const [allOffernl, setAllOffernl] = useState([]);
    const [allSubheadernl, setAllSubheadernl] = useState([]);





    //Create Banner Add
    function addBannerInfo() {
        setAllBannerToId([...allBannerToId, bannerToId]);
        setAllBannerToSlug([...allBannerToSlug, bannerToSlug]);
        setAllBannerPic([...allBannerPic, bannerPic]);
        setBannerToId("");
        setBannerToSlug("");
        setBannerPic("");
    }

    //Deal of the Day
    function addDODInfo() {
        setAllProductIddod([...allProductIddod, productIddod])
        setAllPosterToIddod([...allPosterToIddod, posterToIddod]);
        setAllPosterToSlugdod([...allPosterToSlugdod, posterToSlugdod]);
        setAllHeaderdod([...allHeaderdod, headerdod]);
        setAllOfferdod([...allOfferdod, offerdod]);
        setAllSubheaderdod([...allSubheaderdod, subheaderdod]);
        setSubheaderdod('');
        setProductIddod('')
        setPosterToIddod('');
        setPosterToSlugdod('');
        setHeaderdod('');
        setOfferdod('');
    }

    //Add Deals on TVs and Appliances
    function addDTAInfo() {
        setAllProductIddta([...allProductIddta, productIddta])
        setAllPosterToIddta([...allPosterToIddta, posterToIddta]);
        setAllPosterToSlugdta([...allPosterToSlugdta, posterToSlugdta]);
        setAllHeaderdta([...allHeaderdta, headerdta]);
        setAllOfferdta([...allOfferdta, offerdta]);
        setAllSubheaderdta([...allSubheaderdta, subheaderdta])
        setProductIddta('')
        setPosterToIddta('');
        setPosterToSlugdta('');
        setHeaderdta('');
        setOfferdta('');
        setSubheaderdta('')

    }

    //Add Fashion Budget Buys
    function addFBBInfo() {
        setAllProductIdfbb([...allProductIdfbb, productIdfbb])
        setAllPosterToIdfbb([...allPosterToIdfbb, posterToIdfbb]);
        setAllPosterToSlugfbb([...allPosterToSlugfbb, posterToSlugfbb]);
        setAllHeaderfbb([...allHeaderfbb, headerfbb]);
        setAllOfferfbb([...allOfferfbb, offerfbb]);
        setAllSubheaderfbb([...allSubheaderfbb, subheaderfbb])
        setProductIdfbb('')
        setPosterToIdfbb('');
        setPosterToSlugfbb('');
        setHeaderfbb('');
        setOfferfbb('');
        setSubheaderfbb('');
    }

    //Add  Top Offers On
    function addTOOInfo() {
        setAllProductIdtoo([...allProductIdtoo, productIdtoo])
        setAllPosterToIdtoo([...allPosterToIdtoo, posterToIdtoo]);
        setAllPosterToSlugtoo([...allPosterToSlugtoo, posterToSlugtoo]);
        setAllHeadertoo([...allHeadertoo, headertoo]);
        setAllOffertoo([...allOffertoo, offertoo]);
        setAllSubheadertoo([...allSubheadertoo, subheadertoo])
        setProductIdtoo('')
        setPosterToIdtoo('');
        setPosterToSlugtoo('');
        setHeadertoo('');
        setOffertoo('');
        setSubheadertoo('');
    }

    //Add Furniture Best Sellers
    function addFBSInfo() {
        setAllProductIdfbs([...allProductIdfbs, productIdfbs])
        setAllPosterToIdfbs([...allPosterToIdfbs, posterToIdfbs]);
        setAllPosterToSlugfbs([...allPosterToSlugfbs, posterToSlugfbs]);
        setAllHeaderfbs([...allHeaderfbs, headerfbs]);
        setAllOfferfbs([...allOfferfbs, offerfbs]);
        setAllSubheaderfbs([...allSubheaderfbs, subheaderfbs])
        setProductIdfbs('')
        setPosterToIdfbs('');
        setPosterToSlugfbs('');
        setHeaderfbs('');
        setOfferfbs('');
        setSubheaderfbs('');
    }

    //Add Best Price On Fashion
    function addBPFInfo() {
        setAllProductIdbpf([...allProductIdbpf, productIdbpf])
        setAllPosterToIdbpf([...allPosterToIdbpf, posterToIdbpf]);
        setAllPosterToSlugbpf([...allPosterToSlugbpf, posterToSlugbpf]);
        setAllHeaderbpf([...allHeaderbpf, headerbpf]);
        setAllOfferbpf([...allOfferbpf, offerbpf]);
        setAllSubheaderbpf([...allSubheaderbpf, subheaderbpf])
        setProductIdbpf('')
        setPosterToIdbpf('');
        setPosterToSlugbpf('');
        setHeaderbpf('');
        setOfferbpf('');
        setSubheaderbpf('');
    }

    //Add Top Deals On Electronics
    function addDOEInfo() {
        setAllProductIddoe([...allProductIddoe, productIddoe])
        setAllPosterToIddoe([...allPosterToIddoe, posterToIddoe]);
        setAllPosterToSlugdoe([...allPosterToSlugdoe, posterToSlugdoe]);
        setAllHeaderdoe([...allHeaderdoe, headerdoe]);
        setAllOfferdoe([...allOfferdoe, offerdoe]);
        setAllSubheaderdoe([...allSubheaderdoe, subheaderdoe])
        setProductIddoe('')
        setPosterToIddoe('');
        setPosterToSlugdoe('');
        setHeaderdoe('');
        setOfferdoe('');
        setSubheaderdoe('');
    }

    //Add Ease Your Daily Chores
    function addEYDCInfo() {
        setAllProductIdeydc([...allProductIdeydc, productIdeydc])
        setAllPosterToIdeydc([...allPosterToIdeydc, posterToIdeydc]);
        setAllPosterToSlugeydc([...allPosterToSlugeydc, posterToSlugeydc]);
        setAllHeadereydc([...allHeadereydc, headereydc]);
        setAllOffereydc([...allOffereydc, offereydc]);
        setAllSubheadereydc([...allSubheadereydc, subheadereydc])
        setProductIdeydc('')
        setPosterToIdeydc('');
        setPosterToSlugeydc('');
        setHeadereydc('');
        setOffereydc('');
        setSubheadereydc('');
    }

    //Add Home Makeover
    function addHMInfo() {
        setAllProductIdhm([...allProductIdhm, productIdhm])
        setAllPosterToIdhm([...allPosterToIdhm, posterToIdhm]);
        setAllPosterToSlughm([...allPosterToSlughm, posterToSlughm]);
        setAllHeaderhm([...allHeaderhm, headerhm]);
        setAllOfferhm([...allOfferhm, offerhm]);
        setAllSubheaderhm([...allSubheaderhm, subheaderhm])
        setProductIdhm('')
        setPosterToIdhm('');
        setPosterToSlughm('');
        setHeaderhm('');
        setOfferhm('');
        setSubheaderhm('');
    }

    //Add New Launches
    function addNLInfo() {
        setAllProductIdnl([...allProductIdnl, productIdnl])
        setAllPosterToIdnl([...allPosterToIdnl, posterToIdnl]);
        setAllPosterToSlugnl([...allPosterToSlugnl, posterToSlugnl]);
        setAllHeadernl([...allHeadernl, headernl]);
        setAllOffernl([...allOffernl, offernl]);
        setAllSubheadernl([...allSubheadernl, subheadernl])
        setProductIdnl('')
        setPosterToIdnl('');
        setPosterToSlugnl('');
        setHeadernl('');
        setOffernl('');
        setSubheadernl('');
    }


    //HomePageSubmit
    function submitHomePageForm() {
        const form = new FormData();
        allBannerToId.forEach((bannerID, index) => {
            form.append('bannerIds', bannerID);
        });
        allBannerToSlug.forEach((bannerSlug, index) => {
            form.append('bannerSlugs', bannerSlug);
        });
        allBannerPic.forEach((bannerPic, index) => {
            form.append('bannerPics', bannerPic);
        });


        allProductIddod.forEach((productIddod, index) => {
            form.append('productIddods', productIddod);
        });
        allPosterToIddod.forEach((posterToIddod, index) => {
            form.append('posterToIddods', posterToIddod);
        });
        allPosterToSlugdod.forEach((posterToSlugdod, index) => {
            form.append('posterToSlugdods', posterToSlugdod);
        });
        allHeaderdod.forEach((headerdod, index) => {
            form.append('headerdods', headerdod);
        });
        allOfferdod.forEach((offerdod, index) => {
            form.append('offerdods', offerdod);
        });
        allSubheaderdod.forEach((subheaderdod, index) => {
            form.append('subheaderdods', subheaderdod);
        });


        allProductIddta.forEach((productIddta, index) => {
            form.append('productIddtas', productIddta);
        });
        allPosterToIddta.forEach((posterToIddta, index) => {
            form.append('posterToIddtas', posterToIddta);
        });
        allPosterToSlugdta.forEach((posterToSlugdta, index) => {
            form.append('posterToSlugdtas', posterToSlugdta);
        });
        allHeaderdta.forEach((headerdta, index) => {
            form.append('headerdtas', headerdta);
        });
        allOfferdta.forEach((offerdta, index) => {
            form.append('offerdtas', offerdta);
        });
        allSubheaderdta.forEach((subheaderdta, index) => {
            form.append('subheaderdtas', subheaderdta);
        });

        allProductIdfbb.forEach((productIdfbb, index) => {
            form.append('productIdfbbs', productIdfbb);
        });
        allPosterToIdfbb.forEach((posterToIdfbb, index) => {
            form.append('posterToIdfbbs', posterToIdfbb);
        });
        allPosterToSlugfbb.forEach((posterToSlugfbb, index) => {
            form.append('posterToSlugfbbs', posterToSlugfbb);
        });
        allHeaderfbb.forEach((headerfbb, index) => {
            form.append('headerfbbs', headerfbb);
        });
        allOfferfbb.forEach((offerfbb, index) => {
            form.append('offerfbbs', offerfbb);
        });
        allSubheaderfbb.forEach((subheaderfbb, index) => {
            form.append('subheaderfbbs', subheaderfbb);
        });

        allProductIdtoo.forEach((productIdtoo, index) => {
            form.append('productIdtoos', productIdtoo);
        });
        allPosterToIdtoo.forEach((posterToIdtoo, index) => {
            form.append('posterToIdtoos', posterToIdtoo);
        });
        allPosterToSlugtoo.forEach((posterToSlugtoo, index) => {
            form.append('posterToSlugtoos', posterToSlugtoo);
        });
        allHeadertoo.forEach((headertoo, index) => {
            form.append('headertoos', headertoo);
        });
        allOffertoo.forEach((offertoo, index) => {
            form.append('offertoos', offertoo);
        });
        allSubheadertoo.forEach((subheadertoo, index) => {
            form.append('subheadertoos', subheadertoo);
        });

        allProductIdfbs.forEach((productIdfbs, index) => {
            form.append('productIdfbss', productIdfbs);
        });
        allPosterToIdfbs.forEach((posterToIdfbs, index) => {
            form.append('posterToIdfbss', posterToIdfbs);
        });
        allPosterToSlugfbs.forEach((posterToSlugfbs, index) => {
            form.append('posterToSlugfbss', posterToSlugfbs);
        });
        allHeaderfbs.forEach((headerfbs, index) => {
            form.append('headerfbss', headerfbs);
        });
        allOfferfbs.forEach((offerfbs, index) => {
            form.append('offerfbss', offerfbs);
        });
        allSubheaderfbs.forEach((subheaderfbs, index) => {
            form.append('subheaderfbss', subheaderfbs);
        });

        allProductIdbpf.forEach((productIdbpf, index) => {
            form.append('productIdbpfs', productIdbpf);
        });
        allPosterToIdbpf.forEach((posterToIdbpf, index) => {
            form.append('posterToIdbpfs', posterToIdbpf);
        });
        allPosterToSlugbpf.forEach((posterToSlugbpf, index) => {
            form.append('posterToSlugbpfs', posterToSlugbpf);
        });
        allHeaderbpf.forEach((headerbpf, index) => {
            form.append('headerbpfs', headerbpf);
        });
        allOfferbpf.forEach((offerbpf, index) => {
            form.append('offerbpfs', offerbpf);
        });
        allSubheaderbpf.forEach((subheaderbpf, index) => {
            form.append('subheaderbpfs', subheaderbpf);
        });

        allProductIddoe.forEach((productIddoe, index) => {
            form.append('productIddoes', productIddoe);
        });
        allPosterToIddoe.forEach((posterToIddoe, index) => {
            form.append('posterToIddoes', posterToIddoe);
        });
        allPosterToSlugdoe.forEach((posterToSlugdoe, index) => {
            form.append('posterToSlugdoes', posterToSlugdoe);
        });
        allHeaderdoe.forEach((headerdoe, index) => {
            form.append('headerdoes', headerdoe);
        });
        allOfferdoe.forEach((offerdoe, index) => {
            form.append('offerdoes', offerdoe);
        });
        allSubheaderdoe.forEach((subheaderdoe, index) => {
            form.append('subheaderdoes', subheaderdoe);
        });

        allProductIdeydc.forEach((productIdeydc, index) => {
            form.append('productIdeydcs', productIdeydc);
        });
        allPosterToIdeydc.forEach((posterToIdeydc, index) => {
            form.append('posterToIdeydcs', posterToIdeydc);
        });
        allPosterToSlugeydc.forEach((posterToSlugeydc, index) => {
            form.append('posterToSlugeydcs', posterToSlugeydc);
        });
        allHeadereydc.forEach((headereydc, index) => {
            form.append('headereydcs', headereydc);
        });
        allOffereydc.forEach((offereydc, index) => {
            form.append('offereydcs', offereydc);
        });
        allSubheadereydc.forEach((subheadereydc, index) => {
            form.append('subheadereydcs', subheadereydc);
        });

        allProductIdhm.forEach((productIdhm, index) => {
            form.append('productIdhms', productIdhm);
        });
        allPosterToIdhm.forEach((posterToIdhm, index) => {
            form.append('posterToIdhms', posterToIdhm);
        });
        allPosterToSlughm.forEach((posterToSlughm, index) => {
            form.append('posterToSlughms', posterToSlughm);
        });
        allHeaderhm.forEach((headerhm, index) => {
            form.append('headerhms', headerhm);
        });
        allOfferhm.forEach((offerhm, index) => {
            form.append('offerhms', offerhm);
        });
        allSubheaderhm.forEach((subheaderhm, index) => {
            form.append('subheaderhms', subheaderhm);
        });

        allProductIdnl.forEach((productIdnl, index) => {
            form.append('productIdnls', productIdnl);
        });
        allPosterToIdnl.forEach((posterToIdnl, index) => {
            form.append('posterToIdnls', posterToIdnl);
        });
        allPosterToSlugnl.forEach((posterToSlugnl, index) => {
            form.append('posterToSlugnls', posterToSlugnl);
        });
        allHeadernl.forEach((headernl, index) => {
            form.append('headernls', headernl);
        });
        allOffernl.forEach((offernl, index) => {
            form.append('offernls', offernl);
        });
        allSubheadernl.forEach((subheadernl, index) => {
            form.append('subheadernls', subheadernl);
        });
        dispatch(createHomePage(form));

        setShow(false)
    }




    useEffect(() => {
        setCategoriesBySlug(linerCategoriesWithSlugValue(category.categories));
        setCategoriesByID(linearCategories(category.categories))
    }, [category])


    return (
        <Layout sidebar >
            <div className="categoryCont" >
                <h3>Make Home Page</h3>
                <button onClick={() => setShow(true)} ><IoIosAdd /></button>
            </div>
            {show ?
                <div style={{ padding: "30px", paddingBottom: "50px" }} >
                    <Card
                        style={{ margin: "10px 0", }}
                        headerLeft={'Add Banners'}
                    >
                        {
                            allBannerPic && allBannerPic.map((bannerPictur, index) => (
                                <div key={index}>
                                    <label>#{index + 1}</label>
                                    <ul>
                                        <li>{bannerPictur.name}</li>
                                        <li>{allBannerToSlug[index]}</li>
                                    </ul>
                                </div>
                            ))
                        }
                        <div style={{ margin: "20px", width: "80%", display: "flex", justifyContent: "space-around" }} >
                            <Input
                                type="file"
                                name="Banner Picture"
                                onChange={(e) => setBannerPic(e.target.files[0])}
                                className="form-control-sm"
                            />
                            <Input
                                type="select"
                                value={bannerToId}
                                onChange={(e) => setBannerToId(e.target.value.toString())}
                                options={categoriesByID}
                                placeholder="Select category"
                            />
                            <Input
                                type="select"
                                value={bannerToSlug}
                                onChange={(e) => setBannerToSlug(e.target.value.toString())}
                                options={categoriesBySlug}
                                placeholder="Confirm category"
                            />
                        </div>
                        <div style={{ marginRight: "55px", textAlign: "right", marginBottom: "20px" }} >
                            <span
                                onClick={addBannerInfo}
                                style={{
                                    border: "none",
                                    background: "blue",
                                    color: "white",
                                    fontSize: "20px",
                                    padding: "5px 15px",
                                    borderRadius: "5px"
                                }} >
                                Add
                            </span>
                        </div>
                    </Card>
                    <CreateHomeCard
                        posterId={posterToIddod}
                        posterSlug={posterToSlugdod}
                        setPosterId={setPosterToIddod}
                        setPosterSlug={setPosterToSlugdod}
                        header={headerdod}
                        subhader={subheaderdod}
                        offer={offerdod}
                        setHeader={setHeaderdod}
                        setSubheader={setSubheaderdod}
                        setOffer={setOfferdod}
                        productId={productIddod}
                        setProductId={setProductIddod}
                        AddPoster={addDODInfo}
                        allProductIds={allProductIddod}
                        allPosterToIds={allPosterToIddod}
                        allPosterToSlugs={allPosterToSlugdod}
                        allHeaders={allHeaderdod}
                        allOffers={allOfferdod}
                        allSubheaders={allSubheaderdod}
                        title={'Add Deals of The Day'}
                    />
                    <CreateHomeCard
                        posterId={posterToIddta}
                        posterSlug={posterToSlugdta}
                        setPosterId={setPosterToIddta}
                        setPosterSlug={setPosterToSlugdta}
                        header={headerdta}
                        subhader={subheaderdta}
                        offer={offerdta}
                        setHeader={setHeaderdta}
                        setSubheader={setSubheaderdta}
                        setOffer={setOfferdta}
                        productId={productIddta}
                        setProductId={setProductIddta}
                        AddPoster={addDTAInfo}
                        allProductIds={allProductIddta}
                        allPosterToIds={allPosterToIddta}
                        allPosterToSlugs={allPosterToSlugdta}
                        allHeaders={allHeaderdta}
                        allOffers={allOfferdta}
                        allSubheaders={allSubheaderdta}
                        title={'Add Deals on TVs and Appliances'}
                    />
                    <CreateHomeCard
                        posterId={posterToIdfbb}
                        posterSlug={posterToSlugfbb}
                        setPosterId={setPosterToIdfbb}
                        setPosterSlug={setPosterToSlugfbb}
                        header={headerfbb}
                        subhader={subheaderfbb}
                        offer={offerfbb}
                        setHeader={setHeaderfbb}
                        setSubheader={setSubheaderfbb}
                        setOffer={setOfferfbb}
                        productId={productIdfbb}
                        setProductId={setProductIdfbb}
                        AddPoster={addFBBInfo}
                        allProductIds={allProductIdfbb}
                        allPosterToIds={allPosterToIdfbb}
                        allPosterToSlugs={allPosterToSlugfbb}
                        allHeaders={allHeaderfbb}
                        allOffers={allOfferfbb}
                        allSubheaders={allSubheaderfbb}
                        title={'Add Fashion Budget Buys'}
                    />
                    <CreateHomeCard
                        posterId={posterToIdtoo}
                        posterSlug={posterToSlugtoo}
                        setPosterId={setPosterToIdtoo}
                        setPosterSlug={setPosterToSlugtoo}
                        header={headertoo}
                        subhader={subheadertoo}
                        offer={offertoo}
                        setHeader={setHeadertoo}
                        setSubheader={setSubheadertoo}
                        setOffer={setOffertoo}
                        productId={productIdtoo}
                        setProductId={setProductIdtoo}
                        AddPoster={addTOOInfo}
                        allProductIds={allProductIdtoo}
                        allPosterToIds={allPosterToIdtoo}
                        allPosterToSlugs={allPosterToSlugtoo}
                        allHeaders={allHeadertoo}
                        allOffers={allOffertoo}
                        allSubheaders={allSubheadertoo}
                        title={'Add Top Offers On'}
                    />
                    <CreateHomeCard
                        posterId={posterToIdfbs}
                        posterSlug={posterToSlugfbs}
                        setPosterId={setPosterToIdfbs}
                        setPosterSlug={setPosterToSlugfbs}
                        header={headerfbs}
                        subhader={subheaderfbs}
                        offer={offerfbs}
                        setHeader={setHeaderfbs}
                        setSubheader={setSubheaderfbs}
                        setOffer={setOfferfbs}
                        productId={productIdfbs}
                        setProductId={setProductIdfbs}
                        AddPoster={addFBSInfo}
                        allProductIds={allProductIdfbs}
                        allPosterToIds={allPosterToIdfbs}
                        allPosterToSlugs={allPosterToSlugfbs}
                        allHeaders={allHeaderfbs}
                        allOffers={allOfferfbs}
                        allSubheaders={allSubheaderfbs}
                        title={'Add Furniture Best Sellers'}
                    />
                    <CreateHomeCard
                        posterId={posterToIdbpf}
                        posterSlug={posterToSlugbpf}
                        setPosterId={setPosterToIdbpf}
                        setPosterSlug={setPosterToSlugbpf}
                        header={headerbpf}
                        subhader={subheaderbpf}
                        offer={offerbpf}
                        setHeader={setHeaderbpf}
                        setSubheader={setSubheaderbpf}
                        setOffer={setOfferbpf}
                        productId={productIdbpf}
                        setProductId={setProductIdbpf}
                        AddPoster={addBPFInfo}
                        allProductIds={allProductIdbpf}
                        allPosterToIds={allPosterToIdbpf}
                        allPosterToSlugs={allPosterToSlugbpf}
                        allHeaders={allHeaderbpf}
                        allOffers={allOfferbpf}
                        allSubheaders={allSubheaderbpf}
                        title={'Add Best Price On Fashion'}
                    />
                    <CreateHomeCard
                        posterId={posterToIddoe}
                        posterSlug={posterToSlugdoe}
                        setPosterId={setPosterToIddoe}
                        setPosterSlug={setPosterToSlugdoe}
                        header={headerdoe}
                        subhader={subheaderdoe}
                        offer={offerdoe}
                        setHeader={setHeaderdoe}
                        setSubheader={setSubheaderdoe}
                        setOffer={setOfferdoe}
                        productId={productIddoe}
                        setProductId={setProductIddoe}
                        AddPoster={addDOEInfo}
                        allProductIds={allProductIddoe}
                        allPosterToIds={allPosterToIddoe}
                        allPosterToSlugs={allPosterToSlugdoe}
                        allHeaders={allHeaderdoe}
                        allOffers={allOfferdoe}
                        allSubheaders={allSubheaderdoe}
                        title={'Add Top Deals On Electronics'}
                    />
                    <CreateHomeCard
                        posterId={posterToIdeydc}
                        posterSlug={posterToSlugeydc}
                        setPosterId={setPosterToIdeydc}
                        setPosterSlug={setPosterToSlugeydc}
                        header={headereydc}
                        subhader={subheadereydc}
                        offer={offereydc}
                        setHeader={setHeadereydc}
                        setSubheader={setSubheadereydc}
                        setOffer={setOffereydc}
                        productId={productIdeydc}
                        setProductId={setProductIdeydc}
                        AddPoster={addEYDCInfo}
                        allProductIds={allProductIdeydc}
                        allPosterToIds={allPosterToIdeydc}
                        allPosterToSlugs={allPosterToSlugeydc}
                        allHeaders={allHeadereydc}
                        allOffers={allOffereydc}
                        allSubheaders={allSubheadereydc}
                        title={'Add Ease Your Daily Chores'}
                    />
                    <CreateHomeCard
                        posterId={posterToIdhm}
                        posterSlug={posterToSlughm}
                        setPosterId={setPosterToIdhm}
                        setPosterSlug={setPosterToSlughm}
                        header={headerhm}
                        subhader={subheaderhm}
                        offer={offerhm}
                        setHeader={setHeaderhm}
                        setSubheader={setSubheaderhm}
                        setOffer={setOfferhm}
                        productId={productIdhm}
                        setProductId={setProductIdhm}
                        AddPoster={addHMInfo}
                        allProductIds={allProductIdhm}
                        allPosterToIds={allPosterToIdhm}
                        allPosterToSlugs={allPosterToSlughm}
                        allHeaders={allHeaderhm}
                        allOffers={allOfferhm}
                        allSubheaders={allSubheaderhm}
                        title={'Add Home Makeover'}
                    />
                    <CreateHomeCard
                        posterId={posterToIdnl}
                        posterSlug={posterToSlugnl}
                        setPosterId={setPosterToIdnl}
                        setPosterSlug={setPosterToSlugnl}
                        header={headernl}
                        subhader={subheadernl}
                        offer={offernl}
                        setHeader={setHeadernl}
                        setSubheader={setSubheadernl}
                        setOffer={setOffernl}
                        productId={productIdnl}
                        setProductId={setProductIdnl}
                        AddPoster={addNLInfo}
                        allProductIds={allProductIdnl}
                        allPosterToIds={allPosterToIdnl}
                        allPosterToSlugs={allPosterToSlugnl}
                        allHeaders={allHeadernl}
                        allOffers={allOffernl}
                        allSubheaders={allSubheadernl}
                        title={'Add New Launches'}
                    />
                    <div style={{ textAlign: "center" }} >
                        <button
                            onClick={submitHomePageForm}
                            style={{
                                borderRadius: "5px",
                                border: "none",
                                background: "blue",
                                fontSize: "20px",
                                padding: '5px 25px',
                                color: "white"
                            }} >
                            Save
                        </button>
                    </div>
                    <div style={{ textAlign: "right" }} >
                        <button
                            onClick={() => setShow(false)}
                            style={{
                                borderRadius: "5px",
                                border: "none",
                                background: "blue",
                                fontSize: "20px",
                                padding: '5px 25px',
                                color: "white"
                            }} >
                            Hide
                        </button>
                    </div>
                </div>
                : 
                <div>
                <div className="headreStyle" >Banners</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0 && homePage.homePage[0].banners.length> 0
                        && homePage.homePage[0].banners.map((item, index) => (
                            <div style={{minHight : "300px", marginRight : "20px"}} key={index} >
                                    <div>
                                        <img  src={ item.img.data != undefined ? `data:image/${item.img.contentType};base64,${item.img.data.toString('base64')}` : null} />
                                    </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle">Deal Of The Day</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0
                        && homePage.homePage[0].dealsOfThe.length > 0 &&
                        homePage.homePage[0].dealsOfThe.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                        <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={ item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle">Deals On Tvs And Appliances</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0 
                       && homePage.homePage[0].dealsOnTvsAndAppliances.length > 0 &&
                        homePage.homePage[0].dealsOnTvsAndAppliances.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                        <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={ item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle">Fashion Budget Buys</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0
                        && homePage.homePage[0].fashionBudgetBuys.length > 0 &&
                        homePage.homePage[0].fashionBudgetBuys.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                        <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle">Furniture Best Sellers</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0
                        && homePage.homePage[0].furnitureBestSellers.length > 0 &&
                        homePage.homePage[0].furnitureBestSellers.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                        <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={ item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle">Top Offers On</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0
                        && homePage.homePage[0].topOffersOn.length > 0 &&
                        homePage.homePage[0].topOffersOn.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                        <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle">Best Price On Fashion</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0
                        && homePage.homePage[0].bestPriceOnFashion.length > 0 &&
                        homePage.homePage[0].bestPriceOnFashion.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                    <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle">Top Deals On Electronics</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0
                        && homePage.homePage[0].topDealsOnElectronics.length > 0 &&
                        homePage.homePage[0].topDealsOnElectronics.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                    <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle">Ease Your Daily Chores</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0
                        && homePage.homePage[0].easeYourDailyChores.length > 0 &&
                        homePage.homePage[0].easeYourDailyChores.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                    <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle">Home Makeover</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0
                        && homePage.homePage[0].homeMakeover.length > 0 &&
                        homePage.homePage[0].homeMakeover.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                    <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="headreStyle" >New Launches</div>
                <div style={{display : "flex", overflowX : "auto" }} > 
                    {
                        homePage.homePage.length > 0
                        && homePage.homePage[0].newLaunches.length > 0 &&
                        homePage.homePage[0].newLaunches.map((item, index) => (
                            <div style={{minWidth : "300px"}} key={index} >
                                <div>
                                    <div>
                                    <img style={{ maxHeight: "150px", maxWidth: "200px"}} src={item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                                    </div>
                                </div>
                                <div>
                                    <div>{item.header}</div>
                                    <div>{item.offer}</div>
                                    <div>{item.subHeader}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
             </div>
            }
        </Layout>
    )
}

export default HomePageCreate;
