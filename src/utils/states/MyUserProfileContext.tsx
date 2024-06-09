import { ReactNode, createContext, useEffect, useState } from "react";
import { IUserProfile } from "../interfaces";

// Define the shape of the context value
interface UserProfileContextValue {
  personalProfile: IUserProfile | null;
  loading: boolean;
  error: string | null;
}

// Create the context with a default value
export const MyUserProfileContext = createContext<
  UserProfileContextValue | undefined
>(undefined);

export const MyUserProfileProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [personalProfile, setUserProfile] = useState<IUserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/my-profile"); // Adjust the URL to your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }
        const data: IUserProfile = await response.json();
        setUserProfile(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <MyUserProfileContext.Provider value={{ personalProfile, loading, error }}>
      {children}
    </MyUserProfileContext.Provider>
  );
};
