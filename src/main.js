import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
const app = document.querySelector("#app");
import { render, router } from "./utilities";

router.on('/', () => render(HomePage, app));
router.on('/about', () => render(AboutPage, app));

import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";


router.resolve();


