import filesTemplate from "./apps/react-shadcnui/files-template";

<Sandpack
  files={{
    "/App.tsx": `import { Button, Tag } from "@internals/ds";
 
export default function Sample() {
  return (
    <>
      <Button type="primary">Button1</Button>
      <Button type="secondary">Button2</Button>
      <Tag>Tag</Tag>
    </>
  );
}
`,
    "/node_modules/@internals/design-system/package.json": {
      hidden: true,
      code: JSON.stringify({
        name: "@design-system",
        main: "./index.js",
      }),
    },
    "/node_modules/@internals/design-system/index.js": {
      hidden: true,
      code: designSystemRaw,
    },
  }}
  template="react-vite"
/>