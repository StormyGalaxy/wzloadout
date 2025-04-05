export function getEnabledGames(games: { [key: string]: boolean }): string {
    return Object.keys(games)
        .filter((game) => games[game])
        .join(",");
}