import React from "react";
import NoteList from "../Components/Notes/NoteList";
import CommonHeading from "../Components/CommonHeading";

const Home = () => {
  return (
    <React.Fragment>
      <CommonHeading key={"Home"} title={"Notes List"} />
      <NoteList />
    </React.Fragment>
  );
};

export default Home;
