import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import z from "zod";
import { cs } from "zod/v4/locales/index.cjs";


const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

const testingPath = path.join(__dirname, "../data/testing.csv")
 const gradingSchema = z.tuple([z.string(), z.coerce.number(), z.string()])
const cs320Schema = z.tuple([z.string(), z.coerce.number().min(0)])
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
  const results = await parseCSV(testingPath)
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

})
  //RETESTING THE GIVEN CS320 STUFF
  test("parseCS320CSV yields 5 rows", async () => {
    const results = await parseCSV(PEOPLE_CSV_PATH, cs320Schema);
    expect(results).toHaveLength(5);
  });

  test("parseCS320CSV: first row schema", async () => {
    const results = await parseCSV(PEOPLE_CSV_PATH, cs320Schema);
    expect(cs320Schema.safeParse(["Alice", "23"]).success).toBe(true);
  });

  test("parseCS320CSV: second row passes schema", async () => {
    const results = await parseCSV(PEOPLE_CSV_PATH, cs320Schema);
    expect(cs320Schema.safeParse(["Bob", "thirty"]).success).toBe(false);
  });

  test("parseCS320CSV: third row fails schema", async () => {
    const results = await parseCSV(PEOPLE_CSV_PATH, cs320Schema);
    expect(cs320Schema.safeParse(["Charlie", "25"]).success).toBe(true);
  });

  test("row 3 with negative number", async () => {
    const results = await parseCSV(PEOPLE_CSV_PATH, cs320Schema);
    expect(cs320Schema.safeParse(["Nim", "-22"]).success).toBe(false);
  });

