import axios from "axios";

export default {
  getAllCampaigns: () => {
    return axios.get("/api/campaign");
  },
  getCampaign: id => {
    return axios.get("/api/campaign/" + id);
  },
  deleteCampaign: id => {
    return axios.delete("/api/campaign/" + id);
  },
  createCampaign: campaignData => {
    return axios.post("/api/campaign", campaignData);
  },
  getAllUsers: () => {
    return axios.get("/api/user");
  },
  getUser: id => {
    return axios.get("/api/user/" + id);
  },
  deleteUser: id => {
    return axios.delete("/api/user/" + id);
  },
  createUser: userData => {
    return axios.post("/api/user", userData);
  },
  getAllCharacters: () => {
    return axios.get("/api/character");
  },
  getCharacter: id => {
    return axios.get("/api/character/" + id);
  },
  deleteCharacter: id => {
    return axios.delete("/api/character/" + id);
  },
  createCharacter: characterData => {
    return axios.post("/api/character", characterData);
  }
};