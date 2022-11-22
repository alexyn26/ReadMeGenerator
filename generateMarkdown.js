// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if( license!=='none')
   {
    return;
   }
   return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'none'){
        return `## License 
        ${license}`;
    }
    return '';
}

// TODO: Create a function that returns the license section of README
function generateMarkdown (data){
   
}
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description1}
  ${data.description2}
  ${data.description3}
  ${data.description4}
  ${data.description5}
  ${data.description6}

  ## Installation 
  Dependencies can be installed using ${data.installation}
  ## Testing
  App can be tested using ${data.test}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  `;
}

module.exports = generateMarkdown;
