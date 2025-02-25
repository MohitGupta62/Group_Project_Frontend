import { saveAdmin } from "../Reducers/adminReducer";
import axios from '../../utils/axios'


export const currentAdmin = () => async (dispatch, getState) => {
    try {
        const Admin = await axios.post("/admin/current")
        dispatch(saveAdmin(Admin));
    } catch (error) {
        console.log("current Admin not working")
    }
};

export const adminSignin = (userData) => async (dispatch) => {
    try {
        const response = await axios.post("/admin/signin", userData);

        // Only dispatch serializable data
        dispatch(saveAdmin(response.data));  // Dispatch response.data only

        console.log("Signin successful", response.data);
    } catch (error) {
        console.error("Error during signin:", error);
    }
};
export const adminSignup = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/admin/signup', userData);
        dispatch(saveAdmin(response.data)); // Assuming you save admin data
        console.log("Admin signup successful", response.data);
    } catch (error) {
        console.error("Error in admin signup", error);
    }
};


export const createCloth = (clothData) => async (dispatch) => {
    try {
        const response = await axios.post("/admin/create-cloth", clothData);
        console.log("Cloth added successfully", response.data);
    
    } catch (error) {
        console.error("Error adding cloth:", error);
    }
};

export const Product = () => async (dispatch) => {
    try {
        const response = await axios.get("/admin/create-cloth", clothData);
        console.log("Cloth added successfully", response.data);
    
    } catch (error) {
        console.error("Error adding cloth:", error);
    }
};


