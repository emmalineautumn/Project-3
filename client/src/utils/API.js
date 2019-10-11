
const API = {
    getAllClassses: () => {
        return $.ajax({
            url: "api/classes",
            method: "GET"
        })
    },
    getClasses: id => {
        return $.ajax({
            url: "api/classes/" + id,
            method: "GET"
        })
    },
    getCharacterLevel: (name, level) => {
        return $.ajax({
            url: "api/classes/" + name + "/level/" + level,
            method: "GET"
        })
    },
    getAllRaces: () => {
        return $.ajax({
            url: "api/races",
            method: "GET"
        })
    },
    getRace: id => {
        return $.ajax({
            url: "api/races/" + id,
            method: "GET"
        })
    },
    getAllSubRaces: () => {
        return $.ajax({
            url: "api/subraces",
            method: "GET"
        })
    },
    getSubRace: id => {
        return $.ajax({
            url: "api/subraces/" + id,
            method: "GET"
        })
    },
    getAllLanguages: () => {
        return $.ajax({
            url: "api/languages",
            method: "GET"
        })
    },
    getLanguage: id => {
        return $.ajax({
            url: "api/languages/" + id,
            method: "GET"
        })
    },
    getAllTraits: () => {
        return $.ajax({
            url: "api/traits",
            method: "GET"
        })
    },
    getTrait: id => {
        return $.ajax({
            url: "api/traits/" + id,
            method: "GET"
        })
    },
    getAllMonsters: () => {
        return $.ajax({
            url: "api/monsters",
            method: "GET"
        })
    },
    getMonster: id => {
        return $.ajax({
            url: "api/monsters/" + id,
            method: "GET"
        })
    },
    getAllSpells: () => {
        return $.ajax({
            url: "api/spells",
            method: "GET"
        })
    },
    getSpell: id => {
        return $.ajax({
            url: "api/spells/" + id,
            method: "GET"
        })
    },
    getAllFeatures: () => {
        return $.ajax({
            url: "api/features",
            method: "GET"
        })
    },
    getFeature: id => {
        return $.ajax({
            url: "api/features/" + id,
            method: "GET"
        })
    },
    getAllSkills: () => {
        return $.ajax({
            url: "api/skills",
            method: "GET"
        })
    },
    getSkill: id => {
        return $.ajax({
            url: "api/skills/" + id,
            method: "GET"
        })
    },
    getAllEquipment: () => {
        return $.ajax({
            url: "api/equipment",
            method: "GET"
        })
    },
    getEquipment: id => {
        return $.ajax({
            url: "api/equipment/" + id,
            method: "GET"
        })
    },
    getAllStartingEquipment: () => {
        return $.ajax({
            url: "api/startingequipment",
            method: "GET"
        })
    },
    getStartingEquipment: id => {
        return $.ajax({
            url: "api/startingequipment/" + id,
            method: "GET"
        })
    },
    getAllConditions: () => {
        return $.ajax({
            url: "api/conditions",
            method: "GET"
        })
    },
    getCondition: id => {
        return $.ajax({
            url: "api/conditions/" + id,
            method: "GET"
        })
    },
    getAllAbilityScores: () => {
        return $.ajax({
            url: "api/ability-scores",
            method: "GET"
        })
    },
    getAbilityScore: id => {
        return $.ajax({
            url: "api/ability-scores/" + id,
            method: "GET"
        })
    },
    getAllDamageTypes: () => {
        return $.ajax({
            url: "api/damage-types",
            method: "GET"
        })
    },
    getDamageType: id => {
        return $.ajax({
            url: "api/damage-types/" + id,
            method: "GET"
        })
    },
    getAllMagicSchools: () => {
        return $.ajax({
            url: "api/magic-schools",
            method: "GET"
        })
    },
    getMagicSchool: id => {
        return $.ajax({
            url: "api/magic-schools/" + id,
            method: "GET"
        })
    },
};

export default API;
