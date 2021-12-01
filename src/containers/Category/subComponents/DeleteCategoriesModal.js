import React from 'react'
import NewModal from '../../../components/UI/Modal';

function DeleteCategoriesModal(props){

    const {
        deleteCategoryModal,
        setDeleteCategoryModal,
        deleteCategories,
        expandedArray,
        checkedArray
    } = props

    return(
          <NewModal
           show={deleteCategoryModal}
           handleClose={()=> setDeleteCategoryModal(false)}
           modalTitle='Confirm'
           buttons ={[
               {
                   label : 'No',
                   color : 'primary',
                   onClick : () => {
                    setDeleteCategoryModal(false)
                   }
               },
               {
                   label : 'Yes',
                   color : 'danger',
                   onClick : deleteCategories
               }
           ]}
          >
              <h5>Checked</h5>
              {
                   checkedArray.map((item, index) => 
                   <ul key={index} >
                       <li>{item.name}</li>
                   </ul>
                  )
              }
          </NewModal>
       );
   }

export default DeleteCategoriesModal;
