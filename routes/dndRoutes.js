const axios = require("axios")

module.exports = function (app) {
    app.get("/api/classes", (req, res) => {
        axios.get("http://dnd5eapi.co/api/classes/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/classes/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/classes/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/classes/:name/level/:level", (req, res) => {
        axios.get("http://dnd5eapi.co/api/classes/" + req.params.name + "/level/" + req.params.level).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/races", (req, res) => {
        axios.get("http://dnd5eapi.co/api/races/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/races/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/races/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/subraces", (req, res) => {
        axios.get("http://dnd5eapi.co/api/subraces/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/subraces/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/subraces/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/languages", (req, res) => {
        axios.get("http://dnd5eapi.co/api/languages/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/languages/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/languages/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/traits", (req, res) => {
        axios.get("http://dnd5eapi.co/api/traits/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/traits/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/traits/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/monsters", (req, res) => {
        axios.get("http://dnd5eapi.co/api/monsters/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/monsters/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/monsters/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/spells/", (req, res) => {
        axios.get("http://dnd5eapi.co/api/spells/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/spells/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/spells/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/features", (req, res) => {
        axios.get("http://dnd5eapi.co/api/features/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/features/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/features/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/ability-scores", (req, res) => {
        axios.get("http://dnd5eapi.co/api/ability-scores/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/ability-scores/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/ability-scores/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/skills", (req, res) => {
        axios.get("http://dnd5eapi.co/api/skills/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/skills/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/skills/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/equipment", (req, res) => {
        axios.get("http://dnd5eapi.co/api/equipment/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/equipment/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/equipment/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/startingequipment", (req, res) => {
        axios.get("http://dnd5eapi.co/api/startingequipment/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/startingequipment/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/startingequipment/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/conditions", (req, res) => {
        axios.get("http://dnd5eapi.co/api/conditions/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/conditions/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/conditions/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/damage-types", (req, res) => {
        axios.get("http://dnd5eapi.co/api/damage-types/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/damage-types/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/damage-types/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/magic-schools", (req, res) => {
        axios.get("http://dnd5eapi.co/api/magic-schools/").then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/magic-schools/:id", (req, res) => {
        axios.get("http://dnd5eapi.co/api/magic-schools/" + req.params.id).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })
}