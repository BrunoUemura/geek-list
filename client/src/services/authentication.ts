import api from "./baseURL";
import jwt_decode from "jwt-decode";
import { IUserLogin, IUserRegistration } from "../config/interfaces";
import axios from "axios";

export class Authentication {
  static async register({ name, email, password }: IUserRegistration) {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async logIn({ email, password }: IUserLogin) {
    try {
      const { data }: any = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      if (data.status === 200) {
        return data.token;
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }

  static async logOut() {
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:4000/api/v1/auth/logout", {
        token,
      });
      localStorage.removeItem("token");
      //   router.push("/home");
    } catch (err) {
      alert("Failed to Sign Out!");
    }
  }

  static checkUserSession(page: string) {
    /**
     * JWT token is needed in order to make a POST, PUT or DELETE request.
     * Also this token expires in 1 hour. So you will need to Sign in again to generate a new one.
     * The token is associated with the user that Signed in.
     * So if we decode this token we will be able to retrieve user ID and Email.
     */

    if (localStorage.getItem("token") === null) {
      alert("Your need to sign in to proceed!");
      //   router.push("/login");
      return;
    }

    const token = localStorage.getItem("token") || "";
    const tokenDecoded: any = jwt_decode(token);
    const { id, exp } = tokenDecoded;

    // Check the session expiration with jwt.exp.
    const currentTimestamp = new Date().getTime() / 1000;
    if (exp < currentTimestamp) {
      alert("Your session expired, Sign in again to continue!");
      localStorage.removeItem("token");
      //   router.push("/login");
      return;
    }

    if (page) {
      //   router.push(`/${page}`);
      return id;
    }
    return id;
  }
}
