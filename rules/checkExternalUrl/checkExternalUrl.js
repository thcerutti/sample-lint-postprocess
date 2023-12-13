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
      if (node.openingElement?.name?.name === "a") {
        console.log("node is a link", node.openingElement.attributes);
        node.openingElement.attributes.filter(attribute => attribute.name.name === "href").forEach(href => {
          const isExternalUrl = new RegExp("^https?://").test(href.value.value);

          if (isExternalUrl) {
            console.log("href is external", href.value.value)
          }
        });
        return;
      }
      if (node.children) {
        node.children.forEach((child) => {
          checkUrl(child);
        });
      }
    };
    return {
      // Performs action in the function on every variable declarator
      VariableDeclarator(node) {
        if (
          node.type === "VariableDeclarator" &&
          node.init.type === "ArrowFunctionExpression"
        ) {
          // console.log("node-init-body[0]-argument", node.init.body.body[0].argument);
          // node.init.body.body[0].argument -> arrow function do componente
          const componentBodyRoot = node.init.body.body[0].argument;
          // console.log("componentBodyRoot", componentBodyRoot);

          // console.log(componentBodyRoot.children);
          componentBodyRoot.children.forEach((child) => {
            checkUrl(child);
          })

          // if (node.id.name === "MySampleComponent") {
          // console.log(
          //   "node",
          // console.log(node.init.body.body[0].argument.children[1].openingElement
          //   .attributes[0].value.raw);
          // );
          // }
          context.report({
            node,
            message: "url validation called",
            // data: {
            //   notBar: node.init.value,
            // },
            // fix(fixer) {
            //   return fixer.replaceText(node.init, '"bar"');
            // },
          });

          // if (node.parent.kind === "const") {
          //   if (node.id.type === "Identifier" && node.id.name === "foo") {
          //     if (
          //       node.init &&
          //       node.init.type === "Literal" &&
          //       node.init.value !== "bar"
          //     ) {
          //       context.report({
          //         node,
          //         message:
          //           'Value other than "bar" assigned to `const foo`. Unexpected value: {{ notBar }}.',
          //         data: {
          //           notBar: node.init.value,
          //         },
          //         fix(fixer) {
          //           return fixer.replaceText(node.init, '"bar"');
          //         },
          //       });
          //     }
          //   }
          // }
        }
      },
    };
  },
};
