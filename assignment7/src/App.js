import React, { useState, useEffect } from "react";
import "./IplPointsTable.css";

const IplPointsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Hardcoded IPL 2022 data
    const data = [
      { team: "Gujarat Titans", matches: 14, wins: 10, losses: 4, points: 20, nrr: 0.316 },
      { team: "Rajasthan Royals", matches: 14, wins: 9, losses: 5, points: 18, nrr: 0.298 },
      { team: "Lucknow Super Giants", matches: 14, wins: 9, losses: 5, points: 18, nrr: 0.251 },
      { team: "Royal Challengers Bangalore", matches: 14, wins: 8, losses: 6, points: 16, nrr: -0.253 },
      { team: "Delhi Capitals", matches: 14, wins: 7, losses: 7, points: 14, nrr: 0.204 },
      { team: "Punjab Kings", matches: 14, wins: 7, losses: 7, points: 14, nrr: 0.126 },
      { team: "Kolkata Knight Riders", matches: 14, wins: 6, losses: 8, points: 12, nrr: 0.146 },
      { team: "Sunrisers Hyderabad", matches: 14, wins: 6, losses: 8, points: 12, nrr: -0.379 },
      { team: "Chennai Super Kings", matches: 14, wins: 4, losses: 10, points: 8, nrr: -0.203 },
      { team: "Mumbai Indians", matches: 14, wins: 4, losses: 10, points: 8, nrr: -0.506 },
    ];

    // Sort by NRR descending
    const sortedData = data.sort((a, b) => b.nrr - a.nrr);
    setTeams(sortedData);
  }, []);

  return (
    <div className="points-table-container">
      <h2>IPL 2022 Points Table (Sorted by NRR Descending)</h2>
      <table className="points-table">
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className={index < 4 ? "qualifier" : ""}>
              <td>{team.team}</td>
              <td>{team.matches}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.points}</td>
              <td>{team.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IplPointsTable;
