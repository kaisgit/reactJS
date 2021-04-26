import React, { useContext } from "react";

const blogInfo = {
  React: {
    post: "Learn React useContext Hooks",
    author: "John Doe"
  },
  Nodejs: {
    post: "Learn Nodejs",
    author: "Mary Doe"
  }
};

const blogInfoContext = React.createContext(blogInfo);

function ParentComponent() {
  return (
    <blogInfoContext.Provider value={blogInfo}>
      <BlogDetailComponent />
      <MyOtherBlogInfoComponent />
    </blogInfoContext.Provider>
  );
}

function BlogDetailComponent() {
  const blogDetails = useContext(blogInfoContext);

  return (
    <div>
      <h5>React</h5>
      <ul>
			<li>Topic: {blogDetails.React.post}</li>
         <li>Author: {blogDetails.React.author}</li>
		</ul>
    </div>
  );
}

function MyOtherBlogInfoComponent() {
  const blogDetails = useContext(blogInfoContext);

  return (
    <div>
      <h5>Nodejs</h5>
      <ul>
			<li>Topic: {blogDetails.Nodejs.post}</li>
			<li>Author: {blogDetails.Nodejs.author}</li>
		</ul>
    </div>
  );
}

export default ParentComponent;
