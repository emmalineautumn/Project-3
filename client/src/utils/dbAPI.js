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
  updateCampaign: campaignData => {
    return axios.post("/api/campaign/update", campaignData);
  },
  getAllUsers: userData => {
    return axios.get("/api/user", userData);
  },
  getUser: id => {
    return axios.get("/api/user/" + id);
  },
  deleteUser: id => {
    return axios.delete("/api/user/" + id);
  },
  userSession: () => {
    return axios.get("/api/user/me")
  },
  createUser: userData => {
    return axios.post("/api/user", userData);
  },
  populateCharacter: id => {
    return axios.get("/api/user/character/" + id)
  },
  populateCampaign: id => {
    return axios.get("/api/user/campaign/" + id)
  },
  addNote: data => {
    return axios.post("/api/campaign/note", data)
  },
  getNotes: id => {
    return axios.get("/api/campaign/getnotes/" + id)
  },
  createCampaignUser: campaignData => {
    return axios.post("/api/campaign/user", campaignData)
  },
  createCharacterUser: characterData => {
    return axios.post("/api/character/user", characterData)
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