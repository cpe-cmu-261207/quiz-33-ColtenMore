import React from "react";
import { comments } from "../libs/comments";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
    <div className="d-flex align-items-center gap-3">
      <img
        src="/profileImages/profile.jpg"
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <span className="fw-semibold fs-5 text-white">
        Thadthon Prechamanasart 620610789
      </span>
    </div>
    <span className="text-white">
      Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหม #261207
    </span>
    <div className="d-flex align-items-center gap-1">
      <img src="/like.svg" width={20}></img>
      <span style={{ color: "#B0B3B8" }}>727 คน</span>
    </div>
    <hr className="m-0 border" />
  </div>
    )
}
