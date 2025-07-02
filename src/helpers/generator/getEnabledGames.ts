/**
 * Filters a game settings object to find which games are enabled and returns them as a comma-separated string.
 * If no games are found to be enabled, it returns a specified default game.
 *
 * @param games - The settings object where keys are game names and values are booleans.
 * @param defaultGame - The default game name to return if no games are enabled in the settings object.
 * @returns A comma-separated string of enabled game names, or the default game name if none are enabled.
 */
export function getEnabledGames(games: { [key: string]: boolean }, defaultGame: string): string {
  const enabled = Object.keys(games).filter((game) => games[game]);
  // If no games are enabled, default to defaultGame
  if (enabled.length === 0) {
    return defaultGame;
  }
  return enabled.join(',');
}
