import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddComponent = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const addOne = async () => {
    const res = await axios.post(`http://localhost:8080/api/album/add`, form);
    navigate("/");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClickAdd = () => {
    console.log("handleclickAdd  form: " + form);
    addOne();
  };

  return (
    <div>
      <div className="border-2 border-sky-200 mt-10 m-2 p-4">
        <div className="flex justify-center">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
            <input
              className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
              name="albumTitle"
              type="text"
              value={form.albumTitle}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">ARTIST</div>
            <input
              className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
              name="artistName"
              type="text"
              value={form.artistName}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">이미지url</div>
            <input
              className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
              name="imageUrl"
              type="text"
              value={form.imageUrl}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
            <button
              className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
              type="button"
              onClick={handleClickAdd}
            >
              추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComponent;
