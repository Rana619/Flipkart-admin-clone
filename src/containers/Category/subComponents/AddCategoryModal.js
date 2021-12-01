import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Input from '../../../components/UI/Input';
import NewModal from '../../../components/UI/Modal';

function AddCategoryModal(props) {

    const {
        show,
        handleClose,
        modalTitle,
        categoryName,
        setCategoryName,
        parentCategoryId,
        setParentCategoryId,
        categoryList,
        handleCategoryImage,
        onSubmit
    } = props;
 
    return (
        <NewModal
            show={show}
            handleClose={handleClose}
            modalTitle={modalTitle}
            onSubmit={onSubmit}
        >
            <Row>
                <Col>
                    <Input
                        placeholder="Category Name"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                </Col>
                <Col>
                    <Input 
                         type="select"
                         value={parentCategoryId}
                         onChange={(event) => setParentCategoryId(event.target.value)}
                         options={categoryList}
                         placeholder="select category"
                     />
                </Col>
            </Row>
            <Row>
              <Col style={{ marginTop : "10px" }} >
                 <input type="file" name="categoryImage" onChange={handleCategoryImage} />
              </Col>
            </Row>     
        </NewModal>
    );
}

export default AddCategoryModal;
