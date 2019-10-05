
const API = {
    getAllClassses: () => {
        return $.ajax({
            url: "classes",
            method: "GET"
        })
    },
    getClasses: (id) => {
        return $.ajax({
            url: "classes/" + id,
            method: "GET"
        })
    },
    getCharacterLevel: (name, level) => {
        return $.ajax({
            url: "classes/" + name + "/level/" + level,
            method: "GET"
        })
    },
    getAllRaces: () => {
        return $.ajax({
            url: "races",
            method: "GET"
        })
    },
    getRace: (id) => {
        return $.ajax({
            url: "races/" + id,
            method: "GET"
        })
    },
    getAllSubRaces: () => {
        return $.ajax({
            url: "subraces",
            method: "GET"
        })
    },
    getSubRace: (id) => {
        return $.ajax({
            url: "subraces/" + id,
            method: "GET"
        })
    },
    getAllLanguages: () => {
        return $.ajax({
            url: "languages",
            method: "GET"
        })
    },
    getLanguage: (id) => {
        return $.ajax({
            url: "languages/" + id,
            method: "GET"
        })
    },
    getAllTraits: () => {
        return $.ajax({
            url: "traits",
            method: "GET"
        })
    },
    getTrait: (id) => {
        return $.ajax({
            url: "traits/" + id,
            method: "GET"
        })
    },
    getAllMonsters: () => {
        return $.ajax({
            url: "monsters",
            method: "GET"
        })
    },
    getMonster: (id) => {
        return $.ajax({
            url: "monsters/" + id,
            method: "GET"
        })
    },
    getAllSpells: () => {
        return $.ajax({
            url: "spells",
            method: "GET"
        })
    },
    getSpell: (id) => {
        return $.ajax({
            url: "spells/" + id,
            method: "GET"
        })
    },
    getAllFeatures: () => {
        return $.ajax({
            url: "features",
            method: "GET"
        })
    },
    getFeature: (id) => {
        return $.ajax({
            url: "features/" + id,
            method: "GET"
        })
    },
    getAllSkills: () => {
        return $.ajax({
            url: "skills",
            method: "GET"
        })
    },
    getSkill: (id) => {
        return $.ajax({
            url: "skills/" + id,
            method: "GET"
        })
    },
    getAllEquipment: () => {
        return $.ajax({
            url: "equipment",
            method: "GET"
        })
    },
    getEquipment: (id) => {
        return $.ajax({
            url: "equipment/" + id,
            method: "GET"
        })
    },
    getAllStartingEquipment: () => {
        return $.ajax({
            url: "startingequipment",
            method: "GET"
        })
    },
    getStartingEquipment: (id) => {
        return $.ajax({
            url: "startingequipment/" + id,
            method: "GET"
        })
    },
    getAllConditions: () => {
        return $.ajax({
            url: "conditions",
            method: "GET"
        })
    },
    getCondition: (id) => {
        return $.ajax({
            url: "conditions/" + id,
            method: "GET"
        })
    },
    getAllAbilityScores: () => {
        return $.ajax({
            url: "ability-scores",
            method: "GET"
        })
    },
    getAbilityScore: (id) => {
        return $.ajax({
            url: "ability-scores/" + id,
            method: "GET"
        })
    },
    getAllDamageTypes: () => {
        return $.ajax({
            url: "damage-types",
            method: "GET"
        })
    },
    getDamageType: (id) => {
        return $.ajax({
            url: "damage-types/" + id,
            method: "GET"
        })
    },
    getAllMagicSchools: () => {
        return $.ajax({
            url: "magic-schools",
            method: "GET"
        })
    },
    getMagicSchool: (id) => {
        return $.ajax({
            url: "magic-schools/" + id,
            method: "GET"
        })
    },
};

export default API;
