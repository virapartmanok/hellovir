// ============================================================
//  FOGLALÁSOK – a naptárhoz csak ezt a fájlt kell szerkesztened
// ============================================================
//  Minden sor: ["érkezés napja", "távozás napja"]  (ÉÉÉÉ-HH-NN)
//
//  fizetve  = PIROS  (kifizetett, megerősített foglalás)
//  fuggoben = SÁRGA CSÍKOS (kérés érkezett, de az előleg még nincs kifizetve)
//
//  Példa (két foglalás, az egyik már fizetve, a másik függőben):
//    viric1: { fizetve: [["2027-07-03","2027-07-10"]],
//              fuggoben: [["2027-07-17","2027-07-24"]] },
//
//  Ha az előleg megérkezett: tedd át a sort a "fuggoben" listából a
//  "fizetve" listába. Több időpont esetén vesszővel válaszd el őket.
// ============================================================
window.FOGLALAS = {
  viric1:   { fizetve: [], fuggoben: [] },
  viric3:   { fizetve: [], fuggoben: [] },
  horizont: { fizetve: [], fuggoben: [] },
  harmonia: { fizetve: [], fuggoben: [] }
};
