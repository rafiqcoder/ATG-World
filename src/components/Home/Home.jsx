import React from 'react';
 import pen from "../../assets/images/icon/pen.svg";
 import location from "../../assets/images/icon/location.svg";
 import alert from "../../assets/images/icon/alert.svg";
import Banner from '../Banner/Banner';
import group from "../../assets/images/icon/navigation/Vector.png";
import downArrow from "../../assets/images/icon/navigation/downArrow.png";
import PostCard from '../PostCard/PostCard';

import articleIcon from "../../assets/images/icon/Article.svg";
import EduIcon from "../../assets/images/icon/Education.svg";

import article from "../../assets/images/article.png";
import eduImg from "../../assets/images/education.png";

import sarthak from "../../assets/images/sarthak.png";
import sarah from "../../assets/images/sarah.png";
import EventCard from '../EventCard/EventCard';
import JobCard from '../JobCard/JobCard';
import SignIn from '../SignIn/SignIn';
const Home = () => {

  const postdata = [
    {
      id: 1,
      img: `${article}`,
      category: "Article",
      catIcon: `${articleIcon}`,

      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorImg: `${sarthak}`,
      author: "Sarthak Karma",
    },
    {
      id: 2,
      img: `${eduImg}`,
      category: "Education",
      catIcon: `${EduIcon}`,
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorImg: `${sarah}`,
      author: "Sarah West",
    },
  ];
  const handleEdit=(id)=> {
    const popup = document.getElementById("popup");
    popup.classList.remove("d-none");
    popup.classList.add("d-flex");
   

  }
  // click handler for to close popup
  const closepopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.add("d-none");
    popup.classList.remove("d-flex");
  

  };
    return (
      <div className="">
        <Banner></Banner>
        <div>
          <nav className="navbar navbar-expand-md bg-white ">
            <div className="container ">
              <div
                className="collapse navbar-collapse border-1 border-bottom"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav me-auto">
                  <li className="nav-item border-1 border-dark border-bottom pb-2">
                    <a className="nav-link active" aria-current="page" href="/">
                      All Posts(32)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Article
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Event
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Job
                    </a>
                  </li>
                </ul>
                <div className="">
                  <button className="btn bg-light me-1">
                    Write a post <img className="ms-1" src={downArrow} alt="" />
                  </button>
                  <button
                    onClick={handleEdit}
                    className="btn btn-primary"
                    // type="button"
                    // data-bs-toggle="modal"
                    // data-bs-target="#staticBackdrop"
                  >
                    <img src={group} alt="" /> Join Group
                  </button>

                  <div id="popup" className="d-none w-100 custoStyle" >
                    <div
                      className=""
                      
                    />
                    <div className="mx-auto container">
                      <div className="">
                        <div className="bg-white shadow  overflow-y-auto w-100">
                          <div className="">
                            <div className=" mt-9">
                              <SignIn></SignIn>
                              <button
                                className=" shadow rounded text-sm text-white"
                                onClick={closepopup}
                              >
                                Cancel
                              </button>
                              <button className="px-6 py-3  shadow rounded text-sm text-white">
                                Update Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-md-8">
              {postdata.map((post) => (
                <PostCard post={post}></PostCard>
              ))}
              <EventCard></EventCard>
              <JobCard></JobCard>
            </div>
            <div className="col-md-3">
              <div>
                <div className="d-flex justify-content-between gap-5 my-3 border-2 border-bottom ">
                  <span className="h5">
                    <img src={location} alt="" /> Norda, India
                  </span>
                  <span className="h5">
                    <img className="w-100" src={pen} alt="" />
                  </span>
                </div>
                <div className="d-flex justify-content-between gap-5 my-3 mt-5 ">
                  <span className="h5">
                    <img src={alert} alt="" />
                  </span>
                  <span className="lead">
                    <p>
                      Your location will help us serve better and extend a
                      personalised experience.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="bg-white" style={{width:'600px', right:'0',height:'400px', zIndex:'9999'}}>
            <div className="">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close text-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <SignIn></SignIn>
            </div>
          </div>
        </div> */}
      </div>
    );
};

export default Home;