const { id, username, firstName, lastName, email, password, phone, userStatus } = require('../fixtures/user.json');

describe("API user tests", () => {
    it("Should create a new user", () => {
        cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus)
            .then((response) => {  // получили как результат response и обращаемся к нему
                expect(response.status).to.eql(200); // асёршн на проверку статуса 200
            });
    });

    it("Should update id", () => {
        cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus);
        cy.updateUser(id[1], username, firstName, lastName, email, password, phone, userStatus)
            .then((response) => {  // получили как результат response и обращаемся к нему
                expect(response.body.message).to.eql("101"); // асёршн на проверку нового id
            });
    });

    it("Should delete user", () => {
        cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus);
        cy.deleteUser(username)
            .then((response) => {  // получили как результат response и обращаемся к нему
                expect(response.body.lastName).to.not.equal("Ezhkov"); // асёршн на проверку отсутствие такой фамилии в базе
                expect(response.status).to.eql(200); // асёршн на проверку статуса 200
            });
    });
});