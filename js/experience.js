const experience = [
    {
        id: 'cox',
        company: 'Cox Communications via Accenture',
        position: 'Lead Architect',
        location: 'Atlanta (remote)',
        duration: '11/2021 to 01/2024',
        description: 'Develop greenfield Risk and Issue management dashboard for asset tracking. Improve and maintain existing R&I forms and interface. Maintain SharePoint data management system, including Power Apps and Automate. Maintain and develop brownfield Excel data entry and reporting systems with VBA and macros. Light DBA with MS SQL Server. Light administration of Azure VMs.',
        skills: ['JavaScript', 'PHP', 'CSS', 'HTML', 'SQL', 'React', 'Bootstrap', 'jQuery', 'ExcelJS', 'code refactoring', 'node.js', 'SharePoint', 'Jira', 'ChatGPT', 'MS SQL Server', 'Azure', 'IIS', 'Photoshop', 'Git repo administration']
    },
    {
        id: 'wisconsin',
        company: 'State of Wisconsin, via Deloitte',
        position: 'Lead Architect',
        location: 'Madison, WI (remote)',
        duration: '02/2021 to 07/2021',
        description: 'Helped lead front end development for Wisconsin state website. Provided essential leadership to a dozen Salesforce developers who did not fully understand CSS and JavaScript. Hand-coded some pure JavaScript functionality to provide features missing from the Salesforce framework, including a purely client-side PDF creation system to meet special security requirements for documents, using pdf-lib. Git repo administration.',
        skills: ['JavaScript', 'CSS', 'HTML', 'SQL', 'node.js', 'Visual Studio Code', 'Salesforce', 'Kreator', 'pdf-lib', 'Git repo administration']
    },
    {
        id: 'laborstaffing',
        company: 'Labor Staffing Inc.',
        position: 'Lead Full Stack Engineer',
        location: 'Atlanta, GA (remote)',
        duration: '05/2019 to 12/2020',
        description: 'Created a mobile and web-based app, to hire temp workers for major national staffing company, using JavaScript, C# with ASP.NET, MS SQL Server, and other technologies, including PHP with WordPress on secondary site, coding and leading a small team. Also data mining, refactoring, SEO, et cetera.',
        skills: ['ASP.NET', 'C#', 'HTML', 'JavaScript/ECMAScript 6', 'Bootstrap', '960.gs', 'Cordova/Ionic', 'SVN/Subversion', 'CSS', 'node.js', 'RESTful development', 'OAuth 2', 'SaaS', 'stored procedures', 'Photoshop', 'Illustrator', 'DocuSign API', 'PandaDoc API', 'Postman', 'Docker', 'Git repo administration']
    },
    {
        id: 'lenovo',
        company: 'Lenovo',
        position: 'Lead Web Engineer',
        location: 'Raleigh, NC (remote)',
        duration: '04/2020 to 07/2020',
        description: 'Hand-code a Chrome extension to allow Chromebooks to protect school laptops that were sent home, by detecting and blocking dangerous or adult websites using a secure API.',
        skills: ['Chrome extension APIs', 'HTML', 'JavaScript', 'RESTful APIs', 'OAuth', 'CSS', 'PhotoShop', 'Git repo administration']
    },
    {
        id: 'yldist',
        company: 'YLDist',
        position: 'Web Architect',
        location: 'Saint Louis, MO (remote)',
        duration: '11/2016 to 12/2019',
        description: 'Support and expand WordPress multisite servers, hosting thousands of websites for YLDist\'s customers. Program custom code with PHP and JavaScript, manage plugins, e-commerce with PayPal and WooCommerce, MySQL database, Apache services and site management, also overseeing 1 to 2 other developers. Some interface and graphic design.',
        skills: ['PHP', 'JavaScript', 'HTML', 'jQuery', 'CSS', 'SaaS', 'perl', 'shell scripting', 'OAuth 2.0', 'Photoshop', 'Illustrator', 'LAMP', 'Shopify', 'Git repo administration']
    },
    {
        id: 'comcast',
        company: 'Comcast via Judge Group',
        position: 'Lead Architect',
        location: 'Philadelphia, PA (remote)',
        duration: '03/2015 to 11/2016',
        description: 'Develop browser extensions for Chrome, Safari, and Firefox Webextensions using JavaScript, JSON, HTML, and CSS. Use the suite of browser-specific plugin APIs, RESTful APIs, OAuth 2.0. These plugins warn users if they go to a dangerous or pirate website, with a number of other features.',
        skills: ['HTML', 'JavaScript', 'Chrome Extension Development', 'Safari Extension Development', 'Firefox Extension Development', 'CSS', 'PhotoShop', 'Git repo administration']
    },
    {
        id: 'avaya',
        company: 'Avaya',
        position: 'Full Stack Engineer',
        location: 'Raleigh, NC (remote)',
        duration: '06/2014 to 01/2015',
        description: 'Front end/UI and Server-side development with JavaScript/CSS/HTML, especially with jQuery/JSON/AJAX, Angular.js, Bootstrap.js and PHP on Apache and IIS, and MS SQL Server. Part of a long-running team on a complex custom environment, tech lead with heavy mentoring.',
        skills: ['JavaScript', 'HTML', 'CSS', 'PHP', 'SQL', 'Bootstrap.js', 'Angular.js', 'node.js', 'Apache', 'Adobe Photoshop', 'MS SQL Server', 'Microsoft IIS']
    },
    {
        id: 'caesars',
        company: 'Caesar\'s Palace via OSG Global',
        position: 'Full Stack Engineer',
        location: 'Atlantic City, NJ (remote)',
        duration: '09/2013 to 02/2014',
        description: 'Analyze software options, then conduct front end/UI development with JavaScript/CSS/HTML, especially with jQuery/JSON/AJAX, Angular/Backbone, and server-side MVC/C# .NET and SQL Server work, in a Scrum environment. Conduct intensive QA testing, all for hotel booking engine website.',
        skills: ['HTML', 'JavaScript', 'CSS3', 'jQuery', 'node.js', 'backbone.js', 'Angular', 'SQL', 'C#.NET', 'E-Commerce', 'Microsoft Visual InterDev / Studio', 'MS SQL Server', 'Microsoft IIS']
    },
    {
        id: 'ubisense',
        company: 'Ubisense, via Oxford International',
        position: 'Front-End Engineer',
        location: 'Denver, CO (remote)',
        duration: '06/2013 to 09/2013',
        description: 'Heavy refactoring of UI code, especially the rewrite (using {less}) of a poorly-developed CSS class structure, also hand-coded JavaScript, HTML, bootstrap, Angular, media streaming.',
        skills: ['HTML', 'SQL', 'CSS modules', 'LESS/Sass', 'AWS', 'JavaScript', 'Java']
    },
    {
        id: 'smartcrowdz',
        company: 'Smartcrowdz.com',
        position: 'Full Stack Developer',
        location: 'Columbus, OH (remote)',
        duration: '01/2013 to 05/2013',
        description: 'Heavy refactoring of UI code, especially the rewrite (using {less}) of a poorly-developed CSS class structure, also hand-coded JavaScript, HTML, bootstrap, Angular, media streaming. Took over Java role partway through project.',
        skills: ['HTML', 'SQL', 'CSS modules', 'LESS/Sass', 'AWS', 'JavaScript', 'Java']
    },
    {
        id: 'federalreserve',
        company: 'Federal Reserve',
        position: 'Software Engineer',
        location: 'Saint Louis, MO',
        duration: '05/2012 to 11/2012',
        description: 'Advanced JavaScript programming, using jQuery and YUI, in a newScale and Remedy environment. Web 2.0 techniques, AJAX/JSON data transfer.',
        skills: ['HTML', 'SQL', 'JavaScript', 'CSS', 'jQuery', 'YUI', 'newScale', 'Remedy', 'AJAX', 'JSON']
    },
    {
        id: 'att',
        company: 'AT&T',
        position: 'Senior Web Developer',
        location: 'Saint Louis, MO',
        duration: '10/2011 to 02/2012',
        description: 'Convert existing network apps into websites, using very advanced JavaScript/JSON, CSS/XHTML, on the front end, and PHP/perl as middleware, using plSQL and Oracle on the back end, very light C/C++, design for mobile devices, including asset tracking/CMMS system.',
        skills: ['HTML', 'SQL', 'PHP', 'Perl', 'JavaScript', 'CSS', 'MS SQL Server', 'Microsoft IIS', 'Apache', 'JSON', 'XHTML', 'plSQL', 'Oracle', 'C/C++', 'Mobile Design', 'CMMS']
    },
    {
        id: 'charter',
        company: 'Charter Communications',
        position: 'Senior Web Developer',
        location: 'Saint Louis, MO',
        duration: '02/2011 to 06/2011',
        description: 'Design responsive, JSON/AJAX-based website interface, with PHP for asset tracking/CMMIS and other tasks.',
        skills: ['HTML', 'SQL', 'JavaScript', 'Oracle', 'Sybase', 'CSS', 'JSON', 'AJAX', 'PHP', 'CMMIS', 'Refactoring']
    },
    {
        id: 'boeing',
        company: 'Boeing',
        position: 'Senior Web Developer',
        location: 'Saint Louis, MO',
        duration: '10/2010 to 01/2011',
        description: 'Design and develop e-commerce website for the new 787 jetliner. Extensive use of AJAX/jQuery/JavaScript, CSS, HTML, XML, Object Oriented PERL, responsive drag & drop interface design, and code refactoring.',
        skills: ['HTML', 'SQL', 'JavaScript', 'Oracle', 'Sybase', 'CSS', 'jQuery', 'JSON', 'AJAX', 'OO Perl', 'Responsive Design', 'Code Refactoring', 'XML', 'E-commerce']
    },
    {
        id: 'infotech',
        company: 'InfoTech',
        position: 'Senior Web Developer',
        location: 'Gainesville, FL (remote)',
        duration: '06/2010 to 09/2010',
        description: 'Front end/UI development with JavaScript/jQuery, CSS, HTML, JSON/AJAX, and significant MVC.NET / C# .NET development, with SQL Server work.',
        skills: ['HTML', 'SQL', 'JavaScript', 'CSS', 'VBScript', 'ASP.NET', 'MVC.NET', 'C#', 'Microsoft Visual InterDev', 'Microsoft Visual Studio', 'MS SQL Server', 'Microsoft IIS', 'jQuery', 'JSON', 'AJAX']
    }
];
