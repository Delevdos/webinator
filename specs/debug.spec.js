import { Test } from '../index';
import Page from '../page_objects/page';

Test.Suite('Debug Suite', () => {

	Test.Before(() => {

		Page.open();

	});

	Test.TestCase('Test Case 1', () => {

		Console.log('Test has ran successfully');

	});

});