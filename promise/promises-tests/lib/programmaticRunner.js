"use strict";

var Mocha = require("mocha");
var path = require("path");
var fs = require("fs");
var _ = require("underscore");

var testsDir = path.resolve(__dirname, "tests");

function normalizeAdapter(adapter) {
    if (!adapter.resolved) {
        adapter.resolved = function (value) {
            var d = adapter.deferred();
            d.resolve(value);
            return d.promise;
        };
    }

    if (!adapter.rejected) {
        adapter.rejected = function (reason) {
            var d = adapter.deferred();
            d.reject(reason);
            return d.promise;
        };
    }
}

module.exports = function (adapter, fileName, mochaOpts, cb) {
    if (typeof mochaOpts === "function") {
        cb = mochaOpts;
        mochaOpts = {};
    }
    if (typeof cb !== "function") {
        cb = function () {};
    }

    normalizeAdapter(adapter);
    mochaOpts = _.defaults(mochaOpts, {
        timeout: 200,
        slow: Infinity
    });

    fs.readdir(testsDir, function (err, testFileNames) {
        if (err) {
            cb(err);
            return;
        }

        var mocha = new Mocha(mochaOpts);

        var testFilePath;
        if (fileName) {
            testFilePath = path.resolve(testsDir, fileName + '.js');
            mocha.addFile(testFilePath);
        } else {
            testFileNames.forEach(function (testFileName) {
                if (path.extname(testFileName) === ".js") {
                    testFilePath = path.resolve(testsDir, testFileName);
                    mocha.addFile(testFilePath);
                }
            });
        }


        global.adapter = adapter;
        mocha.run(function (failures) {
            delete global.adapter;
            if (failures > 0) {
                var err = new Error("Test suite failed with " + failures + " failures.");
                err.failures = failures;
                cb(err);
            } else {
                cb(null);
            }
        });
    });
};

module.exports.mocha = function (adapter) {
    normalizeAdapter(adapter);

    global.adapter = adapter;

    require("./testFiles");

    delete global.adapter;
};