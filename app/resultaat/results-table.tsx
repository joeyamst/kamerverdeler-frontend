"use client";

import { Results } from "@/app/resultaat/page";
import { Heading, Table } from "@amsterdam/design-system-react";
import { dayNumberToString } from "@/src/utils";

export default function ResultsTable({ results }: { results: Results }) {
  return (
    <div>
      <Heading level={1} className="ams-mb-l">
        Aldus de verdeling
      </Heading>
      {results.map((dayResult, dayNumber) => {
        const dayString = dayNumberToString(dayNumber);

        return (
          <Table className="ams-mb-l" key={dayNumber}>
            <Table.Caption>{dayString}</Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>
                <Table.HeaderCell>Kamer</Table.HeaderCell>
                <Table.HeaderCell>Capaciteit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Object.entries(dayResult).map(([room, team]) => {
                const capacity = room.split("_")[1];
                return (
                  <Table.Row key={room}>
                    <Table.Cell>{team ?? "Geen team"}</Table.Cell>
                    <Table.Cell>{room}</Table.Cell>
                    <Table.Cell>{capacity}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        );
      })}
    </div>
  );
}
