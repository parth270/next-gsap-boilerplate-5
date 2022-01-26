import React from "react";
import H1 from "../../components/Fonts/H1/H1";
import H2 from "../../components/Fonts/H2/H2";
import H3 from "../../components/Fonts/H3/H3";
import P from "../../components/Fonts/P/P";
import BlockQuote from "../../components/BlockQuote/BlockQuote";

const Demo = () => {

  return (
    <>
      <H1 margin="0 0 20px 0">About This System</H1>
      <H2 margin="50px 0 40px 0" padding="0 0 15px 0" Hr={true}>
        More about this project
      </H2>
      <P>
        Paragraph 1 will g here and explain one. Graph 1 will g here and explain
        one or two things. Paragraph 1 will g here and explain one or two
        things. Will g here and explain one or two things. Paragraph 1 will g
        here and explain one or two things. Paragraph 1 will g here and explain
        one. Graph 1 will g here and explain one or two things. Paragraph 1 will
        g here and explain one or two things. Will g here and explain one or two
        things. Paragraph 1 will g here and explain one or Paragraph 1 will g
        here and explain one. Graph 1 will g here and explain one or two things.
        Paragraph 1 will g here and explain one or two things. Will g here and
        explain one or two things. Paragraph 1 will g here and explain one or
        two things. Paragraph 1 will g here and explain one. Graph 1 will g here
        and explain oneParagraph 1.
      </P>
      <H3 margin="20px 0">Demo</H3>
      <P>
        Paragraph 1 will g here and explain one. Graph 1 will g here and explain
        one or two things. Paragraph 1 will g here and explain one or two
        things. Will g here and explain one or two things. Paragraph 1 will g
        here and explain one or two things. Paragraph 1 will g here and explain
        one. Graph 1 will g here and explain one or two things. Paragraph 1 will
        g here and explain one or two things. Will g here and explain one or two
        things. Paragraph 1 will g here and explain one or Paragraph 1 will g
        here and explain one. Graph 1 will g here and explain one or two things.
        Paragraph 1 will g here and explain one or two things. Will g here and
        explain one or two things. Paragraph 1 will g here and explain one or
        two things. Paragraph 1 will g here and explain one. Graph 1 will g here
        and explain oneParagraph 1.
      </P>
      <BlockQuote 

        margin="40px 0 0 0"

        content={`export default { 
    components:{
      GlEmptyState,
      GlSprintf,
      GlLink,
      GlButton,
    }
} `}
      />
    </>
  );
};

export default Demo;