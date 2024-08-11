import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const UserSignUp = async (data) => API.post("http://localhost:8080/api/user/signup", data);
export const UserSignIn = async (data) => API.post("http://localhost:8080/api/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("http://localhost:8080/api/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`http://localhost:8080/api/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`http://localhost:8080/api/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });