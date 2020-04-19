import { API } from '../index';

export default class WebComponent {

	constructor(mapping) {
		this.element = $(`${mapping}`);
	}

	$(selector){
		return new WebComponent(`${this.element.mapping}${selector}`);
	}

	$$(selector){
		
	}

	addValue(value){
		this.element.addValue(value);
	}

	clearValue(){
		this.element.clearValue();
	}

	click(){
		this.element.click();
	}

	doubleClick(){
		this.element.doubleClick();
	}

	dragAndDrop(target, duration){
		this.element.dragAndDrop(target, duration);
	}

	drawHighlight(){
		// TODO: Rewrite this whole fucker to be cleaner
		const originalBorder = this.element.getCSSProperty('border');

		browser.pause(1000);
		browser.execute(`arguments[0].style.border='5px solid red'`, this.element);
		browser.pause(3000);

		if(originalBorder != null) {
			browser.execute(`arguments[0].style.border='${originalBorder.value}'`, this.element);
		} else {
			browser.execute(`arguments[0].removeAttribute('style', 'border')`, this.element);
		}
	}

	getAttribute(attribute_name){
		return this.element.getAttribute(attribute_name);
	}

	getCSSProperty(css_property){
		return this.element.getCSSProperty(css_property);
	}

	getHTML(include_selector_tag){
		return this.element.getHTML(include_selector_tag);
	}

	getLocation(prop){
		return this.element.getLocation(prop);
	}

	getProperty(property){
		return this.element.getProperty(property);
	}

	getSize(){
		return this.element.getSize();
	}

	getTagName(){
		return this.element.getTagName();
	}

	getText(){
		return this.element.getText();
	}

	getValue(){
		return this.element.getValue();
	}

	isDisplayed(){
		return this.element.isDisplayed();
	}

	isNotDisplayed(){
		return !this.element.isDisplayed();
	}

	isDisplayedInViewport(){
		return this.element.isDisplayedInViewport();
	}

	isEnabled(){
		return this.element.isEnabled();
	}

	isExisting(){
		return this.element.isExisting();
	}

	isFocused(){
		return this.element.isFocused();
	}

	isSelected(){
		return this.element.isSelected();
	}

	moveTo(x_offset=0, y_offset=0){
		this.element.moveTo(x_offset, y_offset);
	}

	saveScreenshot(filename){
		this.element.saveScreenshot(filename);
	}

	scrollIntoView(options){
		this.element.scrollIntoView(options);
	}

	selectByAttribute(attribute, value){
		this.element.selectByAttribute(attribute, value);
	}

	selectByIndex(index){
		this.element.selectByIndex(index);
	}

	selectByVisibleText(text){
		this.element.selectByVisibleText(text);
	}

	setValue(value){
		this.element.setValue(value);
	}

	touchAction(action){
		this.element.touchAction(action);
	}

	waitForDisplayed(ms = 15000, error = `${this.mapping} was not displayed before ${ms}`){
		
	}

	waitForNotDisplayed(ms = 15000, error = `${this.mapping} was still displayed before timeout`){
		
	}

	waitForEnabled(ms = 15000){
		
	}

	waitForDisabled(ms = 15000, error = `${this.mapping} was not disabled before timeout`){
		
	}

	waitForExist(ms = 15000, error = `${this.mapping} did not exist before timeout`){
		
	}
	
	waitForNotExist(ms = 15000, error = `${this.mapping} still existed after timeout`){
		
	}

}