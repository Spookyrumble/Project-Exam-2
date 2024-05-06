import React, { useState } from "react";
import {
  PiAt,
  PiImage,
  PiPassword,
  PiTextAUnderline,
  PiUser,
} from "react-icons/pi";
import useRegister from "../../API/auth/Register";
import { registerUrl } from "../../../utils/constants";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: {
      url: "",
      alt: "",
    },
    venueManager: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAvatarChange = (event) => {
    setFormData({
      ...formData,
      avatar: {
        ...formData.avatar,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    useRegister("POST", registerUrl, formData);
  };

  return (
    <div className="flex justify-center bg-secondary">
      <form className="flex-col align-middle bg-accentTwo p-4 rounded-25">
        <div className="border-b pb-12">
          <h2 className="leading-7 text-gray-900">Register your Profile</h2>
          <p className="mt-1 text-sm text-wrap leading-6 text-gray-600">
            Some of this information will be displayed publicly so be careful
            what you share.
          </p>

          <div className="text-left mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-4">
            <div className="sm:col-span-4">
              <div className="flex">
                <PiUser className="mr-2 h-6 w-6 text-gray-900" />
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="username"
                  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your username"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <div className="flex">
                <PiAt className="mr-2 h-6 w-6 text-gray-900" />
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="first.last@stud.noroff.no"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <div className="flex">
                <PiPassword className="mr-2 h-6 w-6 text-gray-900" />
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <div className="flex">
                <PiImage className="mr-2 h-6 w-6 text-gray-900" />
                <label
                  htmlFor="avatarUrl"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Avatar URL
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleAvatarChange}
                  type="text"
                  name="avatarUrl"
                  id="avatarUrl"
                  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="https://img.service.com/avatar.jpg"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <div className="flex">
                <PiTextAUnderline className="mr-2 h-6 w-6 text-gray-900" />
                <label
                  htmlFor="avatarAlt"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Avatar Alt Text
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleAvatarChange}
                  type="text"
                  name="avatarAlt"
                  id="avatarAlt"
                  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="My avatar alt text"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Venue Manager
              </label>
              <div className="mt-2">
                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  name="venueManager"
                  id="venueManager"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 align-middle"
                />
                <label htmlFor="venueManager" className="ml-2">
                  I am a venue manager
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="btn-revert text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="btn rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;