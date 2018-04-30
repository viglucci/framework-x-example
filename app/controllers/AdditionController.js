
class AdditionController {
  constructor({ AdditionService }) {
    this.additionService = AdditionService;
  }

  add(req, res) {
    res.json(this.additionService.add(~~req.query.a, ~~req.query.b));
  }
}

module.exports = AdditionController;
