import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../constants/constants";

export function ApiCalls() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiUser, setApiUser] = useState(null);

  const getUser = async (userId) => {
    const res = await axios.get(`${apiUrl}/users/${userId}`);
    setApiUser(res.data);
    setIsLoading(false);
  };

  const patchEntry = async (formData, entryId) => {
    await axios.patch(`${apiUrl}/entries/${entryId}`, formData);
    // formData.get('user') to get the user id
    // getUser(userId); commented out until figure out auto refresh
  };

  const postEntry = async (formData) => {
    await axios.post(`${apiUrl}/entries/`, formData);
    // getUser(userId); commented out until figure out auto refresh
  };

  return {
    isLoading,
    patchEntry,
    postEntry,
    getUser,
    apiUser,
  };
}
