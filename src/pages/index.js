import "./styles.css";
import React, { useState, useEffect } from "react";
import { Typography, Container, Grid, CssBaseline } from "@mui/material";
import Cardtemplate from "./components/Cardtemplate.js";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "gatsby";

export default function IndexPage() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <main>
      <title>My Twitter Bookmarks</title>
      <div className="App">
      <CssBaseline />

      {/*----------------------- header --------------------------*/}
      <section className="section header">
        <Container maxwidth="xl">
          <div className="header">
            <h1>Hello! I store my twitter bookmarks here!</h1>
            <h2>They are categorized accordingly</h2>
            <h3>For more please visit my onodin <Link to="https://onodin.com/tibia-the-dog"> here</Link>
            </h3>
          </div>
        </Container>
      </section>
      {/*----------------------- end of header --------------------------*/}

      {/*----------------------- Body of page --------------------------*/}
      <section className="section body">
        <Container maxwidth="xl">
          {/*----------------------- Coding resources --------------------------*/}
          <div className="bookmarkCat">
            <Accordion className="accordion01">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>Coding resources</h3>
              </AccordionSummary>

              <AccordionDetails>
                {/*sample accordion*/}
                <Accordion className="accordion02">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4>title</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Grid container spacing={5}>
                        {/*
                        <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                       */}
                      </Grid>
                  </AccordionDetails>
                </Accordion>
                
                {/*project ideas*/}
                <Accordion className="accordion02">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4>project ideas</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Grid container spacing={5}>
                        {/*
                        <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                       */}
                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/profile_banners/1668100142/1423791803/1500x500"
                            srcImage="https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg"
                            title="Build react code editor that compiles and excutes in 40+ languages"
                            description="tutorial that helps practice your react skills. Good project idea."
                            tweetLink="https://twitter.com/freeCodeCamp/status/1546449473722880001?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                            srcImage="https://pbs.twimg.com/profile_images/1435853099600474117/rjDQ_RSZ_400x400.jpg"
                            title="project ideas"
                            description="some free html/css projects from Mohammed Junaid"
                            tweetLink="https://twitter.com/mdjunaidap/status/1473871417867333634?s=20"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                            srcImage="https://pbs.twimg.com/profile_images/1435318001478389762/We05XU63_400x400.jpg"
                            title="neat app to look at"
                            description="by @KassandraSanch. html and css"
                            tweetLink="https://twitter.com/KassandraSanch/status/1459925798413025288?s=20"
                          />
                        </Grid>
                      </Grid>
                  </AccordionDetails>
                </Accordion>
                
                {/**job things */}
                <Accordion className="accordion02">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4>job things</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Grid container spacing={5}>
                        {/*
                        <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                       */}
                          <Grid item xl={3} md={4} sm={6}>
                            <Cardtemplate
                              bgImgURL="https://pbs.twimg.com/profile_banners/202982523/1589663754/1500x500"
                              srcImage="https://pbs.twimg.com/profile_images/1308385514744098816/oDXuaci__400x400.jpg"
                              title="sites for remote jobs from denicmarko on twitter"
                              description="good ref for jobbies"
                              tweetLink="https://twitter.com/denicmarko/status/1544985512317968384?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                            />
                          </Grid>
                      </Grid>
                  </AccordionDetails>
                </Accordion>

                <Grid container spacing={5}>
                  {/*
                    <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                   */}

                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://pbs.twimg.com/media/FXUvbpSVUAUIXvg?format=png&name=small"
                      srcImage="https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg"
                      title="to do tree extension from sarah_edo"
                      description="helps in vs code projects apparently. seems neat. there's a marketplace link if interested."
                      tweetLink="https://twitter.com/sarah_edo/status/1546194311972212736?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                    />
                  </Grid>

                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://pbs.twimg.com/media/FXtti1fUIAMwDH_?format=jpg&name=small"
                      srcImage="https://pbs.twimg.com/profile_images/1542520452999815169/mHs_cQZj_400x400.jpg"
                      title="what is http?"
                      desc="explains http in comic form. by rapidAPI"
                      tweetLink="https://twitter.com/Rapid_API/status/1547951386750361603?s=20&t=_uAP96mj810AzmSbfd2xZQ"
                    />
                  </Grid>
                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg"
                      title="automate your life with python"
                      description="automating different tasks with python"
                      tweetLink="https://twitter.com/freeCodeCamp/status/1549062072469753856?s=20&t=_uAP96mj810AzmSbfd2xZQ"
                    />
                  </Grid>
                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg"
                      title="guide to REST APIs in react"
                      description="noob proof allegedly"
                      tweetLink="https://twitter.com/freeCodeCamp/status/1549046730733170688?s=20&t=_uAP96mj810AzmSbfd2xZQ"
                    />
                  </Grid>
                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1474033070323896323/OxmVHLRD_400x400.jpg"
                      title="Free web design e-books"
                      description="twitter thread of free e-books"
                      tweetLink="https://twitter.com/designerSaha/status/1480449836503617540?s=20"
                    />
                  </Grid>
                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1451917571633025033/COe3aQAb_400x400.jpg"
                      title="learning js"
                      description="websites to help in learning javascript"
                      tweetLink="https://twitter.com/swastika0015/status/1478962049170518018?s=20"
                    />
                  </Grid>
                  
                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1471847814422568965/zQG2Lrkv_400x400.jpg"
                      title="css generators"
                      description="help if you don't want to do all the shit from scratch"
                      tweetLink="https://twitter.com/saviomartin7/status/1472808997820383234?s=20"
                    />
                  </Grid>
                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1476905990855475205/VskPkdVv_400x400.png"
                      title="front end roadmap/resources i guess"
                      description="by @VittoStack"
                      tweetLink="https://twitter.com/VittoStack/status/1481663360932397058?s=20"
                    />
                  </Grid>
                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1470433738509144065/BQWuj37q_400x400.jpg"
                      title="techincal writing resources thread"
                      description="from @The_GreatBonnie"
                      tweetLink="https://twitter.com/The_GreatBonnie/status/1472265694121283594?s=20"
                    />
                  </Grid>
                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1478684780506095618/hu4F5xbT_400x400.jpg"
                      title="react focus suggestions"
                      description="to help study and practice on react and js"
                      tweetLink="https://twitter.com/SergiiKirianov/status/1460536412638429189?s=20"
                    />
                  </Grid>
                   <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1471847814422568965/zQG2Lrkv_400x400.jpg"
                      title="some front end resources"
                      description="by @saviomartin7"
                      tweetLink="https://twitter.com/saviomartin7/status/1460179738010468355?s=20"
                    />
                  </Grid>
                   
                   <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1454861068233228289/6sn9BYOf_400x400.jpg"
                      title="different ways to sell html templates"
                      description="will have to learn to make these first"
                      tweetLink="https://twitter.com/csaba_kissi/status/1460144689521250304?s=20"
                    />
                  </Grid>
                   <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                      srcImage="https://pbs.twimg.com/profile_images/1455707950341890051/flRfKMOq_400x400.jpg"
                      title="roadmap for web dev"
                      description="useful to look at when planning"
                      tweetLink="https://twitter.com/nachoiacovino/status/1459966797831102468?s=20"
                    />
                  </Grid>
                </Grid>
                {/*----------------------- end of grid container --------------------------*/}
              </AccordionDetails>
            </Accordion>
          </div>
          {/*----------------------- end of coding resources --------------------------*/}

          {/*----------------------- cool art --------------------------*/}
          <div className="bookmarkCat">
            <Accordion className="accordion01">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>Cool art</h3>
              </AccordionSummary>

              <AccordionDetails>

                {/*design */}
                <Accordion className="accordion02">
                   <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4>Design</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={5}>
                       {/*
                          <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                        */}
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FVJ7T56XwAEJSIQ?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1518033995723857924/yTMY1pJs_400x400.jpg"
                          title="cornflower blue wren by nepeteaa"
                          description="cool bird design. would look cool on a shirt"
                          tweetLink="https://twitter.com/nepeteaa/status/1536426007862951939?s=20&t=NrOtJI3xykXon934WLhAog"
                        />
                      </Grid>

                    </Grid>
                  </AccordionDetails>
                </Accordion>
                {/*---end of design--*/}

                <Accordion className="accordion02">
                  {/*----------------------- background --------------------------*/}
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4>Backgrounds</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={5}>
                      {/*
                        <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                       */}
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FXZ6Ss0UYAEk7pK?format=jpg&name=4096x4096"
                          srcImage="https://pbs.twimg.com/profile_images/1456415894846857220/sinG6Xzw_400x400.jpg"
                          title="noon and rain bg by britneythoreson on twitter"
                          description="really awesome bg and lighting paintings."
                          tweetLink="https://twitter.com/britneythoreson/status/1546558292410765312?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                        />
                      </Grid>

                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FXegIMyXgAIr1Wl?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1293043408492265472/z1LxSc-d_400x400.jpg"
                          title="portfolio by vis dev adel_sabi on twitter"
                          description="cool backgrounds. looks like stylized photos."
                          tweetLink="https://twitter.com/adel_sabi/status/1546884099360673795?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                        />
                      </Grid>

                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FXe-ANkaIAALQ-9?format=jpg&name=4096x4096"
                          srcImage="https://pbs.twimg.com/profile_images/1546913336394403841/VtPix_VW_400x400.jpg"
                          title="portfolio by bg designer kyurichodraws on twitter"
                          description="black and white. detailed. very cool"
                          tweetLink="https://twitter.com/kyurichodraws/status/1546914137418387456?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                        />
                      </Grid>

                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FIa1FSpXIAcaOSw?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1345650468509331456/PBymlVbc_400x400.png"
                          title="cool backgrounds"
                          description="by @ani_obsessive"
                          tweetLink="https://twitter.com/ani_obsessive/status/1479068915586191360?s=20"
                        />
                      </Grid>

                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FIUbF7wVcAAvcVr?format=jpg&name=4096x4096"
                          srcImage="https://pbs.twimg.com/profile_images/1090888684973355013/g1TQnuLP_400x400.jpg"
                          title="Pretty car"
                          description="cool bg painting by @glendalesidiot"
                          tweetLink="https://twitter.com/glendalesidiot/status/1478618432564125697?s=20"
                        />
                      </Grid>

                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FH-UhiEVkAAuZjp?format=jpg&name=medium"
                          srcImage="https://pbs.twimg.com/profile_images/1105971791309111297/UlOjsM-a_400x400.png"
                          title="Tigers"
                          description="some cool tiger paintings and stuff"
                          tweetLink="https://twitter.com/nkim_illustrate/status/1477062508229783556?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FIQlzlAX0AIYPAE?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1345650468509331456/PBymlVbc_400x400.png"
                          title="concept art for Beauty and the Beast"
                          description="by Hans Bacher for the 1991 movie"
                          tweetLink="https://twitter.com/ani_obsessive/status/1478348251518709769?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FIRfXwpWQAUNb9j?format=jpg&name=4096x4096"
                          srcImage="https://pbs.twimg.com/profile_images/1341260101332725761/sMzt-U_z_400x400.jpg"
                          title="Bathroom for we baby bears"
                          description="painting by Nessa Tweneboah"
                          tweetLink="https://twitter.com/Thepotenpro/status/1478417470428000258?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FJAM2jXUYAEExO0?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1455479183346257924/wRoBZk2U_400x400.jpg"
                          title="bg paint by @crimsolynn"
                          description="mapcrunch study. so pretty"
                          tweetLink="https://twitter.com/crimsolynn/status/1481698410939904000?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                        bgImgURL="https://pbs.twimg.com/media/FI9WsgAVgAQSrhk?format=jpg&name=large"
                        srcImage="https://pbs.twimg.com/profile_images/1364019383354290178/5-mHH45K_400x400.jpg"
                        title="bg done for @webabybears"
                        description="done by @Tina_Draws. so amazing"
                        tweetLink="https://twitter.com/Tina_Draws/status/1481498133288734722?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FI7Y4ydX0A41V0j?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1379782101168496642/e-ah_NV7_400x400.jpg"
                          title="portfolio from @jstuffdesigns"
                          description="alot of architecture and environment stuff"
                          tweetLink="https://twitter.com/jtuffdesigns/status/1481361114571153408?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FHEWkKdXwAEJDFA?format=jpg&name=medium"
                          srcImage="https://pbs.twimg.com/profile_images/1467905105756311564/TtWy-c9b_400x400.jpg"
                          title="winter castle"
                          description="by @maxinevee. so pretty"
                          tweetLink="https://twitter.com/maxinevee/status/1472983447320805387?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FXfCQlOX0Ac2viq?format=jpg&name=4096x4096"
                          srcImage="https://pbs.twimg.com/profile_images/1546962750907318274/RBGUjj-Y_400x400.jpg"
                          title="portfolio of cool bg artist"
                          description="cool bg from ajadeite on twitter. Beatiful style for bg work"
                          tweetLink="https://twitter.com/ajadeite/status/1546957959032340482?s=20&t=_uAP96mj810AzmSbfd2xZQ"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                        />
                      </Grid>
                      
                    </Grid>
                  </AccordionDetails>
              </Accordion>
                {/*----------------------- end of background --------------------------*/}
                
                {/*----------------------- characters --------------------------*/}
                <Accordion className="accordion02">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4>Characters</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={5}>
                       {/*
                          <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                        */}
                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FVsj559UAAElWot?format=jpg&name=medium"
                            srcImage="https://pbs.twimg.com/profile_images/682410655652163584/KcvExo0-_400x400.jpg"
                            title="cool comic by tenyais"
                            description="combo of comic pages. characters are Douxie and Zoe. good ref from story artist at disney"
                            tweetLink="https://twitter.com/tenyais/status/1538863181396729858?s=20&t=NrOtJI3xykXon934WLhAog"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FVzmchyXsAAqeap?format=jpg&name=4096x4096"
                            srcImage="https://pbs.twimg.com/profile_images/1458173193034797059/pZdg-Viy_400x400.jpg"
                            title="pride comic by marinscos"
                            description="Mari Costa comic from 2018 thread."
                            tweetLink="https://twitter.com/marinscos/status/1539359216829444096?s=20&t=NrOtJI3xykXon934WLhAog"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FWHQpcjUEAAsTRS?format=jpg&name=large"
                            srcImage="https://pbs.twimg.com/profile_images/1460381553943629830/-HnlS9Pf_400x400.jpg"
                            title="cartoon characters and pride flags by l_issv"
                            description="features bi, trans, unlabelled and lesbian flags. very cute."
                            tweetLink="https://twitter.com/l_issv/status/1540741967071662082?s=20&t=NrOtJI3xykXon934WLhAog"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FWiu3exUIAE4_eF?format=jpg&name=large"
                            srcImage="https://pbs.twimg.com/profile_images/1539441847960862720/NRA7OPYS_400x400.jpg"
                            title="like moth to a flame by DelaneyJanuzzi"
                            description="cool painting. awesome lineless art"
                            tweetLink="https://twitter.com/DelaneyJanuzzi/status/1542675206786801665?s=20&t=NrOtJI3xykXon934WLhAog"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FW8uCZOVUAEyyGN?format=jpg&name=4096x4096"
                            srcImage="https://pbs.twimg.com/profile_images/1513638738064461828/htfkWpVe_400x400.jpg"
                            title="magazine cover for animation by meganroseruiz"
                            description="also a cereal box for a gig for illumination."
                            tweetLink="https://twitter.com/meganroseruiz/status/1544504225673097217?s=20&t=NrOtJI3xykXon934WLhAog"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FWsatmfX0AMKxhG?format=jpg&name=4096x4096"
                            srcImage="https://pbs.twimg.com/profile_images/1518611015696633856/b71nhlNV_400x400.jpg"
                            title="koi the blue oni by suizilla on twitter"
                            description="not sure if fan art, but cool looking anime girl"
                            tweetLink="https://twitter.com/suizilla/status/1543356838405611520?s=20&t=NrOtJI3xykXon934WLhAog"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FW1cATWUUAAh_3b?format=jpg&name=large"
                            srcImage="https://pbs.twimg.com/profile_images/1539441847960862720/NRA7OPYS_400x400.jpg"
                            title="thematic contrast DelaneyJanuzzi on twitter"
                            description="cool paintings on contrast. Super cool looking"
                            tweetLink="https://twitter.com/DelaneyJanuzzi/status/1543991763978711040?s=20&t=NrOtJI3xykXon934WLhAog"
                          />
                        </Grid>
                        
                       <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FXUv3iOWAAEqX8s?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1473747758527963147/wDTiKtQD_400x400.jpg"
                          title="moth man friends by bailey_lawlor on twitter"
                          description="they tried to sleep but made these. So cute."
                          tweetLink="https://twitter.com/bailey_lawlor/status/1546194681964404743?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                        />
                      </Grid>

                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FXadrL_WYAQ6crd?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1351902801325154307/8N8JS0ks_400x400.jpg"
                          title="sauces by vickyisdrawing on twitter"
                          description="familiar sauces. Good for scene dressing. not exactly characters but cool sauces painting"
                          tweetLink="https://twitter.com/vickyisdrawing/status/1546596892083191808?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                        />
                      </Grid>

                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FIiuArkVIAAU6k4?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1443317526788644865/-yz95icp_400x400.jpg"
                          title="Self portrait by @friedbaens"
                          description="cool art with cool textures by twitter artist"
                          tweetLink="https://twitter.com/friedbaens/status/1479623812371009537?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FI3dPqsUUAAj9ES?format=jpg&name=4096x4096"
                          srcImage="https://pbs.twimg.com/profile_images/1245509597202272257/IXgpOwBy_400x400.jpg"
                          title="cute owl friend"
                          description="someone drew their version of cute owl photo. good ref for char design. from @VanillaCherie"
                          tweetLink="https://twitter.com/VanillaCherie/status/1481732793952522249?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FG5ba0OWUAUAR41?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1366547812285100039/SF9OcQ1U_400x400.jpg"
                          title="cool lady painting"
                          description="by @likelihood_art on twitter. I think char's name is Aj"
                          tweetLink="https://twitter.com/likelihood_art/status/1472214649412149252?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FX6GEhwXkAASq_c?format=jpg&name=large"
                          srcImage="https://pbs.twimg.com/profile_images/1535476791904706560/5B9oXXJx_400x400.jpg"
                          title="Our Flag meets death duo"
                          description="The two main dorks being dorks."
                          tweetLink="https://twitter.com/awwlba/status/1548822740144209920?s=20&t=_uAP96mj810AzmSbfd2xZQ"
                        />
                      </Grid>
                       <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                        bgImgURL="https://pbs.twimg.com/media/FXueLyVUsAU_V8h?format=jpg&name=large"
                        srcImage="https://pbs.twimg.com/profile_images/1268776739360002050/pg9-UMBT_400x400.jpg"
                        title="chinese wedding painting"
                        description="30 minute painting  by minjue helen chen"
                        tweetLink="https://twitter.com/MingjueChen/status/1548004824943185920?s=20&t=_uAP96mj810AzmSbfd2xZQ"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FXvDVE4VsAImU8M?format=png&name=900x900"
                          srcImage="https://pbs.twimg.com/profile_images/1543416722828546048/zBXlhtbI_400x400.jpg"
                          title="cat burger"
                          description="by AlwaysAlele on twitter. apparently on microsoft paint. Looks amazing."
                          tweetLink="https://twitter.com/AlwaysAlele/status/1548045895760891909?s=20&t=_uAP96mj810AzmSbfd2xZQ"
                        />
                      </Grid>
                      {/**end of characters* */}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                
                {/*----------------------- end of characters --------------------------*/}
                
                {/*----------------------- fan art --------------------------*/}
                <Accordion className="accordion02">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4>Fan art</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={5}>
                        {/*
                          <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                         */}
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FWo4JH2UYAA-RPv?format=jpg&name=4096x4096"
                          srcImage="https://pbs.twimg.com/profile_images/1513638738064461828/htfkWpVe_400x400.jpg"
                          title="a pokemon video by meganroseruiz"
                          description="dont know the pokemon but cute fan art"
                          tweetLink="https://twitter.com/meganroseruiz/status/1543438808972025856?s=20&t=NrOtJI3xykXon934WLhAog"
                        />
                      </Grid>
                      
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FXXnTJvWQAAhe4t?format=jpg&name=medium"
                          srcImage="https://pbs.twimg.com/profile_images/1544663836887744515/ggQqEYWd_400x400.jpg"
                          title="That masked genshin dilf by @hagihino on twitter"
                          description="cool painting of a genshin character people simp after"
                          tweetLink="https://twitter.com/hagihino/status/1546396450908770305?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                        />
                      </Grid>

                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FXZpOPhXoAIeauT?format=jpg&name=medium"
                          srcImage="https://pbs.twimg.com/profile_images/1530186499106476037/YPC68ciC_400x400.jpg"
                          title="julieta and augustin by Moosopp on twitter"
                          description="cute Encanto fan art"
                          tweetLink="https://twitter.com/Moosopp/status/1546539679268458496?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                        />
                      </Grid>
                      
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FInRl5MacAAWX9o?format=jpg&name=360x360"
                          srcImage="https://pbs.twimg.com/profile_images/1480175854080921602/BdkXyt1__400x400.jpg"
                          title="Encanto"
                          description="Dolores and Mariano being dweebs by @komemerda"
                          tweetLink="https://twitter.com/komemerda/status/1479944412386172928?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FIWGa0sUcAY04JF?format=jpg&name=4096x4096"
                          srcImage="https://pbs.twimg.com/profile_images/1354315224623378437/nZz6Aw9t_400x400.jpg"
                          title="Pepa and Felix"
                          description="adorable fan art of how Pepa could have gotten hear cool sun earrings"
                          tweetLink="https://twitter.com/kianamaiart/status/1478736079649796096?s=20"
                        />
                      </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/profile_banners/748126879/1460780039/1500x500"
                          srcImage="https://pbs.twimg.com/profile_images/1476095506770182145/OfGK7EHz_400x400.jpg"
                          title="Persephone animation"
                          description="good ref for process by @heyitsJaki. thumbnail is banner"
                          tweetLink="https://twitter.com/heyitsJaki/status/1482050036267683842?s=20"
                        />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                {/*----------------------- end of fan art --------------------------*/}
              </AccordionDetails>
            </Accordion>
          </div>
          {/*----------------------- end of cool art --------------------------*/}

          {/*----------------------- art references--------------------------*/}
          <div className="bookmarkCat">
            <Accordion className="accordion01">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>Art references</h3>
                
              </AccordionSummary>
                <AccordionDetails>
                  <Accordion className="accordion02">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                      <h4>Tutorials</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={5}>
                         {/*
                            <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                          */}
                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FXE0bB8XwAMHk_H?format=jpg&name=medium"
                            srcImage="https://pbs.twimg.com/profile_images/1529606441111371778/KMLRzPCI_400x400.jpg"
                            title="growing your social media as an artist by cyenart on twitter"
                            description="tips and cheat sheets for social media "
                            tweetLink="https://twitter.com/cyenart/status/1545073789242859523?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FXFoLx9UsAAtSs5?format=jpg&name=large"
                            srcImage="https://pbs.twimg.com/profile_images/1458877167509532679/Ge-BSUXb_400x400.jpg"
                            title="drawing lats by UDekure on twitter"
                            description="muscle reference tutorial. very useful."
                            tweetLink="https://twitter.com/UDekure/status/1545130715649478656?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FXcOEhwUsAAJQ2t?format=jpg&name=large"
                            srcImage="https://pbs.twimg.com/profile_images/1458877167509532679/Ge-BSUXb_400x400.jpg"
                            title="dynamic posing by UDekure on twitter"
                            description="by Emlio Dekure. Series of tutorials on patreon apparently."
                            tweetLink="https://twitter.com/UDekure/status/1546720481385988097?s=20&t=X8r22pVcn1TxWPtOUt-CMg"
                          />
                        </Grid>

                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FIajes2XIAcz8l3?format=jpg&name=900x900"
                            srcImage="https://pbs.twimg.com/profile_images/1759638070/Picture_4_400x400.png"
                            title="Wings tutorial"
                            description="by @EtheringtonBros on twitter"
                            tweetLink="https://twitter.com/EtheringtonBros/status/1479049652729225224?s=20"
                          />
                        </Grid>
                      <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/E0ejFlsVgAILgxA?format=jpg&name=large"
                            srcImage="https://pbs.twimg.com/profile_images/1539652049474064384/anAkKXKC_400x400.jpg"
                            title="how to stylize actual faces" 
                            description="someone's notes on how to make real people faces work with your own style by hammerings on twitter"
                            tweetLink="https://twitter.com/hammerings/status/1548121063565180928?s=20&t=_uAP96mj810AzmSbfd2xZQ"
                          />
                        </Grid>
                         <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FVzHXAcacAUVon5?format=jpg&name=large"
                            srcImage="https://pbs.twimg.com/profile_images/1383429870907105284/_gN1nkGB_400x400.jpg"
                            title="process video of diital painting"
                            description="fan art of willow and hunter by beaniewinnie96 on twitter"
                            tweetLink="https://twitter.com/beaniewinnie96/status/1546922642531184640?s=20&t=_uAP96mj810AzmSbfd2xZQ"
                          />
                      </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                {/*--------------end of tutorials-------------------- */}
                
                {/*--------looks fun to draw------- */}
                 <Accordion className="accordion02">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                      <h4>Looks fun to draw</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={5}>
                          {/**
                            <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                           */}
                        <Grid item xl={3} md={4} sm={6}>
                          <Cardtemplate
                            bgImgURL="https://pbs.twimg.com/media/FIEV535XoAIQjzZ?format=jpg&name=large"
                            srcImage="https://pbs.twimg.com/profile_images/1351792019354611712/kkprLZfI_400x400.jpg"
                            title="Some lady's pretty new year outfit"
                            description="Looked fun to draw"
                            tweetLink="https://twitter.com/tharmeega/status/1477486243848105986?s=20"
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
              {/**------end of looks fun to draw */}
              </AccordionDetails>
            </Accordion>
          </div>
          {/*----------------------- end of art references--------------------------*/}
          
          {/*--------i want to buy------------- */}
          <div className="bookmarkCat">
            <Accordion className="accordion01">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>I want to buy</h3>
              </AccordionSummary>
              <AccordionDetails>
                  <Grid container spacing={5}>
                           {/*
                            <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                            */}
                    <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL="https://pbs.twimg.com/media/FVKUhkPWIAcVSuw?format=jpg&name=4096x4096"
                          srcImage="https://pbs.twimg.com/profile_images/1398799214864437249/Ejn2QTKG_400x400.jpg"
                          title="ocean themed looks from mg3kiryu"
                          description="artist makes cute ocean merch like patches. cool fashion"
                          tweetLink="https://twitter.com/mg3kiryu/status/1536453899628027904?s=20&t=NrOtJI3xykXon934WLhAog"
                        />
                    </Grid>

                  </Grid>
              </AccordionDetails>
            </Accordion>
          </div>

          {/*-------------craft things------------------------ */}
          <div className="bookmarkCat">
            <Accordion className="accordion01">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>Craft things</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={5}>
                            {/*
                              <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                             */}
                  <Grid item xl={3} md={4} sm={6}></Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </div>

          {/*-----------------animal crossing---------------*/}
          <div className="bookmarkCat">
            <Accordion className="accordion01">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>Animal Crossing</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={5}>
                             {/*
                                <Grid item xl={3} md={4} sm={6}>
                        <Cardtemplate
                          bgImgURL=""
                          srcImage=""
                          title=""
                          description=""
                          tweetLink=""
                        />
                      </Grid>
                              */}
                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                        bgImgURL="https://pbs.twimg.com/media/FDeZFHBVkAQ1oDX?format=jpg&name=large"
                        srcImage="https://pbs.twimg.com/profile_images/1280865685460172800/c5ieI0WI_400x400.jpg"
                        title="Funny goth sheep"
                        description="from @AnhNmalCrossng on twitter"
                        tweetLink="https://twitter.com/AnhNmalCrossng/status/1456801319381917699?s=20"
                      />
                  </Grid>

                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                        bgImgURL="https://pbs.twimg.com/media/FDooXkeVEAU_Ypm?format=jpg&name=large"
                        srcImage="https://pbs.twimg.com/profile_images/1280865685460172800/c5ieI0WI_400x400.jpg"
                        title="Funny bird guy"
                        description="from @AnhNmalCrossng on twitter"
                        tweetLink="https://twitter.com/AnhNmalCrossng/status/1457521816730173442?s=20"
                      />
                  </Grid>

                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                        bgImgURL="https://pbs.twimg.com/media/FHEzd-iVIAA2cwb?format=jpg&name=large"
                        srcImage="https://pbs.twimg.com/profile_images/1280865685460172800/c5ieI0WI_400x400.jpg"
                        title="Cafe photo"
                        description="from @AnhNmalCrossng on twitter"
                        tweetLink="https://twitter.com/AnhNmalCrossng/status/1473015145001472000?s=20"
                      />
                  </Grid>

                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                        bgImgURL="https://pbs.twimg.com/media/FHoe2c1VcAEdt8k?format=jpg&name=large"
                        srcImage="https://pbs.twimg.com/profile_images/1280865685460172800/c5ieI0WI_400x400.jpg"
                        title="class photo"
                        description="from @AnhNmalCrossng on twitter"
                        tweetLink="https://twitter.com/AnhNmalCrossng/status/1475525750597951490?s=20"
                      />
                  </Grid>

                  <Grid item xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://pbs.twimg.com/media/FIRZ9EPVgAEVj3k?format=jpg&name=large"
                      srcImage="https://pbs.twimg.com/profile_images/1383118033036673031/s-5TFCqi_400x400.jpg"
                      title="Celeste and Brooster"
                      description="from @aresangel on twitter"
                      tweetLink="https://twitter.com/aresangel/status/1478405485053108226?s=20"
                    />
                  </Grid>

                  <Grid xl={3} md={4} sm={6}>
                    <Cardtemplate
                      bgImgURL="https://pbs.twimg.com/media/FELpU-aXoAMxQar?format=jpg&name=large"
                      srcImage="https://pbs.twimg.com/profile_images/1468288405381521413/o_Ra6LBX_400x400.jpg"
                      title="italian countryside inspired"
                      description="by @avasgardens"
                      tweetLink="https://twitter.com/avasgardens/status/1459985780550651905?s=20"
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </div>
          {/*-----------end of animal crossing------------------*/}
        </Container>
        {/*----------------------- end of Container tag --------------------------*/}
      </section>
      {/*----------------------- end of Body --------------------------*/}
    </div>
    </main>
  )
}

// export default IndexPage
