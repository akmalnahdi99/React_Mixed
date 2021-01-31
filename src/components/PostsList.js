//under review for image gallery
import React from "react";
import PostCard from "./PostCard";
import { AppContext } from "../context/settings";
import { apiCall } from "./../utils/landlordHelper";
import Loading from "./static/Loading";
//import postIcon from "img/money-bag.svg";

const PostsList = (props, filterBy) => {
  const appContext = React.useContext(AppContext);
  const activeFilter = appContext.settings.postsFilter || "All";
  const activeUnitId = appContext.settings.activeUnitId;

  const [isLoading, setIsLoading] = React.useState(true);
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
  
    async function loadPostsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/units/listPosts");
      if (response.status) {
        var r = response.data;
        r = r.map((e) => {
          if (e.postType === "maintenance") {
            e.postIcon = "/imgs/settings.svg";
          } else if (e.postType === "overdue") {
            e.postIcon = "/imgs/schedule.svg";
          } else if (e.postType === "offer") {
            e.postIcon = "/imgs/handshake.svg";
          } else if (e.postType === "viewing") {
            e.postIcon = "/imgs/eye.svg";
          } else if (e.postType === "payment") {
            e.postIcon = "/imgs/money-bag.svg";
          }
          return e;
        });
        setPosts(r);
      }
      setIsLoading(false);
    }
    loadPostsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  //     id: 3,
  //     postTitle: "4 New Offers",
  //     postBody: "Lorem ipsum dolor, sit amet consectetur adipisicing e .",
  //     postIcon: "/imgs/handshake.svg",
  //     postDateTime: "17:50 | 25 Dec 2020",
  //     postType: "offers",
  //     images: [],
  //   },
  // ];

  var filteredPosts = posts;
  if (filteredPosts && activeFilter !== "All") {
    filteredPosts = posts.filter((item) => item.postType.toLowerCase() === activeFilter.toLowerCase());
  }

  if (isLoading === true) {
    return <Loading />;
  }

  if (filteredPosts !== null && filteredPosts.length > 0) {
    return (
      <div id="vertical-timeline" className="vertical-container light-timeline searchable">
        {filteredPosts.map((postItem, index) => {
          return <PostCard key={index} {...postItem} />;
        })}
      </div>
    );
  } else {
    return <h2 style={{ textAlign: "center" }}>No Posts found !!!</h2>;
  }
};

export default PostsList;
