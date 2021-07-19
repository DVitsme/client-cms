import React from 'react';

const Client = ({ show, setShow }) => {
  return (
    <tr tw="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
      <td tw="pl-4 cursor-pointer">
        <div tw="flex items-center">
          <div tw="w-10 h-10">
            <img
              tw="w-full h-full"
              src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
            />
          </div>
          <div tw="pl-4">
            <p tw="font-medium">UX Design &amp; Visual Strategy</p>
            <p tw="text-xs leading-3 text-gray-600 pt-2">Herman Group</p>
          </div>
        </div>
      </td>
      <td tw="pl-12">
        <p tw="text-sm font-medium leading-none text-gray-800">72%</p>
        <div tw="w-24 h-3 bg-gray-100 rounded-full mt-2">
          <div tw="w-20 h-3 bg-green-400 rounded-full" />
        </div>
      </td>
      <td tw="pl-12">
        <p tw="font-medium">32/47</p>
        <p tw="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
      </td>
      <td tw="pl-20">
        <p tw="font-medium">$13,000</p>
        <p tw="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
      </td>
      <td tw="pl-20">
        <p tw="font-medium">22.12.21</p>
        <p tw="text-xs leading-3 text-gray-600 mt-2">34 days</p>
      </td>
      <td tw="pl-16">
        <div tw="flex items-center">
          <img
            tw="shadow-md w-8 h-8 rounded-full"
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
          />
          <img
            tw="shadow-md w-8 h-8 rounded-full -ml-2"
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
          />
          <img
            tw="shadow-md w-8 h-8 rounded-full -ml-2"
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
          />
          <img
            tw="shadow-md w-8 h-8 rounded-full -ml-2"
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
          />
        </div>
      </td>
      <td tw="px-7 2xl:px-0">
        {show == 0 ? (
          <button onClick={() => setShow(null)} tw="focus:outline-none pl-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                stroke="#A1A1AA"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                stroke="#A1A1AA"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                stroke="#A1A1AA"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setShow(0)} tw="focus:outline-none pl-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                stroke="#A1A1AA"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                stroke="#A1A1AA"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                stroke="#A1A1AA"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {show == 0 && (
          <div tw="bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
            <div tw="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
              <p>Edit</p>
            </div>
            <div tw="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
              <p>Delete</p>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Client;
