function babelPluginAddDataId({ types: t }) {
  let id = 0;

  return {
    visitor: {
      JSXOpeningElement(path) {
        path.node.attributes.push(
          t.jsxAttribute(
            t.jsxIdentifier('data-id'),
            t.stringLiteral(`${id++}`)
          )
        );
      }
    }
  };
}

module.exports = babelPluginAddDataId;
