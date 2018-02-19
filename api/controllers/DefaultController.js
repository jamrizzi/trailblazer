import Controller from 'trails/lib/Controller';

export default class DefaultController extends Controller {
  async info(req, res, next) {
    try {
      const payload = await this.app.services.DefaultService.getApplicationInfo();
      return res.success(payload);
    } catch (err) {
      return next(err);
    }
  }
}
