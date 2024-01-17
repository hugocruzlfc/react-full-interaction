import axios from "../api/axios";
import { useAuth } from "../context";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);

      if (!prev) {
        // Si prev es null, simplemente devolvemos el nuevo objeto Auth con accessToken
        return {
          accessToken: response.data.accessToken,
          user: "",
          pwd: "",
          roles: [],
        };
      }

      // Si prev es una instancia de Auth, actualizamos el accessToken
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};
