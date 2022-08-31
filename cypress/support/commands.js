// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Кастомные команды



Cypress.Commands.add("createUser", (id, username, firstName, lastName, email, password, phone, userStatus) => {
    cy.request({ // добавляем объект для запроса
        method: "POST", // пишем метод запроса
        url: "https://petstore.swagger.io/v2/user", // пишем url, тот, куда будем направлять запрос
        body: { // описываем юзера или новые данные для него
            "id": id,
            "username": username,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phone": phone,
            "userStatus": userStatus
        }
    })
});

Cypress.Commands.add('updateUser', (id, username, firstName, lastName, email, password, phone, userStatus) => {
    cy.request({ // добавляем объект для запроса
        method: "PUT", // пишем метод запроса
        url: "https://petstore.swagger.io/v2/user/Vlad", // пишем url, тот, куда будем направлять запрос
        body: { // описываем юзера или новые данные для него
            "id": id,
            "username": username,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phone": phone,
            "userStatus": userStatus
        }
    })
});

Cypress.Commands.add('deleteUser', (username) => {
    cy.request({ // добавляем объект для запроса
        method: "DELETE", // пишем метод запроса
        url: "https://petstore.swagger.io/v2/user/Vlad", // пишем url, тот, куда будем направлять запрос
    })
});
