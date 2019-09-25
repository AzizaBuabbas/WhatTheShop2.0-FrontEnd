import { decorate, observable } from "mobx";
import axios from "axios";

class LanguageCourse {
  languagecourses = [];

  loading = true;

  fetchAllLanguageCourses = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/list/");
      this.languagecourses = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(LanguageCourse, {
  languagecourses: observable,

  loading: observable
});

let languagecourse = new LanguageCourse();
languagecourse.fetchAllLanguageCourses();

export default languagecourse;
