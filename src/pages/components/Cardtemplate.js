import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
//import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "gatsby";

export default function Cardtemplate({
  bgImgURL,
  srcImage,
  title,
  description,
  tweetLink
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="cardStyle">
      <CardHeader
        avatar={
          <Avatar>
            <img src={srcImage} className="pfp" />
          </Avatar>
        }
        action={
          <IconButton>
            <MoreIcon />
          </IconButton>
        }
        title={title}
      ></CardHeader>
      <CardMedia component="img" height="100" image={bgImgURL} />
      <CardContent>
        <Typography>{description}</Typography>

        <CardActions>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <Typography paragraph>
            <Link to={tweetLink}>Go to tweet</Link>
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
}
