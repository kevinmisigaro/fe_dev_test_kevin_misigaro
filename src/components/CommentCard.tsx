import { getInitials } from "@/utils/functions";
import { IComment, IUserProfile } from "@/utils/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

function CommentCard({ comment }: { comment: IComment }) {
  const [userProfile, setUserProfile] = useState<IUserProfile>();

  const getUserData = async () => {
    try {
      const response = await axios(`/api/profiles/${comment.profileId}`);

      if (response) {
        setUserProfile(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex flex-row justify-start items-center gap-x-4">
      {userProfile?.id == 1 ? (
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src={userProfile?.imageUrl} />
          </div>
        </div>
      ) : (
        <div className="avatar placeholder">
          <div className="bg-gray-600 text-white rounded-full w-20">
            <span className="text-xl">
              {getInitials(userProfile?.name ?? "")}
            </span>
          </div>
        </div>
      )}
      <div className="flex flex-col">
        <p className="text-xl">{comment.text}</p>
        <p>{userProfile?.name}</p>
      </div>
    </div>
  );
}

export default CommentCard;
