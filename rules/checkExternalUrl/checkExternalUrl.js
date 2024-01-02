const verifyUrl = () => {};

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce external URL to not be translated.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    // console.log("context", context);
    const checkUrl = (node) => {
      if (node.openingElement?.name?.name === 'a') {
        console.log('node is a link', node.openingElement.attributes)
        node.openingElement.attributes
          .filter((attribute) => attribute.name.name === 'href')
          .forEach((href) => {
            const isExternalUrl = new RegExp('^https?://').test(
              href.value.value,
            )

            if (isExternalUrl) {
              console.log('href is external', href.value.value)
              context.report({
                node,
                message: `External URL found ("${href.value.value}")`,
              })
            }
          })
        return
      }
      if (node.children) {
        node.children.forEach((child) => {
          checkUrl(child)
        })
      }
    }
    return {
      // Performs action in the function on every variable declarator
      VariableDeclarator(node) {
        if (
          node.type === 'VariableDeclarator' &&
          node.init?.type === 'ArrowFunctionExpression'
        ) {
          const componentBodyRoot = node.init.body.body[0].argument
          componentBodyRoot?.children.forEach((child) => {
            checkUrl(child)
          })
        }
      },
    }
  },
};
