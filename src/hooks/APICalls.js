import { useState } from "react";
import axios from "axios";
import {apiUrl} from "../constants/constants";

export function ApiCalls() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiUser, setApiUser] = useState(null);

  const getUser = async () => {
    const res = await axios.get(`${apiUrl}/users/`)
    setApiUser(res.data[0])
    setIsLoading(false)
  };

  return {
    isLoading,
    getUser,
    apiUser,
  };
}
