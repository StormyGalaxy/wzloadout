import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";
import idbAdapter from "pouchdb-adapter-idb";
import { initializeSettingsDB } from "@/helpers/database/settings/initializeSettingsDB";

// --- Initialize Plugins  ---
PouchDB.plugin(PouchDBFind);
PouchDB.plugin(idbAdapter);

// --- Module-level variables to hold instances and promise ---
let settingsDBInstance: PouchDB.Database | null = null;
let initializationPromise: Promise<{
  settings: PouchDB.Database;
}> | null = null;

async function performInitialization(): Promise<{
  settings: PouchDB.Database;
}> {
  const adapter = "idb";

  // --- Initialize Settings DB ---
  const settingsDb = await initializeSettingsDB();
  if (!settingsDb) {
    throw new Error(
      "Singleton Initializer: Settings DB Initialization Failed (returned null)"
    );
  }

  // --- Store instances and return ---
  settingsDBInstance = settingsDb;
  return { settings: settingsDBInstance };
}

// --- Exported function to access the databases ---
export function getDatabases(): Promise<{ settings: PouchDB.Database }> {
  // Ensure this only runs client-side
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("Database cannot be accessed on the server.")
    );
  }

  // If initialization promise doesn't exist, create it by calling performInitialization
  if (!initializationPromise) {
    initializationPromise = performInitialization();
  }

  return initializationPromise;
}
