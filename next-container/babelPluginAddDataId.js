function babelPluginAddDataId({ types: t }) {
  let id = 0;

  return {
    visitor: {
      JSXOpeningElement(path, state) {
        // 获取文件路径
        const filePath = state.file.opts.filename;
        // 如果文件路径为 Component.tsx，则添加 data-id 属性
        if (filePath.endsWith('Component.tsx')) {
          path.node.attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier('data-id'),
              t.stringLiteral(`${id++}`)
            )
          );
        }
      }
    }
  };
}

module.exports = babelPluginAddDataId;
