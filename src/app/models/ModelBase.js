import Sequelize, { Model } from 'sequelize'

class ModelBase extends Model {
  static init(sequelize) {
    super.init(
      {
        cep: Sequelize.STRING,
        status: Sequelize.INTEGER,
        value: Sequelize.FLOAT,
        password: Sequelize.VIRTUAL,
        invoice_due_date: Sequelize.DATE,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'model_base',
      },
    )

    return this
  }
}
export default ModelBase
