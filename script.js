window.addEventListener('DOMContentLoaded', (event) => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayData(data));
});

function displayData(data) {
    var container = document.getElementById('data-container');
    container.innerHTML = '';

    var name = document.createElement('div');
    name.classList.add('name');
    name.textContent = 'Name: ' + data.name;
    container.appendChild(name);

    var description = document.createElement('div');
    description.classList.add('description');
    description.textContent = 'Description: ' + data.description;
    container.appendChild(description);

    var keywords = document.createElement('div');
    keywords.classList.add('keywords');
    keywords.textContent = 'Keywords: ' + data.keywords.join(', ');
    container.appendChild(keywords);

    var homepage = document.createElement('div');
    homepage.classList.add('homepage');
    homepage.textContent = 'Homepage: ' + data.homepage;
    container.appendChild(homepage);

    var license = document.createElement('div');
    license.classList.add('license');
    license.textContent = 'License: ' + data.license;
    container.appendChild(license);

    var support = document.createElement('div');
    support.classList.add('support');
    support.textContent = 'Support:';
    container.appendChild(support);

    var issues = document.createElement('div');
    issues.textContent = 'Issues: ' + data.support.issues;
    container.appendChild(issues);

    var forum = document.createElement('div');
    forum.textContent = 'Forum: ' + data.support.forum;
    container.appendChild(forum);

    var wiki = document.createElement('div');
    wiki.textContent = 'Wiki: ' + data.support.wiki;
    container.appendChild(wiki);

    var irc = document.createElement('div');
    irc.textContent = 'IRC: ' + data.support.irc;
    container.appendChild(irc);

    var source = document.createElement('div');
    source.textContent = 'Source: ' + data.support.source;
    container.appendChild(source);

    var require = document.createElement('div');
    require.classList.add('require');
    require.textContent = 'Require:';
    container.appendChild(require);

    for (var package in data.require) {
        var requirePackage = document.createElement('div');
        requirePackage.textContent = package + ': ' + data.require[package];
        container.appendChild(requirePackage);
    }

    var requireDev = document.createElement('div');
    requireDev.classList.add('require-dev');
    requireDev.textContent = 'Require-dev:';
    container.appendChild(requireDev);

    for (var package in data['require-dev']) {
        var requireDevPackage = document.createElement('div');
        requireDevPackage.textContent = package + ': ' + data['require-dev'][package];
        container.appendChild(requireDevPackage);
    }

    var config = document.createElement('div');
    config.classList.add('config');
    config.textContent = 'Config:';
    container.appendChild(config);

    for (var key in data.config) {
        var configItem = document.createElement('div');
        configItem.textContent = key + ': ' + data.config[key];
        container.appendChild(configItem);
    }

    var scripts = document.createElement('div');
    scripts.classList.add('scripts');
    scripts.textContent = 'Scripts:';
    container.appendChild(scripts);

    for (var script in data.scripts) {
        var scriptItem = document.createElement('div');
        scriptItem.textContent = script + ': ' + data.scripts[script];
        container.appendChild(scriptItem);
    }

    var extra = document.createElement('div');
    extra.classList.add('extra');
    extra.textContent = 'Extra:';
    container.appendChild(extra);

    for (var key in data.extra) {
        var extraItem = document.createElement('div');
        extraItem.textContent = key + ': ' + JSON.stringify(data.extra[key]);
        container.appendChild(extraItem);
    }

    var repositories = document.createElement('div');
    repositories.classList.add('repositories');
    repositories.textContent = 'Repositories:';
    container.appendChild(repositories);

    for (var repository of data.repositories) {
        var repositoryItem = document.createElement('div');
        repositoryItem.textContent = 'Type: ' + repository.type + ', URL: ' + repository.url;
        container.appendChild(repositoryItem);
    }
}
