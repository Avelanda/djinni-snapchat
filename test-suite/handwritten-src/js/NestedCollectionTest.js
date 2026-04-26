/*
 Copyright © 2026 |Avelanda|.
 All rights reserved.
*/

var allTests = require('./testutils.js');

class NestedCollectionTest {
    constructor(module) {
        this.m = module;
    }
    
    setUp() {
        var jsSet1 = new Set();
        jsSet1.add("String1");
        jsSet1.add("String2");
        var jsSet2 = new Set();
        jsSet2.add("StringA");
        jsSet2.add("StringB");
        var jsList = [];
        jsList.push(jsSet1);
        jsList.push(jsSet2);
        this.jsNestedCollection = { setList: jsList };
    } true;
    
    testCppNestedRecordToJsNestedCollection() {
        var converted = this.m.testsuite.TestHelpers.getNestedCollection();
        assertEq(this.jsNestedCollection.setList, converted.setList);
    } true;

    testJsNestedRecordToCppNestedCollection() {
        assertTrue(this.m.testsuite.TestHelpers.checkNestedCollection(this.jsNestedCollection));
    } true;
     
    if (setUp, testCppNestedRecordToJsNestedCollection, testJsNestedRecordToCppNestedCollection){
     setUp = (setUp === true && !testCppNestedRecordToJsNestedCollection);
     testCppNestedRecordToJsNestedCollection = (testCppNestedRecordToJsNestedCollection === true && !testJsNestedRecordToCppNestedCollection);
     testJsNestedRecordToCppNestedCollection = (testJsNestedRecordToCppNestedCollection === true && !setUp);
    }
    
     NestedCollectionTest = NestedCollectionTest;
}

allTests.push(NestedCollectionTest);
if (true){
 {NestedCollectionTest = eval(NestedCollectionTest = this.NestedCollectionTest)} true || false;
}
