import { config } from "./../constants";
import Cookies from "js-cookie";

export const loadNotifications = async (accessToken) => {
  var { apiUrl } = config;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  var result = null;
  await fetch(apiUrl + "users/notifications", requestOptions)
    .then(async (resp) => {
      if (resp.status === 200) {
        result = await resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally((f) => {});

  return result;
};

export const apiCall = async (url, method, data) => {
  var jwtToken = Cookies.get("jwtToken") || null;
  var { apiUrl } = config;

  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (jwtToken) {
    headers.Authorization = `Bearer ${jwtToken}`;
  }
  if (!method) method = "Get";
  if (!data) data = null;

  const requestOptions = {
    method: method,
    headers: headers,
  };

  if (data) {
    requestOptions["body"] = JSON.stringify(data);
  }
  console.log(requestOptions);

  var apiResult = null;
  var result = { status: null, data: null };
  await fetch(apiUrl + url, requestOptions)
    .then(async (resp) => {
      if (resp.status === 200) {
        apiResult = await resp.json();
        result.status = true;
      } else {
          apiResult = await resp.json();
        result.status = false;
        throw new Error(resp.statusText);
      }
    })
    .catch((error) => {
      console.error(`[API ERROR (${url})] ` + error);
    })
    .finally((f) => {});
  result.data = apiResult;
  return result;
};

export const role_tenant = "tenant";
export const role_landlord = "landlord";
// get financial value per month or per year
export function getFinancialValueRoot(financialData, financialMonth, userRole, paymentOf) {
  if (financialData) {
    if (financialMonth >= 1 && financialMonth <= 12) {
      if (userRole === role_landlord) return (financialData[financialMonth].landlord[paymentOf] && financialData[financialMonth].landlord[paymentOf].paidAmount) || 0;
      else if (userRole === role_tenant) return (financialData[financialMonth].tenant[paymentOf] && financialData[financialMonth].tenant[paymentOf].paidAmount) || 0;
    } else if (financialMonth === 0) {
      // get accumulative data
      var accumulatedPerMonths = 0;
      for (let month = 1; month <= 12; month++) {
        const element = financialData[month];
        if (userRole === role_tenant) {
          accumulatedPerMonths += (element.tenant[paymentOf] && element.tenant[paymentOf].paidAmount) || 0;
        } else if (userRole === role_landlord) {
          accumulatedPerMonths += (element.landlord[paymentOf] && element.landlord[paymentOf].paidAmount) || 0;
        }
      }
      return accumulatedPerMonths;
    }
  }
  return 0;
}

// calculate Total Income, Total Expenses, Profit
export function calculate_3_financials_per_month(financialData, financialMonth) {
  var totalIncome = getFinancialValueRoot(financialData, financialMonth, role_tenant, "Rental");
  var totalExpenses =
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "ServiceCharges") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "SinkingFunds") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "AssessmentRate") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "QuitRent") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "Subscription") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "Maintenance") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "Insurance");
  var netProfit = totalIncome - totalExpenses;
  return { totalIncome, totalExpenses, netProfit };
}

// Get Unit containers/rooms in a category (rooms:Kitchen, Bedroom, containers: Keys, remoteControls, stickers ...)
export function getUnitRoomsPerCategory(category, inventoryData) {
  if (!inventoryData || !category) return [];

  var rooms = {};
  for (const key in inventoryData) {
    console.log(key);
    var list = inventoryData[key];
    list
      .filter((x) => x.category === category)
      .forEach((x) => {
        console.log("category:", category, "roomId:", x.roomId);
        rooms[x.roomId] = x.roomName;
      });
  }
  return rooms;
}

// Get Unit Main Categories (Areas, Rooms, Miscellaneous)
export function getUnitMainCategories(inventoryData) {
  if (!inventoryData) inventoryData = {};
  var categories = [];

  // loop through all keys (checkin, checkout, additions, omitions)
  for (const key in inventoryData) {
    var list = inventoryData[key];
    var a = list.map((x) => x.category);
    categories.push(a);
  }
  // get unique set
  return a.filter((v, i, a) => a.indexOf(v) === i);
}

