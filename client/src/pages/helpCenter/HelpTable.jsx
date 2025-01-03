import React from "react";
import HelpTableRow from "./HelpTableRow";
import { useViewHelpsQuery } from "../../services/apiSlice";

const HelpTable = ({ data }) => {
  const responseInfo = useViewHelpsQuery();
console.log(responseInfo.data);
  return (
    <div
      style={{ width: "80%" }}
      className="relative overflow-x-auto shadow-md sm:rounded-lg  container flex flex-col px-4 py-8 justify-center items-center mx-auto md:p-8"
    >
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          {responseInfo?.data?.Help.length ? (
            <>
              {responseInfo.data?.Help?.map((help, i) => (
                <HelpTableRow
                  key={help._id}
                  help={help}
                />
              ))}
            </>
          ) : (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4" colSpan={7}>
                No data available to show.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HelpTable;
