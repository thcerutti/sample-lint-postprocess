const React = require("react");

function correctFooBar() {
  const foo = "bar";
}

function incorrectFoo(){
  const foo = "baz"; // Problem!
}

const MySampleComponent = () => {
  return (
    <>
      <a href='http://action'>Google</a>
    </>
  )
};

module.exports = MySampleComponent;
