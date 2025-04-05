import React, { createContext, useContext, useState, useEffect } from "react";
import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";
import idbAdapter from "pouchdb-adapter-idb";
import { initializeSettingsDB } from "@/helpers/database/settings/initializeSettingsDB";

PouchDB.plugin(PouchDBFind);
PouchDB.plugin(idbAdapter);

interface DatabaseContextProps {
  dbs: { [key: string]: PouchDB.Database | null };
  isReady: boolean;
}

const DatabaseContext = createContext<DatabaseContextProps>({
  dbs: {},
  isReady: false,
});

export const useDatabase = () => useContext(DatabaseContext);

interface DatabaseProviderProps {
  children: React.ReactNode;
}

export const DatabaseProvider: React.FC<DatabaseProviderProps> = ({
  children,
}) => {
  const [dbs, setDbs] = useState<{ [key: string]: PouchDB.Database | null }>(
    {}
  );
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeDBs = async () => {
      try {
        const settingsDb = await initializeSettingsDB();

        setDbs({
          settings: settingsDb,
        });
        setIsReady(true);
      } catch (error) {
        console.error("Database initialization or destruction error:", error);
        setIsReady(true);
      }
    };

    initializeDBs();
  }, []);

  return (
    <DatabaseContext.Provider value={{ dbs, isReady }}>
      {children}
    </DatabaseContext.Provider>
  );
};