// filter inventory by type and location (room)
export function filterInventory(location, inventoryOf, inventoryData) {
  if (!location || !inventoryOf || !inventoryData) return null;
  console.log("searching for inventory", location, inventoryOf);
  return inventoryData[inventoryOf].filter((x) => x.roomId === location);
}

// get main categories of unit kits
export function getUnitMainKitsCats(kitsData, inventoryOf) {
  if (!kitsData) return null;
  var perInverntoryOf = kitsData[inventoryOf] || null;
  if (!perInverntoryOf) return null;
  var cats = [...Object.keys(perInverntoryOf)];
  return cats || null;
}

export function getUnitKitItems(kitsData, inventoryOf, category) {
  if (!kitsData) return null;
  var perInverntoryOf = kitsData[inventoryOf] || null;
  if (!perInverntoryOf) return null;
  var perCats = perInverntoryOf[category];
  if (!perCats) return null;
  return perCats;
}

export function getMainAreasFromConditionReports(conditionReports) {
  var result = [];
  if (!conditionReports) return null;

  for (const key in conditionReports) {
    var items = conditionReports[key];
    for (const item in items) {
      result.push(items[item].roomName);
    }
  }
  return result.filter((v, i, a) => a.indexOf(v) === i);
}

export function getConditionReportsOflocation(conditionReports, inventoryOf, location) {
  if (!conditionReports || !inventoryOf || !location) return null;

  var items = conditionReports[inventoryOf] || null;
  if (!items) return null;

  return items.filter((x) => x.roomName === location);
}

export const allQuickLinks = {
  bill_AssessmentRate: { id: "bill_AssessmentRate", type: "bill", label: "Assessment Rate", img: "/imgs/assessment.svg", link: "/landlord/bills/AssessmentRate" },
  bill_Cabletv: { id: "bill_Cabletv", type: "bill", label: "Cabletv", img: "/imgs/tv.svg", link: "/landlord/bills/Cabletv" },
  bill_Electricity: { id: "bill_Electricity", type: "bill", label: "Electricity", img: "/imgs/electricity.svg", link: "/landlord/bills/Electricity" },
  bill_Gas: { id: "bill_Gas", type: "bill", label: "Gas", img: "/imgs/gas.svg", link: "/landlord/bills/Gas" },
  bill_Insurance: { id: "bill_Insurance", type: "bill", label: "Insurance", img: "/imgs/insurance.svg", link: "/landlord/bills/Insurance" },
  bill_Internet: { id: "bill_Internet", type: "bill", label: "Internet", img: "/imgs/wifi.svg", link: "/landlord/bills/Internet" },
  bill_Maintenance: { id: "bill_Maintenance", type: "bill", label: "Maintenance", img: "/imgs/settings.svg", link: "/landlord/bills/Maintenance" },
  bill_QuitRent: { id: "bill_QuitRent", type: "bill", label: "Quit Rent", img: "/imgs/quitrent.svg", link: "/landlord/bills/QuitRent" },
  bill_ServiceCharge: { id: "bill_ServiceCharge", type: "bill", label: "Service Charge", img: "/imgs/money-bag.svg", link: "/landlord/bills/ServiceCharge" },
  bill_Sewage: { id: "bill_Sewage", type: "bill", label: "Sewage", img: "/imgs/sewage.svg", link: "/landlord/bills/Sewage" },
  bill_SubscriptionFees: { id: "bill_SubscriptionFees", type: "bill", label: "Subscription Fees", img: "/imgs/subscription.svg", link: "/landlord/bills/Subscription" },
  bill_Water: { id: "bill_Water", type: "bill", label: "Water", img: "/imgs/water-drop.svg", link: "/landlord/bills/Water" },

  unit_AssessmentRate: { id: "unit_AssessmentRate", type: "unit", label: "Assessment Rate", img: "/imgs/assessment.svg", link: "/landlord/propertyinfo/AssessmentRate" },
  unit_Building: { id: "unit_Building", type: "unit", label: "Building", img: "/imgs/company.svg", link: "/landlord/propertyinfo/Building" },
  unit_Insurance: { id: "unit_Insurance", type: "unit", label: "Insurance", img: "/imgs/insurance.svg", link: "/landlord/propertyinfo/Insurance" },
  unit_QuitRent: { id: "unit_QuitRent", type: "unit", label: "Quit Rent", img: "/imgs/quitrent.svg", link: "/landlord/propertyinfo/QuitRent" },
  unit_RateAndTaxes: { id: "unit_RateAndTaxes", type: "unit", label: "Rate & Taxes", img: "/imgs/pie-chart.svg", link: "" },
  unit_Tenancy: { id: "unit_Tenancy", type: "unit", label: "Tenancy", img: "/imgs/family.svg", link: "/landlord/propertyinfo/Tenancy" },
  unit_Unit: { id: "unit_Unit", type: "unit", label: "Unit", img: "/imgs/tenant.svg", link: "/landlord/propertyinfo/Unit" },
  unit_HomeAppliance: { id: "unit_HomeAppliance", type: "unit", label: "Home Appliances", img: "/imgs/guide.svg", link: "/landlord/propertyinfo/HomeAppliance" },
  unit_Utilities: { id: "unit_Utilities", type: "unit", label: "Utilities", img: "/imgs/utilities.svg", link: "/landlord/propertyinfo/Utilities" },
};

