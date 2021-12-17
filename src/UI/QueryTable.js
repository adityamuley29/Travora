import React from "react";
import "./QueryTable.css"

function QueryTable() {
  return (
    <div className="QueryTable">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Booking Id</th>
            <th scope="col">Date of Booking</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default QueryTable;
