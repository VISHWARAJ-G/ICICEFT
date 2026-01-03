import React from "react";

function AdvisoryMembers({ AdvisoryCommittee, IAdvisory }) {
  return (
    <div className="md:px-21 sm:px-7 px-3 py-6 overflow-x-auto bg-gray-200">
      <table className="min-w-[100px] w-full border-collapse bg-white">
        <thead className="bg-slate-300 text-left border-t-2 border-gray-200 md:text-base sm:text-sm text-xs">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Designation</th>
            <th className="p-4">Institution</th>
            {IAdvisory ? (
              <th className="p-4">Country</th>
            ) : (
              <th className="p-4">State</th>
            )}
          </tr>
        </thead>
        <tbody>
          {AdvisoryCommittee.map((obj, ind) => {
            console.log(obj);
            return (
              <tr
                className={`border-t-2 border-gray-200 md:text-base sm:text-sm text-xs ${
                  ind === AdvisoryCommittee.length - 1 ? "border-b-2" : ""
                }`}
              >
                <td className="p-4">{obj.name}</td>
                <td className="p-4">{obj.designation}</td>
                <td className="p-4">{obj.institution}</td>
                {IAdvisory ? (
                  <td className="p-4">{obj.country}</td>
                ) : (
                  <td className="p-4">{obj.state}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdvisoryMembers;