// get icons based on the service/bill
export const CompanyServicesIcons = {
  AssessmentRate: { img: "/imgs/assessment.svg" },
  Cabletv: { img: "/imgs/tv.svg" },
  Electricity: { img: "/imgs/electricity.svg" },
  Gas: { img: "/imgs/gas.svg" },
  Insurance: { img: "/imgs/insurance.svg" },
  Internet: { img: "/imgs/wifi.svg" },
  Maintenance: { img: "/imgs/settings.svg" },
  QuitRent: { img: "/imgs/quitrent.svg" },
  ServiceCharge: { img: "/imgs/money-bag.svg" },
  Sewage: { img: "/imgs/sewage.svg" },
  SubscriptionFees: { img: "/imgs/subscription.svg" },
  Water: { img: "/imgs/water-drop.svg" },
  Subscription: { img: "/imgs/subscription.svg" },
  SinkingFunds: { img: "/imgs/money-bag.svg" },
  Building: { img: "/imgs/company.svg" },
  RateAndTaxes: { img: "/imgs/pie-chart.svg" },
  Tenancy: { img: "/imgs/family.svg" },
  Unit: { img: "/imgs/tenant.svg" },
  HomeAppliance: { img: "/imgs/guide.svg" },
  Utilities: { img: "/imgs/utilities.svg" },
};

// get icons based on unit related icons
export function getIcon_UnitRelatedOrDefault(iconKey) {
  for (const key in UnitRelatedIcons) {
    if (iconKey.toLowerCase() === key.toLowerCase()) {
      return UnitRelatedIcons[key].img;
    }
  }
  return "";
}
export const UnitRelatedIcons = {
  Entrance: { img: "/imgs/en1.svg" },
  Kitchen: { img: "/imgs/k2.svg" },
  Living: { img: "/imgs/l1.svg" },
  Dining: { img: "/imgs/dining.svg" },
  Yard: { img: "/imgs/yard.svg" },
  Balcony: { img: "/imgs/balcony.svg" },
  Bedroom: { img: "/imgs/bed1.svg" },
  Utility: { img: "/imgs/u1.svg" },
  Bath: { img: "/imgs/bath.svg" },
  Keys: { img: "/imgs/key.svg" },
  AccessCard: { img: "/imgs/access.svg" },
  AccessCards: { img: "/imgs/access.svg" },
  RemoteControl: { img: "/imgs/remote-control.svg" },
  RemoteControls: { img: "/imgs/remote-control.svg" },
  VehicleStickers: { img: "/imgs/car.svg" },
};

export const UnitKitsIcons = {
  "Information leaflet": { img: "/imgs/write-letter.svg" },
  Keys: { img: "/imgs/key.svg" },
  "Access Cards": { img: "/imgs/access.svg" },
  "Remote Controls": { img: "/imgs/remote-control.svg" },
  "Vehicle Stickers": { img: "/imgs/car.svg" },
};
