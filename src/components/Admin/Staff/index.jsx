import Admin from "layouts/Admin";
import React from "react";

const AdminStaff = () => {
  return (
    <Admin>
      <div className="border rounded-3 p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <div className="me-3">Show</div>
            <input
              type="number"
              className="form-control me-3"
              style={{ backgroundColor: "#C4C4C4" }}
              min={1}
              max={100}
            />
            <div>entries</div>
          </div>
          <div className="d-flex">
            <label htmlFor="inputPassword" className="col-form-label me-3">
              Search
            </label>

            <input type="text" className="form-control" id="no-outline" />
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Age</th>
              <th scope="col">Start date</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="fw-normal" scope="row">
                John
              </th>
              <td>Admin</td>
              <td>32</td>
              <td>2021/11/21</td>
              <td>$11,021</td>
            </tr>
            <tr>
              <th className="fw-normal" scope="row">
                John
              </th>
              <td>Admin</td>
              <td>32</td>
              <td>2021/11/21</td>
              <td>$11,021</td>
            </tr>
            <tr>
              <th className="fw-normal" scope="row">
                John
              </th>
              <td>Admin</td>
              <td>32</td>
              <td>2021/11/21</td>
              <td>$11,021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Admin>
  );
};

export default AdminStaff;
