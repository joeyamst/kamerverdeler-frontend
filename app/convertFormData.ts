export function convertFormData(formDataObj: Record<string, string>) {
  const result: { name: string; size: number; days: number[] }[] = [];
  const teams: Record<
    string,
    { name?: string; size?: number; days: number[] }
  > = {};

  for (const [key, value] of Object.entries(formDataObj)) {
    const match = key.match(/^(name|size|day)-(\d+)(?:-(\d+))?$/);
    if (!match) continue;
    const [, type, teamId, dayIdx] = match;

    if (!teams[teamId]) teams[teamId] = { days: [] };

    if (type === "name") {
      teams[teamId].name = value;
    } else if (type === "size") {
      teams[teamId].size = Number(value);
    } else if (type === "day" && dayIdx !== undefined) {
      teams[teamId].days.push(Number(value));
    }
  }

  for (const team of Object.values(teams)) {
    if (team.name && typeof team.size === "number") {
      result.push({
        name: team.name,
        size: team.size,
        days: team.days,
      });
    }
  }

  return result;
}
