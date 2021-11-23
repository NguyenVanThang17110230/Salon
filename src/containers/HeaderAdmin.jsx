import React from "react";

const HeaderAdmin = () => {
  return (
    <div className="py-4 px-3 d-flex justify-content-between align-items-center border-bottom">
      <div className="input-group w-25">
        <input id="no-outline" type="text" className="form-control" />
        <span
          className="input-group-text text-white"
          style={{ backgroundColor: "#5277DF" }}
        >
          Search
        </span>
      </div>
      <div className="px-3 py-2 d-flex border align-items-center">
        <div className="d-flex me-5">
          <div className="position-relative me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bell"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffec00"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
            <div className="rounded-circle d-flex align-items-center justify-content-center text-white position-absolute top-0 end-0" style={{width:'15px',height:'15px',backgroundColor:'red',fontSize:'8px'}}>1</div>
          </div>
          <div className="position-relative me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-message-2"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffec00"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
              <line x1={8} y1={9} x2={16} y2={9} />
              <line x1={8} y1={13} x2={14} y2={13} />
            </svg>
            <div className="rounded-circle d-flex align-items-center justify-content-center text-white position-absolute top-0 end-0" style={{width:'15px',height:'15px',backgroundColor:'red',fontSize:'8px'}}>1</div>
          </div>
        </div>
        <div>
          Luong Vi Minh
          <img className="ms-1 rounded-pill" src={require("assets/img/avt.png").default} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
