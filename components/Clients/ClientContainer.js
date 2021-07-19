import React from 'react';

import Client from './Client';

const ClientContainer = ({ clients = [1, 2, 3], show, setShow }) => {
  return (
    <div tw="w-full sm:px-6">
      <div tw="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div tw="sm:flex items-center justify-between">
          <p tw="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Projects
          </p>
          <div>
            <button tw="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <p tw="text-sm font-medium leading-none text-white">
                New Project
              </p>
            </button>
          </div>
        </div>
      </div>
      <div tw="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table tw="w-full whitespace-nowrap">
          <thead>
            <tr tw="h-16 w-full text-sm leading-none text-gray-800">
              <th tw="font-normal text-left pl-4">Project</th>
              <th tw="font-normal text-left pl-12">Progress</th>
              <th tw="font-normal text-left pl-12">Tasks</th>
              <th tw="font-normal text-left pl-20">Budget</th>
              <th tw="font-normal text-left pl-20">Deadline</th>
              <th tw="font-normal text-left pl-16">Members</th>
            </tr>
          </thead>
          <tbody tw="w-full">
            <Client show={show} setShow={setShow} />
            <Client show={show} setShow={setShow} />
            <Client show={show} setShow={setShow} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientContainer;
