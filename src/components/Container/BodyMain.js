import BodyContainer from "./BodyContainer";

function BodyMain({ data }) {
  let dataNew = [];
  let count = 0;

  if (data && data.length > 0) {
    for (let item in data) {
      for (let itemVideo in data[item].video) {
        data[item].video[itemVideo].user_video = data[item].name;
        data[item].video[itemVideo].avatar_video = data[item].avatar;
        data[item].video[itemVideo].title_video = data[item].title;
        data[item].video[itemVideo].id = count++;
        dataNew.push(data[item].video[itemVideo]);
      }
    }
    dataNew.sort((a, b) => a.comment - b.comment);
  }
  return <>{data && data.length > 0 && BodyContainer(dataNew, null, null)}</>;
}

export default BodyMain;
