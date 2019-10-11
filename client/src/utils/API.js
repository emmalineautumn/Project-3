import axios from "axios";

const API = {
    getAllClassses: () => {
        return axios.get("/api/classes");
    },
    getClasses: id => {
        return axios.get("/api/classes/" + id);
    },
    getCharacterLevel: (charClass, level) => {
        return axios.get("/api/classes/" + charClass + "/level/" + level);
    },
    getAllRaces: () => {
        return axios.get("/api/races");
    },
    getRace: id => {
        return axios.get("/api/races/" + id);
    },
    getAllSubRaces: () => {
        return axios.get("/api/subraces");
    },
    getSubRace: id => {
        return axios.get("/api/subraces/" + id);
    },
    getAllLanguages: () => {
        return axios.get("/api/languages");
    },
    getLanguage: id => {
        return axios.get("/api/languages/" + id);
    },
    getAllTraits: () => {
        return axios.get("/api/traits");
    },
    getTrait: id => {
        return axios.get("/api/traits/" + id);
    },
    getAllMonsters: () => {
        return axios.get("/api/monsters");
    },
    getMonster: id => {
        return axios.get("/api/monsters/" + id);
    },
    getAllSpells: () => {
        return axios.get("/api/spells");
    },
    getSpell: id => {
        return axios.get("/api/spells/" + id);
    },
    getAllFeatures: () => {
        return axios.get("/api/features");
    },
    getFeature: id => {
        return axios.get("/api/features/" + id);
    },
    getAllSkills: () => {
        return axios.get("/api/skills");
    },
    getSkill: id => {
        return axios.get("/api/skills/" + id);
    },
    getAllEquipment: () => {
        return axios.get("/api/equipment");
    },
    getEquipment: id => {
        return axios.get("/api/equipment/" + id);
    },
    getAllStartingEquipment: () => {
        return axios.get("/api/startingequipment");
    },
    getStartingEquipment: id => {
        return axios.get("/api/startingequipment/" + id);
    },
    getAllConditions: () => {
        return axios.get("/api/conditions");
    },
    getCondition: id => {
        return axios.get("/api/conditions/" + id);
    },
    getAllAbilityScores: () => {
        return axios.get("/api/ability-scores");
    },
    getAbilityScore: id => {
        return axios.get("/api/ability-scores/" + id);
    },
    getAllDamageTypes: () => {
        return axios.get("/api/damage-types");
    },
    getDamageType: id => {
        return axios.get("/api/damage-types/" + id);
    },
    getAllMagicSchools: () => {
        return axios.get("/api/magic-schools");
    },
    getMagicSchool: id => {
        return axios.get("/api/magic-schools/" + id);
    },
};

export default API;
