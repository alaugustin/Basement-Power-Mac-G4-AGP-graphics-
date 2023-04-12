export const HeaderScript = {
  version: "1.0",
  author: "AAA",
  project: "Project Name",
  module: "Header",
  Date: "June 15, 20XX",

  //initialization
  init: function () {
    const context = this;
    //Global variables
    context.config = {
      header: {
        headerObj: document.getElementById('header'),
        websiteName: 'Basement Power Mac G4 (AGP graphics)',
      }
    };

    //Call DOM invoking functions here
    context.headerCopy();
    context.eventHandlers();
  },

  headerCopy: function () {
    const context = this;
    const { headerObj, websiteName } = context.config.header;
    const headerCopy = `${websiteName ? websiteName : 'Default Header Text'}`;

    headerObj.innerHTML = `${headerCopy}`;
  },

  eventHandlers: function () {
    const context = this;
    // console.log(`eventHandlers`, context);
  }
};

export default HeaderScript.init();



























// export const Footer = () => {
//   const theCurrentYear = new Date().getFullYear();
//   let footerSpan = document.getElementById('footerYear');
//   footerSpan.innerHTML = theCurrentYear;
// };

// export default {Footer};
