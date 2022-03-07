import BodyContainer from "./BodyContainer";
import { useParams } from "react-router-dom";

function BodyProposed({ data }) {
  let { slug } = useParams();
  let volumn = localStorage.getItem("vol");
  let user = {};
  if (data && data.length > 0) {
    let userID = data.find((item) => item.name === slug);
    user.name = userID.name;
    user.avatar = userID.avatar;
    user.title = userID.title;
  }
  return BodyContainer(data, user, slug, volumn);
}

export default BodyProposed;
