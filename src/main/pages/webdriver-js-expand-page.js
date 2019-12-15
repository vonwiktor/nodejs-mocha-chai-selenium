import { By as by } from 'selenium-webdriver';
process.env["NODE_CONFIG_DIR"] = __dirname + "./resources/config/";
import config from 'config';
import BasePage from './../base/base-page';

export default class WebDriverJsExpandPage extends BasePage {
	constructor( driver, visit = false ) {
		super( driver, by.css( '#joke' ), `${config.get( 'demoURL' )}/expand` );
	}

	async expandJokeIfNecessary() {
		const open = await this.driver.findElement( by.css( '#joke' ) ).getAttribute( 'open' );
		if (!open) {
			this.expandJoke()
		}
	}

	async expandJoke() {
		return await this.driver.findElement( by.css( '#joke' ) ).click();
	}

	async assertAndExpandJoke() {
		return await this.driver.findElement( by.css( '#joke:not([open])' ) ).click();
	}

	async getPunchline() {
		return await this.driver.findElement( by.css( '#punchline' )).getText();
	}
}
