import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai"


const UserEmailsAdmin = () => {
  const [userEmailData, setUserEMailData] = useState([]);
  console.log(userEmailData)

  //   const blogYear = new Date(blogData.blogDate).getFullYear();
  //   const blogDay = new Date(blogData.blogDate).getDate();
  //   const blogMonthnumber = new Date(blogData.blogDate).getMonth();

  //   function getMonthName(monthNumber) {
  //     const date = new Date();
  //     date.setMonth(monthNumber);
  //     return date.toLocaleString("en-US", { month: "short" });
  //   }

  //   const blogMonth = getMonthName(blogMonthnumber);

  useEffect(() => {
    const fetcingDataFromEMailAp = async () => {
      const response = await fetch("http://localhost:3005/subscribedEmails");
      const data = await response.json();
      //   const soretedData = data.data.sort(
      //     (objA, objB) =>
      //       Number(new Date(objB.blogDate)) - Number(new Date(objA.blogDate))
      //   );
      setUserEMailData(data.reverse());
    };
    fetcingDataFromEMailAp();
  }, []);

  const onDeleteHandler = (id) => {
    console.log(id)
    axios
      .delete(`http://localhost:3005/subscribedEmails/${id}`)
      .then((res) => setUserEMailData(res.data));
  };

  return (
    <div className="admin-user-email-div">
      <div>
        {userEmailData.map((eachEmail) => (
          <>
            <div className="admi-user-emain-para">
              <p>{eachEmail.userEmail} --- {eachEmail.date.slice(0, 10)}</p>  <button className="backend-red-button-icon" onClick={() => onDeleteHandler(eachEmail._id)}><AiFillDelete /></button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserEmailsAdmin;
