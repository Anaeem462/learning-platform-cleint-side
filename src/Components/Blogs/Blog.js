import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="my-3 mx-4 border border-warning rounded p-4">
        <h2 className="text-primary ">What is Cors?</h2>
        <hr />
        <p>
          Answer: Cors is a package for server. That have a lot of object . Cors
          mainly works for port of server. its serve data in another port. so
          that we can easily find data of another server port .
        </p>
      </div>
      <div className="my-3 mx-4 border border-warning rounded p-4">
        <h2 className="text-primary ">
          Why are you using Firebase? What other options do you have to
          implement authentication?
        </h2>
        <hr />
        <p>
          firebase is a authentication server of google. we can easily
          authenticate user by facebook,google,gitub and email & password etc.
          its also provide host . where we can store data . we have other
          options for authentication like firebase .
        </p>
      </div>
      <div className="my-3 mx-4 border border-warning rounded p-4">
        <h2 className="text-primary ">How does the private route work?</h2>
        <hr />
        <p>
          Private route usally use when a route or component doesnt freely use a
          user without authenticate. probably its use when need information of a
          user and those information helps to this route or components . its
          like a locker system.when a user permitted then user can use those
          routes or components
        </p>
      </div>
      <div className="my-3 mx-4 border border-warning rounded p-4">
        <h2 className="text-primary ">What is Node? How does node work</h2>
        <hr />
        <p>
          Node allows developers to write JavaScript code that runs directly in
          a computer process itself instead of in a browser. Node can,
          therefore, be used to write server-side applications with access to
          the operating system, file system, and everything else required to
          build fully-functional applications. Node.js is written in C, C++, and
          JavaScript, and it is built on the open-source V8 JavaScript engine
          which also powers JS in browsers such as Google Chrome. As V8 supports
          new features in JavaScript, they are incorporated into Node.
        </p>
      </div>
    </div>
  );
};

export default Blog;
