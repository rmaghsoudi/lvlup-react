import React, { useState } from "react";
import axios from "axios";
import {apiUrl} from "../constants/constants";

export function apiCalls() {
  const {isLoading, setIsLoading} = useState(true);
  const {apiUser, setApiUser} = useState();

  const getUser = async () => {
    const user = await axios.get(`${apiUrl}/users`);
    setApiUser(user);
    setIsLoading(false);
  };

  return {
    isLoading,
    getUser,
    apiUser,
  };
}
