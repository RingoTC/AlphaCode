import { CodeBlock, a11yLight } from 'react-code-blocks';

export default function MyCoolCodeBlock({ code, language, showLineNumbers }:{
    code: string,
    language: string,
    showLineNumbers: boolean
}) {
  return (
    <CodeBlock
      text={code}
      customStyle={{
        height: '80vh',
        overflow: 'scroll',
      }}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={a11yLight}
    />
  );
}