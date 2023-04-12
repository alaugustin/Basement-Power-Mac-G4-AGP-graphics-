export const MainScript = {
  version: "1.0",
  author: "AAA",
  project: "Project Name",
  module: "Main",
  Date: "June 15, 20XX",

  //initialization
  init: function () {
    const context = this;
    //Global variables
    context.config = {
      main: {
        mainH1: document.getElementById('mainHeader'),
        websiteName: 'Basement Power Mac G4 (AGP graphics)',
        fullYear: new Date().getFullYear()
      }
    };

    //Call DOM invoking functions here
    context.mainH1();
    // context.eventHandlers();
  },

  mainH1: function () {
    const context = this;
    const { mainH1, websiteName } = context.config.main;
    const headerH1Copy = `${websiteName ? websiteName : 'Default Header Text'}`;
    mainH1.innerHTML = `${headerH1Copy}`;
  },

  eventHandlers: function () {
    const context = this;
    console.log(`eventHandlers`, context);
  }
};

export default MainScript.init();



























// export const Footer = () => {
//   const theCurrentYear = new Date().getFullYear();
//   let footerSpan = document.getElementById('footerYear');
//   footerSpan.innerHTML = theCurrentYear;
// };

// export default {Footer};
