class Test {

	After(callback) {
		return after(() => callback());
	}

	AfterEach(callback) {
		return afterEach(() => callback());
	}

	Before(callback) {
		return before(() => callback());
	}

	BeforeEach(callback) {
		return beforeEach(() => callback());
	}

	Suite(name, callback) { 
		return describe(name, () => callback()); 
	}

	TestCase(name, callback) {
		return it(name, () => callback());
	}

}

export default new Test