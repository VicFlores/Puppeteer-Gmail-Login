"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const LoginGoogleBrowser = () => __awaiter(void 0, void 0, void 0, function* () {
    puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
    const browser = yield puppeteer_extra_1.default.launch({ headless: false });
    const page = yield browser.newPage();
    const username = "vicmelgar11@gmail.com";
    const password = "vicsito11";
    yield page.setExtraHTTPHeaders({
        "accept-language": "en-US,en;q=0.9,hy;q=0.8",
    });
    yield page.goto("https://www.gmail.com");
    yield page.type('input[type="email"]', `${username}`);
    yield page.click("#identifierNext");
    yield page.waitForSelector('input[type="password"]', { visible: true });
    yield page.type('input[type="password"]', `${password}`);
    yield page.click("#passwordNext");
    yield page.waitForNavigation();
    const composeButton = yield page.$('div[role="button"][gh="cm"]');
    if (composeButton) {
        console.log("Logged in to Gmail!");
    }
    else {
        console.log("Failed to log in to Gmail.");
    }
    yield browser.close();
});
LoginGoogleBrowser();
