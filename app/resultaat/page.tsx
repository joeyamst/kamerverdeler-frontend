"use server";

import { promises as fs } from 'fs';
import ResultsTable from "@/app/resultaat/results-table";

export type Results = Result[]

interface Result {
    // key is room name, value is team name. Value can be null if no team is assigned to the room.
    [key: string]: string | null;
}

export default async function Result() {
  // Read from external API
  const results: Results = JSON.parse(await fs.readFile(process.cwd() + '/app/stubs/resultaat.json', 'utf-8'))

  return <ResultsTable results={results} />
}
