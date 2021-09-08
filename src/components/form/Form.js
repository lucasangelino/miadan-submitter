import React from "react";

const Form = () => {
  return (
    <>
      <h1>Maidan Submitter</h1>
      <div className="form">
        <div className="form-title field-border">
          <input
            className="form-title-input"
            type="text"
            placeholder="Titulo de Articulo"
          />
        </div>
        <div className="form-summary field-border">
          <textarea
            className="form-summary-textarea"
            type="text"
            placeholder="Resumen"
          />
        </div>
        <div className="form-tags field-border">Tags</div>
        <div className="form-content field-border">
          <textarea
            className="form-content-textarea"
            type="text"
            placeholder="Contenido MARKDOWN"
          />
        </div>
        <div className="form-author field-border">
          <input
            className="form-author-input"
            type="text"
            placeholder="Creador"
          />
        </div>
        <div className="form-submit field-border">
          <button className="form-submit-button disabled"></button>
        </div>
      </div>

      {/* <form>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author_Input"
            aria-describedby="authorHelp"
            placeholder="Enter author"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">title</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
    </>
  );
};

export default Form;
