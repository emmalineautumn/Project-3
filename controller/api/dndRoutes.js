const axios = require("axios")

module.exports = function (app) {
    app.get("/characters", (req, res) => {
        axios.get("http://dnd5eapi.co/api/classes/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/characters/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/classes/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/classes/:name/level/:level", (req, res) => {
        axios.get("http://dnd5eapi.co/api/classes/" + req.params.name + "/level/" + req.params.level).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/races", (req, res) => {
        axios.get("http://dnd5eapi.co/api/races/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/races/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/races/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/subraces", (req, res) => {
        axios.get("http://dnd5eapi.co/api/subraces/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/subraces/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/subraces/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/languages", (req, res) => {
        axios.get("http://dnd5eapi.co/api/languages/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/languages/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/languages/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/traits", (req, res) => {
        axios.get("http://dnd5eapi.co/api/languages/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/traits/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/traits/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/monsters", (req, res) => {
        axios.get("http://dnd5eapi.co/api/monsters/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/monsters/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/monsters/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/spells/", (req, res) => {
        axios.get("http://dnd5eapi.co/api/spells/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/spells/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/spells/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/features", (req, res) => {
        axios.get("http://dnd5eapi.co/api/features/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/features/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/features/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/ability-scores", (req, res) => {
        axios.get("http://dnd5eapi.co/api/ability-scores/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/ability-scores/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/ability-scores/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/skills", (req, res) => {
        axios.get("http://dnd5eapi.co/api/skills/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/skills/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/skills/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/equipment", (req, res) => {
        axios.get("http://dnd5eapi.co/api/equipment/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/equipment/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/equipment/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/startingequipment", (req, res) => {
        axios.get("http://dnd5eapi.co/api/startingequipment/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/startingequipment/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/startingequipment/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/conditions", (req, res) => {
        axios.get("http://dnd5eapi.co/api/conditions/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/conditions/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/conditions/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/damage-types", (req, res) => {
        axios.get("http://dnd5eapi.co/api/damage-types/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/damage-types/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/damage-types/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/magic-schools", (req, res) => {
        axios.get("http://dnd5eapi.co/api/magic-schools/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/magic-schools/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/magic-schools/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })
}