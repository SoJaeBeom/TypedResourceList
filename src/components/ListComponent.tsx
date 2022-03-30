import { TypedIcon } from "typed-design-system";
import { jsx } from '@emotion/react'

export default function ListComponent() {
  return (
    <div className="list__container">
      
      <div className="btn_container">
        <button className="url_add_button"
          onClick={clickAdd}>URL 추가</button>

        <button className="image_add_button"
          onClick={clickAdd}>이미지 추가</button>
      </div>

      <div className="list_item">
        <div className="edit_container">
          <input className="edit"/>
        </div>
        
        <div onClick={clickEdit}>
          <TypedIcon icon="edit_small" className="icon_edit" />
        </div>

        <div onClick={clickEdit}>
          <TypedIcon icon="trash_small" className="icon_trash" />
        </div>
        
      </div>

    </div>
  )
  function clickAdd() {
    console.log("clickAdd");
  }

  function clickEdit() {
    console.log("clickEdit");

  }
}
