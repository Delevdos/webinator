import { Test } from '../index';
import Page from '../page_objects/page';

Test.Suite('Debug Suite', function(){

	Test.Before(function(){

		Page.open();

	});

	Test.TestCase('Test Case 1', function(){

		Console.log('Test has ran successfully');
	});

});