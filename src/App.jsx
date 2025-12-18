import React from "react";
import Cards from "./Components/Cards";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "google.svg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "microsoft.svg",
      companyName: "Microsoft",
      datePosted: "3 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$110/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "apple.svg",
      companyName: "Apple",
      datePosted: "7 days ago",
      post: "Visual Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$95/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "meta.svg",
      companyName: "Meta",
      datePosted: "2 days ago",
      post: "Interaction Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "Remote, India",
    },
    {
      brandLogo: "netflix.svg",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "Senior Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$150/hr",
      location: "Remote, India",
    },
    {
      brandLogo: "deloitte.svg",
      companyName: "Deloitte",
      datePosted: "4 days ago",
      post: "UI Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "pwc.svg",
      companyName: "PwC",
      datePosted: "1 day ago",
      post: "UX Consultant",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Gurgaon, India",
    },
    {
      brandLogo: "ey.svg",
      companyName: "EY",
      datePosted: "8 days ago",
      post: "Product Experience Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "Kolkata, India",
    },
    {
      brandLogo: "kpmg.svg",
      companyName: "KPMG",
      datePosted: "9 days ago",
      post: "Service Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$80/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "accenture.svg",
      companyName: "Accenture",
      datePosted: "10 days ago",
      post: "UX Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$105/hr",
      location: "Pune, India",
    },
  ];

  return <div className="parent">
    {jobOpenings.map(function(elem){
      return <Cards brandLogo={elem.brandLogo} company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
    })}
  </div>;
};

export default App;
