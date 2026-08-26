import Markdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

type MarkdownProps = {
  markdown: string & { content?: string };
};

const CustomMarkdown = ({markdown}: MarkdownProps)  => (
  <Markdown
    children={markdown}
    components={{
      code(props) {
        const {children, className, node, ref, ...rest} = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={oneDark}
            showLineNumbers
          />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        )
      }
    }}
  />
)

export default CustomMarkdown;