import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { 
    addCategory, 
    getAllCategory, 
    updateCategories,
    deleteCategories as deleteCategoriesAction
 } from '../../actions';
import CheckboxTree from 'react-checkbox-tree';
import {
    IoIosCheckbox,
    IoMdSquareOutline,
    IoIosCheckboxOutline,
    IoIosArrowForward,
    IoIosArrowDown,
    IoIosTrash,
    IoIosCloudUpload,
    IoIosAdd,
} from "react-icons/io";
import {
    FcFolder,
    FcOpenedFolder,
    FcFile
} from "react-icons/fc";


import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import UpdateCategoriesModal from './subComponents/UpdateCategoriesModal';
import AddCategoryModal from './subComponents/AddCategoryModal';
import DeleteCategoriesModal from './subComponents/DeleteCategoriesModal';

function Category() {

    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [upDatecategoryModal, setUpdateCategoryModal] = useState(false);
    const [expandedArray, setExpandedArray] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
    const dispatch = useDispatch();

    //to disable the modal after the category added
    useEffect(()=>{
       if(!category.loading){
           setShow(false);
           setUpdateCategoryModal(false);
           setDeleteCategoryModal(false)
       }
    }, [category.loading])


    const handleClose = () => {
        const form = new FormData();
        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));
        setCategoryName('');
        setParentCategoryId('');

        // setShow(false);
    }
    const handleShow = () => setShow(true);

    function renderCategories(categories) {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && renderCategories(category.children)
                }
            );
        }
        return myCategories;
    }

    function createCategoryList(categories, options = []) {

        for (let category of categories) {
            options.push({ 
                value: category._id, 
                name: category.name, 
                parentId: category.parentId,
                type : category.type
             });
            if (category.children.length > 0) {
                createCategoryList(category.children, options);
            }
        }
        return options;
    }

    function handleCategoryImage(event) {
        setCategoryImage(event.target.files[0]);
    }

    function updateCategory() {
        setUpdateCategoryModal(true);
        checkedAndExpendedCategories()
    }

    function checkedAndExpendedCategories(){
        const categories = createCategoryList(category.categories);
        const checkedArray = [];
        const expandedArray = [];
        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value)
            category && checkedArray.push(category);
        })

        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value)
            category && expandedArray.push(category);
        })

        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);
    }

    function handleCategoryInput(key, value, index, type) {
        if (type == "checked") {
            const updatedCheckedArray = checkedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item)
            setCheckedArray(updatedCheckedArray);
        } else if (type == "expanded") {
            const updatedexpanedArray = expandedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item)
            setExpandedArray(updatedexpanedArray);
        }
    }

    function updateCategoriesForm(){

        const form = new FormData();

        expandedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('type', item.type);
            form.append('parentId', item.parentId ? item.parentId : '' );
        })

        checkedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('type', item.type);
            form.append('parentId', item.parentId ? item.parentId : '' );
        })
        dispatch(updateCategories(form));
    }



    function deleteCategory(){
        checkedAndExpendedCategories()
        setDeleteCategoryModal(true)
    }
 
    function deleteCategories(){
        const checkedIdsArray = checkedArray.map((item, index) => ({_id : item.value}));     
        if(checkedIdsArray.length > 0){
            dispatch(deleteCategoriesAction(checkedIdsArray))
        }
    }

    return (
        <Layout sidebar >
            <Container>
                <Row>
                    <Col md={12} >
                        <div className="categoryCont" >
                            <h3>Categories</h3>
                            <div className="actionBtn" >
                               <button onClick={handleShow} ><IoIosAdd /><span>Add</span></button>
                               <button onClick={deleteCategory} ><IoIosTrash /><span>Delete</span></button>
                               <button onClick={updateCategory} ><IoIosCloudUpload/><span>Edit</span></button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} >
                        {/* <ul>
                            {renderCategories(category.categories)}
                        </ul> */}
                        <CheckboxTree
                            nodes={renderCategories(category.categories)}
                            checked={checked}
                            expanded={expanded}
                            onCheck={checked => setChecked(checked)}
                            onExpand={expanded => setExpanded(expanded)}
                            icons={{
                                check: <IoIosCheckbox />,
                                uncheck: <IoMdSquareOutline />,
                                halfCheck: <IoIosCheckboxOutline />,
                                expandClose: <IoIosArrowForward />,
                                expandOpen: <IoIosArrowDown />,
                                parentClose: <FcFolder />,
                                parentOpen: <FcOpenedFolder />,
                                leaf: <FcFile />,
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <AddCategoryModal
              show={show}
              handleClose={()=>setShow(false) }
              onSubmit={handleClose}
              modalTitle='Add New Category'
              categoryName={categoryName}
              setCategoryName={setCategoryName}
              parentCategoryId={parentCategoryId}
              setParentCategoryId={setParentCategoryId}
              categoryList={createCategoryList(category.categories)}
              handleCategoryImage={handleCategoryImage}
            />
            <UpdateCategoriesModal 
                show={upDatecategoryModal}
                handleClose={() => setUpdateCategoryModal(false) }
                onSubmit={ updateCategoriesForm }
                modalTitle={'Update Category'}
                size='lg'
                expandedArray = {expandedArray}
                checkedArray = {checkedArray}
                handleCategoryInput = {handleCategoryInput}
                categoryList = {createCategoryList(category.categories)}
            />
            <DeleteCategoriesModal 
                deleteCategoryModal={deleteCategoryModal}
                setDeleteCategoryModal={setDeleteCategoryModal}
                deleteCategories={deleteCategories}
                expandedArray={expandedArray}
                checkedArray={checkedArray}
            />
           
        </Layout>
    )
}

export default Category
