export default class Api {
  constructor() {
    this.url = "/data/logements.json";
  }

  async getAccomodations() {
    try {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAccomodationById(id) {
    try {
      const res = await fetch(this.url);
      const data = await res.json();
      return data.find(el => el.id === id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
