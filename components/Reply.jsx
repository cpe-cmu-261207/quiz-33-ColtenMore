import React from "react";
import { comments } from "../libs/comments";

export default function Reply(props) {
  return (
    props.prop.map((x)=>(
      <div className="d-flex gap-2 my-2 ps-5">
  <img
    src={x.userImagePath}
    width="48"
    height="48"
    className="rounded-circle"
    style={{ objectFit: "cover" }}
  />
  <div
    className="rounded rounded-3 p-2"
    style={{ backgroundColor: "#3A3B3C" }}
  >
    <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
      {x.username}
    </span>
    <br />
    <span style={{ color: "#E4E6EB" }}>{x.replyText}</span>
  </div>
</div>
    ))

//   <div className="d-flex gap-2 my-2 ps-5">
//   <img
//     src="/profileImages/puppy.jpg"
//     width="48"
//     height="48"
//     className="rounded-circle"
//     style={{ objectFit: "cover" }}
//   />
//   <div
//     className="rounded rounded-3 p-2"
//     style={{ backgroundColor: "#3A3B3C" }}
//   >
//     <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
//       หมาน้อย
//     </span>
//     <br />
//     <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
//   </div>
// </div>
);
}
