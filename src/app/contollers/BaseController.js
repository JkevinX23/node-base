import * as Yup from 'yup'
import ModelBase from '../models/ModelBase'

class BaseController {
  async store(req, res) {
    const schema = Yup.object().shape({
      cep: Yup.string().required(),
      status: Yup.number().required(),
      value: Yup.number().required(),
      password: Yup.string().required(),
      invoice_due_date: Yup.date().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const { cep } = req.body
    const base = await ModelBase.findOne({ where: { cep } })

    if (!base) {
      const response = await ModelBase.create({ ...req.body, status: 1 })
      return res.json(response)
    }

    return res.status(203).json({ mensage: 'Base aleary exists', base })
  }

  async index(req, res) {
    const bases = await ModelBase.findAll({ order: [['cep', 'ASC']] })
    return res.json(bases)
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      cep: Yup.string(),
      status: Yup.number(),
      value: Yup.number(),
      password: Yup.string(),
      invoice_due_date: Yup.date()
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }
    const { id } = req.body
    const base = await ModelBase.findByPk(id)
    if (!base) {
      return res.status(400).json({ error: 'Base not found' })
    }
    const baseupdated = await ModelBase.update(req.body)
    return res.json(baseupdated)
  }
}

export default new BaseController()
