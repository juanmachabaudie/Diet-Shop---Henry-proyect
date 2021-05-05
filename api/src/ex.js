const { Op } = require("sequelize");
Dog.findAll({
  where: {
    name: {
      [Op.like]: "%hat", // LIKE '%hat'
    },
  },
});


{
  dataValues: {
    id: '4ce16729-033f-47a6-b3d3-a68afa75d300',
    name: 'frann',
    height: '10 feet',
    weight: '10 lbs',
    life: '20 yrs',
    img: 'hound',
    temperaments: [Array]
  },
  _previousDataValues: {
    id: '4ce16729-033f-47a6-b3d3-a68afa75d300',
    name: 'frann',
    height: '10 feet',
    weight: '10 lbs',
    life: '20 yrs',
    img: 'hound',
    temperaments: [Array]
  },
  _changed: Set(0) {},
  _options: {
    isNewRecord: false,
    _schema: null,
    _schemaDelimiter: '',
    include: [Array],
    includeNames: [Array],
    includeMap: [Object],
    includeValidated: true,
    attributes: [Array],
    raw: true
  },
  isNewRecord: false,
  temperaments: [ [temperament], [temperament], [temperament] ],
  temperament: 'Active,Willful,Adaptable'
}