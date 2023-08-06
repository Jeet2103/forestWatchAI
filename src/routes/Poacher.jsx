import React from "react";


function Poacher(){
    return (
    <>
    <h1>POACHER DETECTION</h1>
    <h2>IMAGE UPLOAD</h2>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="image" id="imageInput" accept="image/*" />
      <button type="submit">Upload Image</button>
    </form>
    </>
    );
}

export default Poacher;