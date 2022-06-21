import React from "react";
import "./singlePost.scss";
import image from "./assets/cat.jpg";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const SinglePost = () => {
  return (
    <>
      <div className="single-post">
        <div className="wrapper">
          <img src={image} alt="/" className="image" />
          <h1>
            Lorem ipsur dolor sit amet
            <div className="edit-btns">
              <FiEdit className="icon" />
              <BsTrash className="icon" />
            </div>
          </h1>
          <div className="post-info">
            <span>
              Author: <span>Lanny</span>
            </span>
            <span>1 hr ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            tellus orci ac auctor augue mauris augue neque. Nec dui nunc mattis
            enim ut. Eget lorem dolor sed viverra ipsum. Facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum. Arcu risus
            quis varius quam quisque id diam. Ut placerat orci nulla
            pellentesque dignissim enim. Vestibulum lorem sed risus ultricies
            tristique nulla aliquet enim. Condimentum id venenatis a
            condimentum. Interdum velit laoreet id donec ultrices tincidunt.
            Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.
            Diam volutpat commodo sed egestas egestas fringilla phasellus.
            Dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
            Viverra aliquet eget sit amet tellus cras adipiscing.
            {""} {""} <br /> <br />
            Nec feugiat nisl pretium fusce id velit ut tortor pretium. Quis
            viverra nibh cras pulvinar. Volutpat est velit egestas dui id ornare
            arcu. A lacus vestibulum sed arcu non. Leo in vitae turpis massa sed
            elementum. Nam aliquam sem et tortor consequat id porta nibh
            venenatis. Et netus et malesuada fames ac turpis egestas. Amet
            cursus sit amet dictum sit amet justo donec. Faucibus a pellentesque
            sit amet porttitor. Ac felis donec et odio pellentesque.
            Pellentesque sit amet porttitor eget.
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
