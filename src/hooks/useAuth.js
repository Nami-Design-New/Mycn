import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { setClientData } from "../redux/slices/clientData";
import axiosInstance from "../utils/axiosInstance";

export default function useAuth() {
  const dispatch = useDispatch();

  const [cookies, , removeCookie] = useCookies(["token"]);
  const token = cookies.token;

  const [authState, setAuthState] = useState({
    loading: true,
    isAuthed: false,
  });

  useEffect(() => {
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = token;
      fetchUser();
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
      removeCookie("token", { path: "/" });
      setAuthState({ loading: false, isAuthed: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get("/profile");
      if (response.status === 200) {
        dispatch(setClientData(response.data.data || {}));
        setAuthState({ loading: false, isAuthed: true });
      } else {
        setAuthState({ loading: false, isAuthed: false });
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setAuthState({ loading: false, isAuthed: false });
    }
  };

  return {
    loading: authState.loading,
    isAuthed: authState.isAuthed,
  };
}
