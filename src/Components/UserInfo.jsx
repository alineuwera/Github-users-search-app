import { MapPin, Link } from "lucide-react";

function UserInfo({ user }) {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-start flex-wrap">
        <img
          src={user.avatar_url}
          alt="Avatar"
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.name || "Not Available"}
          </h2>
          <p className="text-blue-600">@{user.login}</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {user.bio || "This profile has no bio."}
          </p>
        </div>
      </div>

      <div className="flex justify-around bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mt-6">
        <div>
          <p className="text-xs text-gray-500">Repos</p>
          <p className="font-bold text-gray-900 dark:text-white">{user.public_repos}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Followers</p>
          <p className="font-bold text-gray-900 dark:text-white">{user.followers}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Following</p>
          <p className="font-bold text-gray-900 dark:text-white">{user.following}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-700 dark:text-gray-300">
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {user.location || "Not Available"}
        </p>
        <p className="flex items-center gap-2">
          <Link className="h-4 w-4" />
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            https://github.com/{user.login}
          </a>
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
