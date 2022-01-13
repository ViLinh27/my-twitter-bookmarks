import "./styles.css";
import React, { useState, useEffect } from "react";
import { Typography, Container, Grid, CssBaseline } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import PropTypes from "prop-types";
import Cardtemplate from "./components/Cardtemplate.js";

// markup
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
      <section className="section header">
        <Container maxwidth="xl">
          <div className="header">
            <h1>Hello! I store my twitter bookmarks here!</h1>
            <h2>They are categorized accordingly</h2>
          </div>
        </Container>
      </section>

      <section className="section body">
        <Container maxwidth="xl">
          <div className="bookmarkCat">
            <h3>Coding resources</h3>
            <Grid container spacing={5}>
              <Grid item xl={3} sm={3}>
                <Cardtemplate
                  bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                  srcImage="https://pbs.twimg.com/profile_images/1474033070323896323/OxmVHLRD_400x400.jpg"
                  title="Free web design e-books"
                  description="twitter thread of free e-books"
                  tweetLink="https://twitter.com/designerSaha/status/1480449836503617540?s=20"
                />
              </Grid>
              <Grid item xl={3} sm={3}>
                <Cardtemplate
                  bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                  srcImage="https://pbs.twimg.com/profile_images/1451917571633025033/COe3aQAb_400x400.jpg"
                  title="learning js"
                  description="websites to help in learning javascript"
                  tweetLink="https://twitter.com/swastika0015/status/1478962049170518018?s=20"
                />
              </Grid>
              <Grid item xl={3} sm={3}>
                <Cardtemplate
                  bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                  srcImage="https://pbs.twimg.com/profile_images/1435853099600474117/rjDQ_RSZ_400x400.jpg"
                  title="project ideas"
                  description="some free html/css projects from Mohammed Junaid"
                  tweetLink="https://twitter.com/mdjunaidap/status/1473871417867333634?s=20"
                />
              </Grid>
              <Grid item xl={3} sm={3}>
                <Cardtemplate
                  bgImgURL="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500"
                  srcImage="https://pbs.twimg.com/profile_images/1471847814422568965/zQG2Lrkv_400x400.jpg"
                  title="css generators"
                  description="help if you don't want to do all the shit from scratch"
                  tweetLink="https://twitter.com/saviomartin7/status/1472808997820383234?s=20"
                />
              </Grid>
            </Grid>
          </div>

          <div className="bookmarkCat">
            <h3>Cool art</h3>
              <h4>Backgrounds</h4>
              <Grid container spacing={5}>
                <Grid item xl={3} sm={3}>
                  <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FIa1FSpXIAcaOSw?format=jpg&name=large"
                    srcImage="https://pbs.twimg.com/profile_images/1345650468509331456/PBymlVbc_400x400.png"
                    title="cool backgrounds"
                    description="by @ani_obsessive"
                    tweetLink="https://twitter.com/ani_obsessive/status/1479068915586191360?s=20"
                  />
                </Grid>
                <Grid item xl={3} sm={3}>
                  <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FIUbF7wVcAAvcVr?format=jpg&name=4096x4096"
                    srcImage="https://pbs.twimg.com/profile_images/1090888684973355013/g1TQnuLP_400x400.jpg"
                    title="Pretty car"
                    description="cool bg painting by @glendalesidiot"
                    tweetLink="https://twitter.com/glendalesidiot/status/1478618432564125697?s=20"
                  />
                </Grid>
                <Grid item xl={3} sm={3}>
                  <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FH-UhiEVkAAuZjp?format=jpg&name=medium"
                    srcImage="https://pbs.twimg.com/profile_images/1105971791309111297/UlOjsM-a_400x400.png"
                    title="Tigers"
                    description="some cool tiger paintings and stuff"
                    tweetLink="https://twitter.com/nkim_illustrate/status/1477062508229783556?s=20"
                  />
                </Grid>
                <Grid item xl={3} sm={3}>
                  <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FIQlzlAX0AIYPAE?format=jpg&name=large"
                    srcImage="https://pbs.twimg.com/profile_images/1345650468509331456/PBymlVbc_400x400.png"
                    title="concept art for Beauty and the Beast"
                    description="by Hans Bacher for the 1991 movie"
                    tweetLink="https://twitter.com/ani_obsessive/status/1478348251518709769?s=20"
                  />
                </Grid>
                <Grid item xl={3} sm={3}>
                  <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FIRfXwpWQAUNb9j?format=jpg&name=4096x4096"
                    srcImage="https://pbs.twimg.com/profile_images/1341260101332725761/sMzt-U_z_400x400.jpg"
                    title="Bathroom for we baby bears"
                    description="painting by Nessa Tweneboah"
                    tweetLink="https://twitter.com/Thepotenpro/status/1478417470428000258?s=20"
                  />
                </Grid>
              </Grid>

              <h4>Characters</h4>
              <Grid container spacing={5}>
                <Grid item xl={3} sm={3}>
                  <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FIiuArkVIAAU6k4?format=jpg&name=large"
                    srcImage="https://pbs.twimg.com/profile_images/1443317526788644865/-yz95icp_400x400.jpg"
                    title="Self portrait by @friedbaens"
                    description="cool art with cool textures by twitter artist"
                    tweetLink="https://twitter.com/friedbaens/status/1479623812371009537?s=20"
                  />
                </Grid>
                <Grid item xl={3} sm={3}></Grid>
              </Grid>

              <h4>Fan art</h4>
              <Grid container spacing={5}>
                <Grid item xl={3} sm={3}>
                  <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FInRl5MacAAWX9o?format=jpg&name=360x360"
                    srcImage="https://pbs.twimg.com/profile_images/1480175854080921602/BdkXyt1__400x400.jpg"
                    title="Encanto"
                    description="Dolores and Mariano being dweebs by @komemerda"
                    tweetLink="https://twitter.com/komemerda/status/1479944412386172928?s=20"
                  />
                </Grid>
                <Grid item xl={3} sm={3}>
                  <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FIWGa0sUcAY04JF?format=jpg&name=4096x4096"
                    srcImage="https://pbs.twimg.com/profile_images/1354315224623378437/nZz6Aw9t_400x400.jpg"
                    title="Pepa and Felix"
                    description="adorable fan art of how Pepa could have gotten hear cool sun earrings"
                    tweetLink="https://twitter.com/kianamaiart/status/1478736079649796096?s=20"
                  />
                </Grid>
              </Grid>
          </div>

          <div className="bookmarkCat">
            <h3>Art references</h3>
            <h4>Tutorials</h4>
            <Grid container spacing={5}>
              <Grid item xl={3} sm={3}>
                <Cardtemplate
                  bgImgURL="https://pbs.twimg.com/media/FIajes2XIAcz8l3?format=jpg&name=900x900"
                  srcImage="https://pbs.twimg.com/profile_images/1759638070/Picture_4_400x400.png"
                  title="Wings tutorial"
                  description="by @EtheringtonBros on twitter"
                  tweetLink="https://twitter.com/EtheringtonBros/status/1479049652729225224?s=20"
                />
              </Grid>
            </Grid>
            <h4>Looks fun to draw</h4>
            <Grid container spacing={5}>
              <Grid item xl={3} sm={3}>
                <Cardtemplate
                  bgImgURL="https://pbs.twimg.com/media/FIEV535XoAIQjzZ?format=jpg&name=large"
                  srcImage="https://pbs.twimg.com/profile_images/1351792019354611712/kkprLZfI_400x400.jpg"
                  title="Some lady's pretty new year outfit"
                  description="Looked fun to draw"
                  tweetLink="https://twitter.com/tharmeega/status/1477486243848105986?s=20"
                />
              </Grid>
            </Grid>
          </div>

          <div className="bookmarkCat">
            <h3>I want to buy</h3>
            <Grid container spacing={5}>
              <Grid item xl={3} sm={3}></Grid>
            </Grid>
          </div>

          <div className="bookmarkCat">
            <h3>Craft things</h3>
            <Grid container spacing={5}>
              <Grid item xl={3} sm={3}></Grid>
            </Grid>
          </div>

          <div className="bookmarkCat">
            <h3>Animal Crossing</h3>
            <Grid container spacing={5}>
              <Grid item xl={3} sm={3}>
                <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FDeZFHBVkAQ1oDX?format=jpg&name=large"
                    srcImage="https://pbs.twimg.com/profile_images/1280865685460172800/c5ieI0WI_400x400.jpg"
                    title="Funny goth sheep"
                    description="from @AnhNmalCrossng on twitter"
                    tweetLink="https://twitter.com/AnhNmalCrossng/status/1456801319381917699?s=20"
                  />
              </Grid>

              <Grid item xl={3} sm={3}>
                <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FDooXkeVEAU_Ypm?format=jpg&name=large"
                    srcImage="https://pbs.twimg.com/profile_images/1280865685460172800/c5ieI0WI_400x400.jpg"
                    title="Funny bird guy"
                    description="from @AnhNmalCrossng on twitter"
                    tweetLink="https://twitter.com/AnhNmalCrossng/status/1457521816730173442?s=20"
                  />
              </Grid>

              <Grid item xl={3} sm={3}>
                <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FHEzd-iVIAA2cwb?format=jpg&name=large"
                    srcImage="https://pbs.twimg.com/profile_images/1280865685460172800/c5ieI0WI_400x400.jpg"
                    title="Cafe photo"
                    description="from @AnhNmalCrossng on twitter"
                    tweetLink="https://twitter.com/AnhNmalCrossng/status/1473015145001472000?s=20"
                  />
              </Grid>

               <Grid item xl={3} sm={3}>
                <Cardtemplate
                    bgImgURL="https://pbs.twimg.com/media/FHoe2c1VcAEdt8k?format=jpg&name=large"
                    srcImage="https://pbs.twimg.com/profile_images/1280865685460172800/c5ieI0WI_400x400.jpg"
                    title="class photo"
                    description="from @AnhNmalCrossng on twitter"
                    tweetLink="https://twitter.com/AnhNmalCrossng/status/1475525750597951490?s=20"
                  />
              </Grid>

              <Grid item xl={3} sm={3}>
                <Cardtemplate
                  bgImgURL="https://pbs.twimg.com/media/FIRZ9EPVgAEVj3k?format=jpg&name=large"
                  srcImage="https://pbs.twimg.com/profile_images/1383118033036673031/s-5TFCqi_400x400.jpg"
                  title="Celeste and Brooster"
                  description="from @aresangel on twitter"
                  tweetLink="https://twitter.com/aresangel/status/1478405485053108226?s=20"
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </div>
    </main>
  )
}

// export default IndexPage
