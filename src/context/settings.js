import React from "react";
const AppContext = React.createContext();
const defaultSettings = {
  quickAccessList: {
    0: "",
    1: "unit_Unit",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  notificationsCount: 0,
  quickAccessSlot: 0,
  postsFilter: "All",
  isLogged: false,
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRpX2F5aGFtIiwibmFtZWlkIjoiNTY2MjI0NmYtMDVkMS00MmZjLWE5NzktZWVkMjUwNjRlMWNkIiwicm9sZSI6IlRlbmFudEluZGl2aWR1YWwiLCJuYmYiOjE2MDc3NDk0NzAsImV4cCI6MTYwODAwODY3MCwiaWF0IjoxNjA3NzQ5NDcwfQ.Kgz0uVC8aBkD-ZlgI1VOEO8Ajmo7Nfk0-ImHF7oQQ4U",
  activeUnitId: 33,
  financialMonth: 1,
};

function getsettingsFromLocalStorage() {
  return localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings")) : defaultSettings;
}

function AppProvider({ children }) {
  const [settings, setSettings] = React.useState(getsettingsFromLocalStorage());

  const updateAppContext = (newSetting, toDelete) => {
    //console.log("[Update App Context] -------Start------");
    //console.log("[Update App Context] size of old :", JSON.stringify(settings).length);
    //console.log("[Update App Context] size of new :", JSON.stringify(newSetting).length);
    setSettings(settings);
    const newSettings = { ...settings, ...newSetting };
    //console.log("[Update App Context] size of both :", JSON.stringify(newSettings).length);

    if (Array.isArray(toDelete)) {
      toDelete.forEach((x) => delete newSettings[x]);
    }

    setSettings(newSettings);
    //console.log("[Update App Context] size of fnl :", JSON.stringify(settings).length);
    var a = JSON.stringify(newSettings);
    // console.log("----------Size:", a.length );
    localStorage.setItem("settings", a);
  };

  const clearSettings = () => {
    setSettings({});
    localStorage.removeItem("settings");
  };

  return <AppContext.Provider value={{ clearSettings, settings, updateAppContext }}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
