const React = require("react");
const { Link } = require('@resultadosdigitais/tangram-components')

const StyledLink = styled(Link)`
  color: red;
`

function correctFooBar() {
  const foo = 'bar'
}

function incorrectFoo() {
  const foo = 'baz' // Problem!
}

const MySampleComponent = () => {
  return (
    <>
      <StyledLink href='http://action'>Google</StyledLink>
      <Link href='/action'>Google</Link>
      <Link href='http://google.com'>Google</Link>
    </>
  )
}

module.exports = MySampleComponent;
