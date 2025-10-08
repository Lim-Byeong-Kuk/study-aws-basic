import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListComponent = () => {
  const [albums, setAlbums] = useState([
    { albumId: 0, albumTitle: "", artistName: "", imageUrl: "" },
  ]);

  useEffect(() => {
    const getList = async () => {
      const res = await axios.get(`http://localhost:8080/api/album/list`);
      console.log(res.data);
      setAlbums(res.data);
    };
    getList();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 상단 제목 영역 */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">앨범 목록</h1>
          <Link
            to="/add"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            등록하기
          </Link>
        </div>

        {/* 앨범 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <div
              key={album.albumId}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={album.imageUrl}
                  alt={album.albumTitle}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {album.albumTitle}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{album.artistName}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 앨범이 없을 때 */}
        {albums.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            등록된 앨범이 없습니다 😢
          </div>
        )}
      </div>
    </div>
  );
};

export default ListComponent;
