
class AdditionController {
  constructor({ AdditionService }) {
    this.service = AdditionService;
  }

  add(req, res) {
    res.json(this.service.add(~~req.query.a, ~~req.query.b));
  }
}

module.exports = AdditionController;
