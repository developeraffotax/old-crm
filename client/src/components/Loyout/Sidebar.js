"use client";
import React, { useEffect } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { BsBell, BsFileEarmarkText } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LiaUsersCogSolid } from "react-icons/lia";
import { TbFileAnalytics } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdTaskAlt } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";

export default function Sidebar({ hide, setHide }) {
  const router = useNavigate();
  const { auth, setAuth, active, setActive } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const fileIdFromPath = pathArray[1];
    setActive(fileIdFromPath);

    // exlint-disable-next-line
  }, [setActive]);

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="w-full h-screen py-2 ">
      <div className=" hidden sm:flex items-center justify-end pr-1 ">
        {hide ? (
          <AiOutlineMenuUnfold
            onClick={() => setHide(!hide)}
            className="h-6 w-6 cursor-pointer hover:text-fuchsia-600 transition-all duration-150"
          />
        ) : (
          <AiOutlineMenuFold
            onClick={() => setHide(!hide)}
            className="h-6 w-6 cursor-pointer hover:text-fuchsia-600 transition-all duration-150"
          />
        )}
      </div>
      {/* Profile */}
      {/* <div className="relative flex items-center justify-center flex-col gap-2 ">
        <div
          className={`relative ${
            hide ? "w-[3rem] h-[3rem]" : "w-[4rem] h-[4rem]"
          } rounded-full object-fill overflow-hidden mt-2 border-[2px] shadow-md shadow-gray-300  filter drop-shadow-md active:scale-[1.03] select-none`}
          style={{
            border: `2px solid rgb(2, 68, 2)`,
          }}
        >
          <img
            src={`${process.env.REACT_APP_API_URL}/api/v1/user/user-avatar/${auth?.user?.id}`}
            alt="Admin"
            className={`rounded-full ${
              hide ? "w-[3rem] h-[3rem]" : "w-[4rem] h-[4rem]"
            }`}
            loader={loaderProp}
          />
        </div>
        <h3 className="text-[18px] font-semibold text-black  fon">
          {hide ? "" : auth?.user?.name}
        </h3>
      </div> */}
      {/*  */}
      <div className="relative w-full  py-3 h-screen pb-[2rem] overflow-y-auto message">
        <div className="relative w-full   flex flex-col gap-4 overflow-y-auto allMessages py-1 pb-6 pr-1 message">
          {/* 1 */}
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/dashboard");
            }}
          >
            <div
              className="adminbtn absolute h-full sidebtn z-[20]" //
              style={{
                width: active === "dashboard" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <LuLayoutDashboard
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "dashboard" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <LuLayoutDashboard
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "dashboard" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400]"
                    style={{ color: active === "dashboard" && "#fff" }}
                  >
                    Dashboard
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* 2 */}
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/my_list");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "my_list" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <LiaClipboardListSolid
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "my_list" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <LiaClipboardListSolid
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "my_list" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400]"
                    style={{ color: active === "my_list" && "#fff" }}
                  >
                    My Lists
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* 3 */}
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/tasks");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "tasks" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <MdTaskAlt
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "tasks" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <MdTaskAlt
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "tasks" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400]"
                    style={{ color: active === "tasks" && "#fff" }}
                  >
                    Tasks
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* 4 */}
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/job-planning");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "job-planning" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <BsBriefcase
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "job-planning" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <BsBriefcase
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "job-planning" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400]"
                    style={{ color: active === "job-planning" && "#fff" }}
                  >
                    Jobs
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* 5 */}
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/blogs");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "blogs" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <BsFileEarmarkText
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "blogs" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <BsFileEarmarkText
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "blogs" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400]"
                    style={{ color: active === "blogs" && "#fff" }}
                  >
                    Tickets
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* 6 */}
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/notifications");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "notifications" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <BsBell
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "notifications" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <BsBell
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "notifications" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400]"
                    style={{ color: active === "notifications" && "#fff" }}
                  >
                    Leads
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* 7 */}
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/subscription");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "subscription" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <BsCashCoin
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "subscription" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <BsCashCoin
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "subscription" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{ color: active === "subscription" && "#fff" }}
                  >
                    Proposals
                  </span>
                </div>
              )}
            </div>
          </div>
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/subscription");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "subscription" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <BsCashCoin
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "subscription" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <BsCashCoin
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "subscription" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{ color: active === "subscription" && "#fff" }}
                  >
                    Sales
                  </span>
                </div>
              )}
            </div>
          </div>
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/subscription");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "subscription" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <BsCashCoin
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "subscription" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <BsCashCoin
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "subscription" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{ color: active === "subscription" && "#fff" }}
                  >
                    Templates
                  </span>
                </div>
              )}
            </div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <BsCashCoin
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "subscription" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <BsCashCoin
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "subscription" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{ color: active === "subscription" && "#fff" }}
                  >
                    Goals
                  </span>
                </div>
              )}
            </div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <BsCashCoin
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "subscription" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <BsCashCoin
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "subscription" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{ color: active === "subscription" && "#fff" }}
                  >
                    Subscription
                  </span>
                </div>
              )}
            </div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <BsCashCoin
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "subscription" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <BsCashCoin
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "subscription" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{ color: active === "subscription" && "#fff" }}
                  >
                    Recurring Tasks
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* HR */}
          <hr className="my-2" />
          <h4 className="text-[16] font-semibold px-2">Analytics</h4>

          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/user-analytics");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "user-analytics" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <LiaUsersCogSolid
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "user-analytics" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <LiaUsersCogSolid
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "user-analytics" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{ color: active === "user-analytics" && "#fff" }}
                  >
                    User Analytics
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 2 */}
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/channel-analytics");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "channel-analytics" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <TbBrandGoogleAnalytics
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "channel-analytics" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <TbBrandGoogleAnalytics
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{
                      color: active === "channel-analytics" && "#fff",
                    }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{
                      color: active === "channel-analytics" && "#fff",
                    }}
                  >
                    Channels Analytics
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 3 */}
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/subscription-analytics");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "subscription-analytics" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <TbFileAnalytics
                  className="h-7 w-7 cursor-pointer ml-1"
                  style={{
                    color: active === "subscription-analytics" && "#fff",
                  }}
                />
              ) : (
                <div className="flex items-center gap-1">
                  <TbFileAnalytics
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{
                      color: active === "subscription-analytics" && "#fff",
                    }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{
                      color: active === "subscription-analytics" && "#fff",
                    }}
                  >
                    Subscription Analytic
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* 4 */}

          <hr className="my-2" />
          <h4 className="text-[16] font-semibold px-2">Settings</h4>
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={() => {
              router("/layout-settings");
            }}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "layout-settings" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <GoGear
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "layout-settings" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <GoGear
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "layout-settings" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{ color: active === "layout-settings" && "#fff" }}
                  >
                    Layout Settings
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Logout */}
          <hr className="my-2" />
          <div
            className=" mainbtn relative h-[2.6rem] rounded-r-3xl cursor-pointer shadow-sm shadow-gray-300 bg-gray-200  filter drop-shadow-md  overflow-hidden"
            onClick={handleLogout}
          >
            <div
              className="adminbtn absolute h-full  sidebtn z-[20]"
              style={{
                width: active === "layout-settings" && "100%",
                background: `rgb(2, 68, 2)`,
              }}
            ></div>
            <div className="relative w-full h-full flex items-center px-2 z-30 bg-transparent">
              {hide ? (
                <RiLogoutCircleLine
                  className="h-7 w-7 cursor-pointer ml-2"
                  style={{ color: active === "layout-settings" && "#fff" }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <RiLogoutCircleLine
                    className="h-6 w-6 cursor-pointer ml-2"
                    style={{ color: active === "layout-settings" && "#fff" }}
                  />
                  <span
                    className="text-[16px] font-[400] "
                    style={{ color: active === "layout-settings" && "#fff" }}
                  >
                    Logout
                  </span>
                </div>
              )}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
