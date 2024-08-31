import React from "react";
import { useSelector } from "react-redux";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isCollapsed = !isMenuOpen; // Assuming collapsed state means `!isMenuOpen`

  return (
    <div className={`p-4 shadow-lg ${isCollapsed ? 'w-16' : 'w-48'} transition-width duration-300`}>
      <ul className="space-y-2">
        <li className={`flex items-center ${isCollapsed ? 'flex-col' : 'flex-row'} p-2 rounded-md hover:bg-gray-200 cursor-pointer ${isCollapsed ? 'space-y-1' : 'space-x-2'}`}>
          <span className="material-icons text-gray-700">home</span>
          {!isCollapsed && <span className="text-sm">Home</span>}
        </li>
        <li className={`flex items-center ${isCollapsed ? 'flex-col' : 'flex-row'} p-2 rounded-md hover:bg-gray-200 cursor-pointer ${isCollapsed ? 'space-y-1' : 'space-x-2'}`}>
          <span className="material-icons text-gray-700">video_library</span>
          {!isCollapsed && <span className="text-sm">Shorts</span>}
        </li>
        <li className={`flex items-center ${isCollapsed ? 'flex-col' : 'flex-row'} p-2 rounded-md hover:bg-gray-200 cursor-pointer ${isCollapsed ? 'space-y-1' : 'space-x-2'}`}>
          <span className="material-icons text-gray-700">video_camera_front</span>
          {!isCollapsed && <span className="text-sm">Video</span>}
        </li>
        <li className={`flex items-center ${isCollapsed ? 'flex-col' : 'flex-row'} p-2 rounded-md hover:bg-gray-200 cursor-pointer ${isCollapsed ? 'space-y-1' : 'space-x-2'}`}>
          <span className="material-icons text-gray-700">live_tv</span>
          {!isCollapsed && <span className="text-sm">Live</span>}
        </li>
      </ul>

      {!isCollapsed && (
        <>
          <h1 className="font-bold pt-4">Subscription</h1>
          <ul className="space-y-2">
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">music_note</span>
              <span className="text-sm">Music</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">sports_soccer</span>
              <span className="text-sm">Sports</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">gamepad</span>
              <span className="text-sm">Gaming</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">movie</span>
              <span className="text-sm">Movies</span>
            </li>
          </ul>

          <h1 className="font-bold pt-4">Other</h1>
          <ul className="space-y-2">
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">library_music</span>
              <span className="text-sm">Music</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">sports_baseball</span>
              <span className="text-sm">Sports</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">sports_esports</span>
              <span className="text-sm">Gaming</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">movie_filter</span>
              <span className="text-sm">Movies</span>
            </li>
          </ul>

          <h1 className="font-bold pt-4">You</h1>
          <ul className="space-y-2">
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">person</span>
              <span className="text-sm">Your Channel</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">history</span>
              <span className="text-sm">History</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">playlist_play</span>
              <span className="text-sm">Playlist</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">video_library</span>
              <span className="text-sm">Your Videos</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">watch_later</span>
              <span className="text-sm">Watch Later</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">thumb_up</span>
              <span className="text-sm">Liked Videos</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">file_download</span>
              <span className="text-sm">Downloads</span>
            </li>
            <li className="flex items-center flex-row p-2 rounded-md hover:bg-gray-200 cursor-pointer space-x-2">
              <span className="material-icons text-gray-700">video_library</span>
              <span className="text-sm">Your Clips</span>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default SideBar;
