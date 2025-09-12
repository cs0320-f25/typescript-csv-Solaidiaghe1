import { parseCSV } from "../src/basic-parser";
import * as path from "path";


const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

const testingPath = path.join(__dirname, "../data/testing.csv")
test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("my own csv yields array has length 5", async () => {
  const results = await parseCSV(testingPath)
  expect(results).toHaveLength(5)
});

test("my own csv first row has length 3", async () => {
  const results = await parseCSV(testingPath)
  expect(results[0]).toHaveLength(3)
});

test("my own csv first row equals header", async () => {
  const results = await parseCSV(testingPath)
  expect(results[0]).toEqual(["name", "age", "grade"])
});

test("my own csv second row equals John, Doe", async () => {
  const results = await parseCSV(testingPath, null)
  expect(results[1]).toEqual(["John, Doe", "20", "A"])
});

test("my own csv third row equals Betty", async () => {
  const results = await parseCSV(testingPath)
  expect(results[2]).toEqual(["Betty", "22", "B"])
});

test("my own csv fourth row equals Fiona Gallagher", async () => {
  const results = await parseCSV(testingPath)
  expect(results[3]).toEqual(["Fiona Gallagher", "19", "C"])
});

test("my own csv fifth row equals Archibald", async () => {
  const results = await parseCSV(testingPath)
  expect(results[4]).toEqual(["Archibald", "", "F"])
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }

});
