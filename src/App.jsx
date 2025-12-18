import React from "react";
import Cards from "./Components/Cards";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "data:image/jpeg;base64,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",
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
