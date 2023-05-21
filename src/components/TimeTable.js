import React from 'react'
import './TimeTable.css'


function TimeTable() {
  return (
    <div className='timetable'>
      <table className='timetable-table'>
        <tbody>
          <tr>
            <td>School Begins</td>
            <td>8:50 a.m.</td>
          </tr>
          <tr>
            <td>Period 1 (75 min)</td>
            <td>8:55 a.m. - 10:10 a.m.</td>
          </tr>
          <tr>
            <td>Period 2  (75 min)</td>
            <td>10:15 a.m. - 11:30 a.m.</td>
          </tr>
          <tr>
            <td>Lunch  (75 min)</td>
            <td>11:35 a.m. - 12:50 p.m.</td>
          </tr>
          <tr>
            <td>Period 3 (75 min)</td>
            <td>12:55 p.m. - 2:10 p.m.</td>
          </tr>
          <tr>
            <td>Period 4 (75 min)</td>
            <td>2:15 p.m. - 3:30 p.m.</td>
          </tr>
          <tr>
            <td>School ends</td>
            <td>3:30 p.m.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TimeTable