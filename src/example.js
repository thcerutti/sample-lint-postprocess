const React = require("react");
const { Link } = require('@resultadosdigitais/tangram-components')

const StyledLink = styled(Link)`
  color: red;
`

const MySampleComponent = () => {
  return (
    <>
      <StyledLink href='http://action'>Google</StyledLink>
      <Link href='/action'>Internal link</Link>
      <Link href='http://google.com'>Google</Link>
    </>
  )
}

module.exports = MySampleComponent;
