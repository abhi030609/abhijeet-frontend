import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MoonLoader } from "react-spinners";
import HomeBlogCard from "./homeBlogCard";
import "./index.css";
import { BiDownload } from "react-icons/bi";
import HomeSectionNumber from "../homeSectionNumbers";
import { Link } from "react-router-dom";

const projectUrl = "http://localhost:3005/allBlogs";

const blogApiLocalData = [
  {
    _id: "64a25cdaeb95b492f35f9bdd",
    blogImage: "URL",
    bloghead: "The Two Brands That Make a Difference",
    blogContent:
      "As a marketer, you are well aware of the significance of gathering and utilizing customer data to develop personalized and pertinent campaigns. However, you also understand that customers are becoming increasingly conscious and concerned about the handling and safeguarding of their data.",
    blogDate: "2023-12-15T00:00:00.000Z",
    likes: "20",
    blogLongDescription:
      "Have you ever found yourself needing help with creating a strategy? Don't worry; you're not alone! Many people face hurdles and roadblocks along the way. In this blog, we'll delve into some common areas where individuals often get stuck and explore how to overcome these challenges. So, let's embark on a journey of discovery and learn how to navigate the twists and turns of strategy effectively! 🚀\n\nThe \"Me\" Trap:\nOne of the biggest stumbling blocks in strategy development is the inability to see things from the audience's perspective. Instead of focusing on the needs and desires of their target market, people tend to get caught up in their own business and product. They obsess over features and convince themselves that their offering is superior. To overcome this, we must shift our mindset and truly understand our audience's wants, needs, and pain points. By doing so, we can tailor our strategy to provide genuine value and resonate with our customers. 😊\n\nAvoiding the Elephant in the Room:\nWhen problems arise, some individuals become defensive. They perceive problems as personal criticism and avoid discussing them altogether. This defensive attitude hinders the open and honest communication necessary for critical thinking. To overcome this hurdle, we must embrace problems as opportunities for growth. By acknowledging and addressing challenges head-on, we can foster a culture of innovation and continuous improvement. 🐘\n\nThe Rush to Answers:\nOften, people rush to find answers without thoroughly exploring the questions at hand. The discomfort of uncertainty and the desire to be right drive us towards quick solutions. However, true breakthroughs lie in the depths of thoughtful contemplation and asking the right questions. By slowing down and delving into the underlying questions, we can unlock fresh perspectives and uncover more effective strategies. 🤔\n\nThe Illusion of Insight:\nSometimes, people mistake provocative problem statements for true insights. A well-crafted problem statement may feel insightful, almost like a revelation. However, a genuine insight goes beyond surface-level observations. It opens up new dimensions and sheds light on previously unseen aspects of the problem. To avoid this pitfall, we must dig deeper, challenge assumptions, and seek profound insights that truly transform our strategies. 💡\n\nThe Simplicity Challenge:\nThe use of complex language often hinders effective communication. While some individuals strive to sound educated and sophisticated, simplicity is key. Using simple words and clear messaging enables us to connect with a wider audience and convey our ideas more effectively. Let's embrace the power of simplicity and ensure our message resonates with everyone, from teenagers to seasoned professionals. 🗣️\n\nThe Cloudy Word Cover-Up:\nIn an attempt to appear more profound, some individuals hide behind obscure and convoluted language. Long, complicated words might give the illusion of depth, but they often fail to convey any meaningful substance. To break free from this trap, we must challenge ourselves to express our thoughts clearly and concisely. By landing lateral thoughts and avoiding the fog of complexity, we can craft strategies that are both insightful and accessible. ☁️\n\nStrategy development can be a challenging endeavour, but by recognizing and addressing these common pitfalls, we can enhance our effectiveness and achieve greater success. By shifting our perspective, embracing problems, asking the right questions, seeking genuine insights, simplifying our language, and avoiding unnecessary complexity, we can create strategies that connect with our audience. ✨🚀\n",
    __v: 0,
  },
  {
    _id: "64a23ebfeb95b492f35f9b2c",
    blogImage: "Url",
    bloghead:
      "97% and Beyond: The Art of Building Long-Term Customer Relationships",
    blogContent:
      "You know that feeling when you see a subject line promising a 97% customer retention rate and your first instinct is to roll your eyes and dismiss it as some empty marketing claim? Yeah, I've been there too. But hold on a second, because I've got a game-changing hack to share with you today that might just make you reconsider.",
    blogDate: "2023-10-13T00:00:00.000Z",
    likes: "35",
    blogLongDescription:
      "Have you ever found yourself needing help with creating a strategy? Don't worry; you're not alone! Many people face hurdles and roadblocks along the way. In this blog, we'll delve into some common areas where individuals often get stuck and explore how to overcome these challenges. So, let's embark on a journey of discovery and learn how to navigate the twists and turns of strategy effectively! 🚀\n\nThe \"Me\" Trap:\nOne of the biggest stumbling blocks in strategy development is the inability to see things from the audience's perspective. Instead of focusing on the needs and desires of their target market, people tend to get caught up in their own business and product. They obsess over features and convince themselves that their offering is superior. To overcome this, we must shift our mindset and truly understand our audience's wants, needs, and pain points. By doing so, we can tailor our strategy to provide genuine value and resonate with our customers. 😊\n\nAvoiding the Elephant in the Room:\nWhen problems arise, some individuals become defensive. They perceive problems as personal criticism and avoid discussing them altogether. This defensive attitude hinders the open and honest communication necessary for critical thinking. To overcome this hurdle, we must embrace problems as opportunities for growth. By acknowledging and addressing challenges head-on, we can foster a culture of innovation and continuous improvement. 🐘\n\nThe Rush to Answers:\nOften, people rush to find answers without thoroughly exploring the questions at hand. The discomfort of uncertainty and the desire to be right drive us towards quick solutions. However, true breakthroughs lie in the depths of thoughtful contemplation and asking the right questions. By slowing down and delving into the underlying questions, we can unlock fresh perspectives and uncover more effective strategies. 🤔\n\nThe Illusion of Insight:\nSometimes, people mistake provocative problem statements for true insights. A well-crafted problem statement may feel insightful, almost like a revelation. However, a genuine insight goes beyond surface-level observations. It opens up new dimensions and sheds light on previously unseen aspects of the problem. To avoid this pitfall, we must dig deeper, challenge assumptions, and seek profound insights that truly transform our strategies. 💡\n\nThe Simplicity Challenge:\nThe use of complex language often hinders effective communication. While some individuals strive to sound educated and sophisticated, simplicity is key. Using simple words and clear messaging enables us to connect with a wider audience and convey our ideas more effectively. Let's embrace the power of simplicity and ensure our message resonates with everyone, from teenagers to seasoned professionals. 🗣️\n\nThe Cloudy Word Cover-Up:\nIn an attempt to appear more profound, some individuals hide behind obscure and convoluted language. Long, complicated words might give the illusion of depth, but they often fail to convey any meaningful substance. To break free from this trap, we must challenge ourselves to express our thoughts clearly and concisely. By landing lateral thoughts and avoiding the fog of complexity, we can craft strategies that are both insightful and accessible. ☁️\n\nStrategy development can be a challenging endeavour, but by recognizing and addressing these common pitfalls, we can enhance our effectiveness and achieve greater success. By shifting our perspective, embracing problems, asking the right questions, seeking genuine insights, simplifying our language, and avoiding unnecessary complexity, we can create strategies that connect with our audience. ✨🚀\n",
    __v: 0,
  },
  {
    _id: "64a17a0eeb95b492f35f9ad0",
    blogImage: "Url",
    bloghead:
      "97% and Beyond: The Art of Building Long-Term Customer Relationships",
    blogContent:
      "You know that feeling when you see a subject line promising a 97% customer retention rate and your first instinct is to roll your eyes and dismiss it as some empty marketing claim? Yeah, I've been there too. But hold on a second, because I've got a game-changing hack to share with you today that might just make you reconsider.",
    blogDate: "2023-09-16T00:00:00.000Z",
    likes: "35",
    blogLongDescription:
      "Have you ever found yourself needing help with creating a strategy? Don't worry; you're not alone! Many people face hurdles and roadblocks along the way. In this blog, we'll delve into some common areas where individuals often get stuck and explore how to overcome these challenges. So, let's embark on a journey of discovery and learn how to navigate the twists and turns of strategy effectively! 🚀\n\nThe \"Me\" Trap:\nOne of the biggest stumbling blocks in strategy development is the inability to see things from the audience's perspective. Instead of focusing on the needs and desires of their target market, people tend to get caught up in their own business and product. They obsess over features and convince themselves that their offering is superior. To overcome this, we must shift our mindset and truly understand our audience's wants, needs, and pain points. By doing so, we can tailor our strategy to provide genuine value and resonate with our customers. 😊\n\nAvoiding the Elephant in the Room:\nWhen problems arise, some individuals become defensive. They perceive problems as personal criticism and avoid discussing them altogether. This defensive attitude hinders the open and honest communication necessary for critical thinking. To overcome this hurdle, we must embrace problems as opportunities for growth. By acknowledging and addressing challenges head-on, we can foster a culture of innovation and continuous improvement. 🐘\n\nThe Rush to Answers:\nOften, people rush to find answers without thoroughly exploring the questions at hand. The discomfort of uncertainty and the desire to be right drive us towards quick solutions. However, true breakthroughs lie in the depths of thoughtful contemplation and asking the right questions. By slowing down and delving into the underlying questions, we can unlock fresh perspectives and uncover more effective strategies. 🤔\n\nThe Illusion of Insight:\nSometimes, people mistake provocative problem statements for true insights. A well-crafted problem statement may feel insightful, almost like a revelation. However, a genuine insight goes beyond surface-level observations. It opens up new dimensions and sheds light on previously unseen aspects of the problem. To avoid this pitfall, we must dig deeper, challenge assumptions, and seek profound insights that truly transform our strategies. 💡\n\nThe Simplicity Challenge:\nThe use of complex language often hinders effective communication. While some individuals strive to sound educated and sophisticated, simplicity is key. Using simple words and clear messaging enables us to connect with a wider audience and convey our ideas more effectively. Let's embrace the power of simplicity and ensure our message resonates with everyone, from teenagers to seasoned professionals. 🗣️\n\nThe Cloudy Word Cover-Up:\nIn an attempt to appear more profound, some individuals hide behind obscure and convoluted language. Long, complicated words might give the illusion of depth, but they often fail to convey any meaningful substance. To break free from this trap, we must challenge ourselves to express our thoughts clearly and concisely. By landing lateral thoughts and avoiding the fog of complexity, we can craft strategies that are both insightful and accessible. ☁️\n\nStrategy development can be a challenging endeavour, but by recognizing and addressing these common pitfalls, we can enhance our effectiveness and achieve greater success. By shifting our perspective, embracing problems, asking the right questions, seeking genuine insights, simplifying our language, and avoiding unnecessary complexity, we can create strategies that connect with our audience. ✨🚀\n",
    __v: 0,
  },
  {
    _id: "64a179f0eb95b492f35f9aca",
    blogImage: "Url",
    bloghead: "How to Enhance Customer Experience with Privacy Marketing",
    blogContent:
      "As a marketer, you are well aware of the significance of gathering and utilizing customer data to develop personalized and pertinent campaigns. However, you also understand that customers are becoming increasingly conscious and concerned about the handling and safeguarding of their data.",
    blogDate: "2023-09-07T00:00:00.000Z",
    likes: "30",
    blogLongDescription:
      "Have you ever found yourself needing help with creating a strategy? Don't worry; you're not alone! Many people face hurdles and roadblocks along the way. In this blog, we'll delve into some common areas where individuals often get stuck and explore how to overcome these challenges. So, let's embark on a journey of discovery and learn how to navigate the twists and turns of strategy effectively! 🚀\n\nThe \"Me\" Trap:\nOne of the biggest stumbling blocks in strategy development is the inability to see things from the audience's perspective. Instead of focusing on the needs and desires of their target market, people tend to get caught up in their own business and product. They obsess over features and convince themselves that their offering is superior. To overcome this, we must shift our mindset and truly understand our audience's wants, needs, and pain points. By doing so, we can tailor our strategy to provide genuine value and resonate with our customers. 😊\n\nAvoiding the Elephant in the Room:\nWhen problems arise, some individuals become defensive. They perceive problems as personal criticism and avoid discussing them altogether. This defensive attitude hinders the open and honest communication necessary for critical thinking. To overcome this hurdle, we must embrace problems as opportunities for growth. By acknowledging and addressing challenges head-on, we can foster a culture of innovation and continuous improvement. 🐘\n\nThe Rush to Answers:\nOften, people rush to find answers without thoroughly exploring the questions at hand. The discomfort of uncertainty and the desire to be right drive us towards quick solutions. However, true breakthroughs lie in the depths of thoughtful contemplation and asking the right questions. By slowing down and delving into the underlying questions, we can unlock fresh perspectives and uncover more effective strategies. 🤔\n\nThe Illusion of Insight:\nSometimes, people mistake provocative problem statements for true insights. A well-crafted problem statement may feel insightful, almost like a revelation. However, a genuine insight goes beyond surface-level observations. It opens up new dimensions and sheds light on previously unseen aspects of the problem. To avoid this pitfall, we must dig deeper, challenge assumptions, and seek profound insights that truly transform our strategies. 💡\n\nThe Simplicity Challenge:\nThe use of complex language often hinders effective communication. While some individuals strive to sound educated and sophisticated, simplicity is key. Using simple words and clear messaging enables us to connect with a wider audience and convey our ideas more effectively. Let's embrace the power of simplicity and ensure our message resonates with everyone, from teenagers to seasoned professionals. 🗣️\n\nThe Cloudy Word Cover-Up:\nIn an attempt to appear more profound, some individuals hide behind obscure and convoluted language. Long, complicated words might give the illusion of depth, but they often fail to convey any meaningful substance. To break free from this trap, we must challenge ourselves to express our thoughts clearly and concisely. By landing lateral thoughts and avoiding the fog of complexity, we can craft strategies that are both insightful and accessible. ☁️\n\nStrategy development can be a challenging endeavour, but by recognizing and addressing these common pitfalls, we can enhance our effectiveness and achieve greater success. By shifting our perspective, embracing problems, asking the right questions, seeking genuine insights, simplifying our language, and avoiding unnecessary complexity, we can create strategies that connect with our audience. ✨🚀\n",
    __v: 0,
  },
  {
    _id: "64a17a0beb95b492f35f9acd",
    blogImage: "Url",
    bloghead:
      "97% and Beyond: The Art of Building Long-Term Customer Relationships",
    blogContent:
      "You know that feeling when you see a subject line promising a 97% customer retention rate and your first instinct is to roll your eyes and dismiss it as some empty marketing claim? Yeah, I've been there too. But hold on a second, because I've got a game-changing hack to share with you today that might just make you reconsider.",
    blogDate: "2023-09-07T00:00:00.000Z",
    likes: "35",
    blogLongDescription:
      "Have you ever found yourself needing help with creating a strategy? Don't worry; you're not alone! Many people face hurdles and roadblocks along the way. In this blog, we'll delve into some common areas where individuals often get stuck and explore how to overcome these challenges. So, let's embark on a journey of discovery and learn how to navigate the twists and turns of strategy effectively! 🚀\n\nThe \"Me\" Trap:\nOne of the biggest stumbling blocks in strategy development is the inability to see things from the audience's perspective. Instead of focusing on the needs and desires of their target market, people tend to get caught up in their own business and product. They obsess over features and convince themselves that their offering is superior. To overcome this, we must shift our mindset and truly understand our audience's wants, needs, and pain points. By doing so, we can tailor our strategy to provide genuine value and resonate with our customers. 😊\n\nAvoiding the Elephant in the Room:\nWhen problems arise, some individuals become defensive. They perceive problems as personal criticism and avoid discussing them altogether. This defensive attitude hinders the open and honest communication necessary for critical thinking. To overcome this hurdle, we must embrace problems as opportunities for growth. By acknowledging and addressing challenges head-on, we can foster a culture of innovation and continuous improvement. 🐘\n\nThe Rush to Answers:\nOften, people rush to find answers without thoroughly exploring the questions at hand. The discomfort of uncertainty and the desire to be right drive us towards quick solutions. However, true breakthroughs lie in the depths of thoughtful contemplation and asking the right questions. By slowing down and delving into the underlying questions, we can unlock fresh perspectives and uncover more effective strategies. 🤔\n\nThe Illusion of Insight:\nSometimes, people mistake provocative problem statements for true insights. A well-crafted problem statement may feel insightful, almost like a revelation. However, a genuine insight goes beyond surface-level observations. It opens up new dimensions and sheds light on previously unseen aspects of the problem. To avoid this pitfall, we must dig deeper, challenge assumptions, and seek profound insights that truly transform our strategies. 💡\n\nThe Simplicity Challenge:\nThe use of complex language often hinders effective communication. While some individuals strive to sound educated and sophisticated, simplicity is key. Using simple words and clear messaging enables us to connect with a wider audience and convey our ideas more effectively. Let's embrace the power of simplicity and ensure our message resonates with everyone, from teenagers to seasoned professionals. 🗣️\n\nThe Cloudy Word Cover-Up:\nIn an attempt to appear more profound, some individuals hide behind obscure and convoluted language. Long, complicated words might give the illusion of depth, but they often fail to convey any meaningful substance. To break free from this trap, we must challenge ourselves to express our thoughts clearly and concisely. By landing lateral thoughts and avoiding the fog of complexity, we can craft strategies that are both insightful and accessible. ☁️\n\nStrategy development can be a challenging endeavour, but by recognizing and addressing these common pitfalls, we can enhance our effectiveness and achieve greater success. By shifting our perspective, embracing problems, asking the right questions, seeking genuine insights, simplifying our language, and avoiding unnecessary complexity, we can create strategies that connect with our audience. ✨🚀\n",
    __v: 0,
  },
  {
    _id: "64a17a14eb95b492f35f9ad3",
    blogImage: "Url",
    bloghead:
      "97% and Beyond: The Art of Building Long-Term Customer Relationships",
    blogContent:
      "You know that feeling when you see a subject line promising a 97% customer retention rate and your first instinct is to roll your eyes and dismiss it as some empty marketing claim? Yeah, I've been there too. But hold on a second, because I've got a game-changing hack to share with you today that might just make you reconsider.",
    blogDate: "2023-07-14T00:00:00.000Z",
    likes: "35",
    blogLongDescription:
      "Have you ever found yourself needing help with creating a strategy? Don't worry; you're not alone! Many people face hurdles and roadblocks along the way. In this blog, we'll delve into some common areas where individuals often get stuck and explore how to overcome these challenges. So, let's embark on a journey of discovery and learn how to navigate the twists and turns of strategy effectively! 🚀\n\nThe \"Me\" Trap:\nOne of the biggest stumbling blocks in strategy development is the inability to see things from the audience's perspective. Instead of focusing on the needs and desires of their target market, people tend to get caught up in their own business and product. They obsess over features and convince themselves that their offering is superior. To overcome this, we must shift our mindset and truly understand our audience's wants, needs, and pain points. By doing so, we can tailor our strategy to provide genuine value and resonate with our customers. 😊\n\nAvoiding the Elephant in the Room:\nWhen problems arise, some individuals become defensive. They perceive problems as personal criticism and avoid discussing them altogether. This defensive attitude hinders the open and honest communication necessary for critical thinking. To overcome this hurdle, we must embrace problems as opportunities for growth. By acknowledging and addressing challenges head-on, we can foster a culture of innovation and continuous improvement. 🐘\n\nThe Rush to Answers:\nOften, people rush to find answers without thoroughly exploring the questions at hand. The discomfort of uncertainty and the desire to be right drive us towards quick solutions. However, true breakthroughs lie in the depths of thoughtful contemplation and asking the right questions. By slowing down and delving into the underlying questions, we can unlock fresh perspectives and uncover more effective strategies. 🤔\n\nThe Illusion of Insight:\nSometimes, people mistake provocative problem statements for true insights. A well-crafted problem statement may feel insightful, almost like a revelation. However, a genuine insight goes beyond surface-level observations. It opens up new dimensions and sheds light on previously unseen aspects of the problem. To avoid this pitfall, we must dig deeper, challenge assumptions, and seek profound insights that truly transform our strategies. 💡\n\nThe Simplicity Challenge:\nThe use of complex language often hinders effective communication. While some individuals strive to sound educated and sophisticated, simplicity is key. Using simple words and clear messaging enables us to connect with a wider audience and convey our ideas more effectively. Let's embrace the power of simplicity and ensure our message resonates with everyone, from teenagers to seasoned professionals. 🗣️\n\nThe Cloudy Word Cover-Up:\nIn an attempt to appear more profound, some individuals hide behind obscure and convoluted language. Long, complicated words might give the illusion of depth, but they often fail to convey any meaningful substance. To break free from this trap, we must challenge ourselves to express our thoughts clearly and concisely. By landing lateral thoughts and avoiding the fog of complexity, we can craft strategies that are both insightful and accessible. ☁️\n\nStrategy development can be a challenging endeavour, but by recognizing and addressing these common pitfalls, we can enhance our effectiveness and achieve greater success. By shifting our perspective, embracing problems, asking the right questions, seeking genuine insights, simplifying our language, and avoiding unnecessary complexity, we can create strategies that connect with our audience. ✨🚀\n",
    __v: 0,
  },
];

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProjectDataFromApi = async () => {
    setIsLoading(true);
    const data = await Axios(projectUrl);
    const soretedData = data.data.sort(
      (objA, objB) =>
        Number(new Date(objB.blogDate)) - Number(new Date(objA.blogDate))
    );
    setBlogData(soretedData);
    setIsLoading(false);
  };

  useEffect(() => {
    getProjectDataFromApi();
  }, []);

  return (
    <>
      <div>
        <HomeSectionNumber number={"06"} content={"Blogs"} />
      </div>
      <div className="home-blog-section-main-div">
        {blogData.slice(0, 3).map((eachData) => (
          <HomeBlogCard blogData={eachData} />
        ))}
      </div>
      <Link className="home-blog-section-link-button" to="/blogs">
        <div className="home-blog-button-section">
          <button className="outline-button-2">View More</button>
        </div>
      </Link>
    </>
  );
};

export default BlogPage;
