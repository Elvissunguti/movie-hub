import React from "react";
import NavBar from "../NavBar/NavBar";
import Row from "./Row";
import requests from "../../request";

const BrowsePage = () => {
    return(
        <section>
            <div>
                <NavBar />
            </div>
            <div>
            <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"History Movies"} fetchUrl={requests.fetchHistoryMovies} />
      <Row
        title={"Animation Movies"}
        fetchUrl={requests.fetchAnimationMovies}
      />
      <Row title={"Fantasy Movies"} fetchUrl={requests.fetchFantasyMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
            </div>

        </section>
    )
}
export default BrowsePage;