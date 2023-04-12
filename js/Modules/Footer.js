export const FooterScript = {
  version: "1.0",
  author: "AAA",
  project: "Project Name",
  module: "Footer",
  Date: "June 15, 20XX",

  //initialization
  init: function () {
    const context = this;
    //Global variables
    context.config = {
      footer: {
        copyRightHolder: document.getElementById('copyRight'),
        websiteName: 'Basement Power Mac G4 (AGP graphics)',
        fullYear: new Date().getFullYear()
      }
    };

    //Call DOM invoking functions here
    context.deployCopyright();
    // context.eventHandlers();
  },

  deployCopyright: function () {
    const context = this;
    const { copyRightHolder, fullYear } = context.config.footer;
    const copyRightCopy = `&copy; ${fullYear ? fullYear : '****'} ${context.config.footer.websiteName}`;

    copyRightHolder.innerHTML = `${copyRightCopy}`;
  },

  eventHandlers: function () {
    const context = this;
    console.log(`eventHandlers`, context);
  }
};

export default FooterScript.init();



























// export const Footer = () => {
//   const theCurrentYear = new Date().getFullYear();
//   let footerSpan = document.getElementById('footerYear');
//   footerSpan.innerHTML = theCurrentYear;
// };

// export default {Footer};
