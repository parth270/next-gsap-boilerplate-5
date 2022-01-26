import React from "react";
import classes from "./BlockQuote.module.css";
import Highlight, { defaultProps } from "prism-react-renderer";
import CopyToClipboard from "react-copy-to-clipboard";

const BlockQuote = (props) => {

    const [copy,setCopy]=React.useState(false);

    React.useEffect(()=>{
        if(copy){
            setTimeout(()=>{
                setCopy(false);
            },2000);
        }
    },[copy])

    const copyHandler=()=>{
        setCopy(true);
    }

  return (
    <Highlight {...defaultProps} code={props.content} language="jsx">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <>
          <pre
            className={`${classes.container} ${props.className}`}
            style={{ margin: props?.margin, ...props.style, ...style }}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
          <CopyToClipboard text={props.content} onCopy={copyHandler} >
          <button className={!copy?classes.btn:classes.copied} >
            {copy?(<>
                <i className="fas fa-check-circle"/>
                <span>copied!!</span>
            </>):"copy code"}
          </button>
          </CopyToClipboard>
        </>
      )}
    </Highlight>
  );
};

export default BlockQuote;