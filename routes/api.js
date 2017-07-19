const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/:resource', (req, res, next) => {

    let resource = req.params.resource
    let controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request ' + resource
        })
        return
    }

    controller.find(req.query, (err, results) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

router.get('/:resource/:id', (req, res, next) => {
    let resource = req.params.resource
    let id = req.params.id
    let controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request ' + resource
        })
        return
    }

    controller.findById(id, (err, result) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: 'Not Found'
            })
            return
        }
        res.json({
            confirmation: 'success',
            result: result
        })
    })

})

router.post('/:resource', (req, res, next) => {
    let resource = req.params.resource
    let controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request ' + resource
        })
        return
    }

    controller.create(req.body, (err, result) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'success',
            result: result
        })
    })

})

module.exports = router